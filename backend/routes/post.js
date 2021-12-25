const router = require("express").Router();

const controller = require("../controller/post");
const isAuthenticated = require("../middleware/isAuthenticated");

router.get("/me", isAuthenticated, controller.getUserPosts);
router.get("/:id", controller.getPost);
router.post("/", isAuthenticated, controller.createPost);
router.put("/:id", isAuthenticated, controller.updatePost);
router.delete("/:id", isAuthenticated, controller.deletePost);
router.put("/:id/like", isAuthenticated, controller.likePost);
router.get("/comments/:id", isAuthenticated, controller.postComments);
router.post("/comment/:id", isAuthenticated, controller.comment);
router.put("/comment/:id", isAuthenticated, controller.updateComment);

module.exports = router;
