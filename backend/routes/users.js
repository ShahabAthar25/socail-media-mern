const router = require("express").Router();

const controller = require("../controller/user");
const isAuthenticated = require("../middleware/isAuthenticated");
const isValidId = require("../middleware/isValidId");

router.get("/me", isAuthenticated, controller.getCurrentUserProfile);
router.get("/:id", [isAuthenticated, isValidId], controller.getUserProfile);
router.put("/:id", [isAuthenticated, isValidId], controller.updateUser);
router.delete("/:id", [isAuthenticated, isValidId], controller.deleteUser);
router.put("/follow/:id", [isAuthenticated, isValidId], controller.followUser);

module.exports = router;
