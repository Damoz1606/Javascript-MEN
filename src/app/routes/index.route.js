const controller = require("../controller/index.controller");
const router = require("express").Router();

router
  .route("/")
  .get(controller.getAll)
  .post(controller.post)
  .delete(controller.deleteAll);

router
  .route("/:id")
  .get(controller.getByID)
  .put(controller.put)
  .delete(controller.deleteByID);

module.exports = router;
