import mongoose from "mongoose";

const Connection = async (username, password) => {
  const URL = `mongodb+srv://${username}:${password}@newsly.hzzmouv.mongodb.net/?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, { useNewUrlParser: true }); // use new url parser
    console.log("Databse connected with mongodb");
  } catch (error) {
    console.log(`Error while connecting with the database`, error);
  }
};

export default Connection;
