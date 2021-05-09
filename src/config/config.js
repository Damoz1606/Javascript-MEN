const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  MONGO_URL: process.env.MONGO_URL || "test",
  MONGO_HOST: process.env.MONGO_HOST || "localhost",
  PORT: process.env.PORT || 3000,
};
