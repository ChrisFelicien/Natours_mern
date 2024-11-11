import {} from "dotenv/config";
import app from "./app.js";
import connectDB from "./lib/connectBD.js";

const port = process.env.PORT || 5000;

connectDB();
app.listen(port, () => console.log(`The server is running on port ${port}`));
