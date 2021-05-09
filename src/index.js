const app = require("./app");
require("./config/database.config");

app.listen(app.get("port"), () => {
  console.log(`Server on port: ${app.get("port")}`);
});
