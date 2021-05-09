const mongoose = require("mongoose");
const config = require("./config");

const URL = `mongodb://${config.MONGO_HOST}/${config.MONGO_URL}`;

mongoose
  .connect(URL, {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => console.log(`Mongo connection: ${db.connection.name}`))
  .catch((error) => console.log(error));
