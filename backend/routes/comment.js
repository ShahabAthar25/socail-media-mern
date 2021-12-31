const router = require("express").Router();

const controller = require("../controller/comment");
const isAuthenticated = require("../middleware/isAuthenticated");
const isValidId = require("../middleware/isValidId");

router.get("/:id", [isAuthenticated, isValidId], controller.getComments);
router.post("/:id", [isAuthenticated, isValidId], controller.comment);
router.put("/:id", [isAuthenticated, isValidId], controller.updateComment);
router.delete("/:id", [isAuthenticated, isValidId], controller.deleteComment);
router.put("/like/:id", [isAuthenticated, isValidId], controller.likeComment);

module.exports = router;
