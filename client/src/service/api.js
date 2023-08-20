import axios from "axios";

export const getNews = async () => {
  const URL = "";
  try {
    return await axios.get();
  } catch (error) {
    console.log("Error while calling get news Api", error);
  }
};
