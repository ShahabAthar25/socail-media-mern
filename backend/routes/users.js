const router = require("express").Router();

const controller = require("../controller/user");
const isAuthenticated = require("../middleware/isAuthenticated");

router.get("/me", isAuthenticated, controller.getCurrentUserProfile);
router.get("/:id", isAuthenticated, controller.getUserProfile);
router.put("/:id", isAuthenticated, controller.updateUser);
router.delete("/:id", isAuthenticated, controller.deleteUser);
router.put("/follow/:id", isAuthenticated, controller.followUser);

module.exports = router;
