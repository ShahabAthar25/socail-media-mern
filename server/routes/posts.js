const router = require("express").Router();

const controller = require("../controllers/posts");

router.get("/", controller.getPosts);

module.exports = router;
