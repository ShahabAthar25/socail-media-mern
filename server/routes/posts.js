const router = require("express").Router();

const controller = require("../controllers/posts");

router.get("/", controller.getPosts);
router.post("/", controller.createPost);

module.exports = router;
