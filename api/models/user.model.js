import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import validator from "validator";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name"],
    trim: true
  },
  email: {
    type: String,
    lowercase: true,
    trim: true,
    validate: [validator.isEmail, "Please provide valid email"],
    required: [true, "Please provide a email"],
    unique: true
  },
  role: {
    type: String,
    enum: ["user", "admin", "guide"],
    default: "user"
  },
  active: {
    type: Boolean,
    default: true
  },
  photo: {
    type: String,
    default: undefined
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    trim: true,
    select: false
  },
  confirmPassword: {
    type: String,
    trim: true,
    required: [true, "Please confirm your password"],
    validate: {
      validator: function (val) {
        return this.password === val;
      },
      message: "The two password should match"
    }
  }
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  this.password = await bcrypt.hash(this.password, 12);
  this.confirmPassword = undefined;
  next();
});

userSchema.methods.comparePassword = async (userPassword, exactPassword) => {
  return await bcrypt.compare(userPassword, exactPassword);
};

const User = mongoose.model("User", userSchema);

export default User;
