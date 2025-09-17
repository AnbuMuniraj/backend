const express = require("express");
const router = express.Router();
const { getUser, postUser ,deleteUSer,updateUser} = require("../controller/userController");

// GET /api/
router.get("/", getUser);
router.post("/post", postUser);
router.delete("/:id", deleteUSer);
router.put("/:id", updateUser);

module.exports = router;