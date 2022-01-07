const router = require("express").Router();

const controller = require("../controller/post");
const isAuthenticated = require("../middleware/isAuthenticated");
const isValidId = require("../middleware/isValidId");

router.get("/", isAuthenticated, controller.getPosts);
router.get("/me", isAuthenticated, controller.getUserPosts);
router.get("/:id", [isAuthenticated, isValidId], controller.getPost);
router.post("/", isAuthenticated, controller.createPost);
router.put("/:id", [isAuthenticated, isValidId], controller.updatePost);
router.delete("/:id", [isAuthenticated, isValidId], controller.deletePost);
router.put("/:id/like", [isAuthenticated, isValidId], controller.likePost);

module.exports = router;
