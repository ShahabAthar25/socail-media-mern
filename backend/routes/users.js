const router = require("express").Router();

const controller = require("../controller/user");
const isAuthenticated = require("../middleware/isAuthenticated");

router.get("/me", isAuthenticated, controller.getCurrentUserProfile);
router.get("/:id", isAuthenticated, controller.getUserProfile);
router.put("/:id", isAuthenticated, controller.updateUser);
router.delete("/:id", isAuthenticated, controller.deleteUser);
router.put("/:id/follow", isAuthenticated, controller.followUser);
router.put("/me/followers", isAuthenticated, controller.getUserFollowers);

module.exports = router;
