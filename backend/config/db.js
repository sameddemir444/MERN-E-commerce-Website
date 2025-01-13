const mongoose = require("mongoose");

const db = () => {
  mongoose
    .connect(
      "mongodb+srv://s4am3t:nSUyG5NQpwUD0K9K@cluster0.ea9t5.mongodb.net/"
    )
    .then(() => {
      console.log("MongoDB connected!");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = db;
