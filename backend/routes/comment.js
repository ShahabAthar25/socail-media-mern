const router = require("express").Router();

const controller = require("../controller/comment");
const isAuthenticated = require("../middleware/isAuthenticated");

router.get("/:id", isAuthenticated, controller.getComments);
router.post("/:id", isAuthenticated, controller.comment);
router.put("/:id", isAuthenticated, controller.updateComment);
router.delete("/:id", isAuthenticated, controller.deleteComment);
router.put("/like/:id", isAuthenticated, controller.likeComment);

module.exports = router;
