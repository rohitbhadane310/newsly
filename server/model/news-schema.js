// use this to validate the constant data.js
import mongoose from "mongoose";

const newsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
    unique: true,
  },
  timestamp: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  publisher: {
    type: String,
    required: true,
  },
});



// In mongodb we use the collection like in mysql we create the tables but here we create collections
const news = mongoose.model('news' , newsSchema);

export default news;