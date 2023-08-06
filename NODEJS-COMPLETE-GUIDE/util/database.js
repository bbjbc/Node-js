const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://aoo4550:9FDtsrk2VU9h9IAp@cluster0.u8voidr.mongodb.net/?retryWrites=true&w=majority"
  )
    .then((client) => {
      console.log("Connected!");
      callback(client);
    })
    .catch((err) => {
      console.log(err);
    }); // MongoDB에 연결 생성
};

module.exports = mongoConnect;
