// This is the our Api
import News from "../model/news-schema.js";

export const getNews = async (request, response) => {
  try {
    let data = await News.find({});
    response.status(200).json(data);
  } catch (error) {
    response.status(500).json({ message: data.message });
  }
};
