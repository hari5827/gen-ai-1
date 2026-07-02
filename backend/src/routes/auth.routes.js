const express = require("express")
const router = express.Router()
const auth = require("../controller/auth.controller")
const authMiddleware = require("../middleware/auth.middleware")
router.get("/get-me", authMiddleware.authUser, auth.getMe)

router.post("/register",auth.register)
router.post("/login",auth.login)
router.get("/logout", auth.logout)
module.exports=router;
