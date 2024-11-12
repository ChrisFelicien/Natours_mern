import axiosInstance from "../utils/axiosInstance";

export const getAllTours = async () => {
  try {
    const response = await axiosInstance.get("/tours");
    const { tours } = await response.data;

    return tours;
  } catch (error) {
    console.log(error);
  }
};
