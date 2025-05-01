const express = require("express")
const app = express()

app.set("view engine", "ejs")

app.get("/", (req, res)=>{
    console.log("were")
    res.render("index")
})

const userRouter = require("./routes/users")

app.use("/users", userRouter)

app.listen(3000)