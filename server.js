const express = require("express")
const mongoose = require("mongoose")
const userRouter = require("./routes/User.routes")
const app = express()
app.use(express.json())
app.use("/users", userRouter)

mongoose.connect("mongodb+srv://rashadkhll:rashad918@cluster0.vllij5v.mongodb.net/")
const connection = mongoose.connection
connection.once("open", () => {
    console.log("db connected")
})
app.listen(process.env.PORT || 8080, () => {
    console.log("app running on 8080")
})