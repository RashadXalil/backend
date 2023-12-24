const express = require("express")
const { UserController } = require("../controllers/User.controller")

const router = express.Router()

//get All
router.get("/", UserController.getAll)
// get By Id
router.get("/:id", UserController.getById)
// post
router.post("/", UserController.add)
// edit
router.put("/:id", UserController.edit)
// delete
router.delete("/:id", UserController.delete)

module.exports = router