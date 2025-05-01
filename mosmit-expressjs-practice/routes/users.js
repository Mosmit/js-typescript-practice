const express = require("express")
const router = express.Router()

router
    .route("/:id")
    .get((req, res)=>{
    res.send(`user list details ${req.params.id}`)
    })
    .put((req, res)=>{
        res.send(`update list details ${req.params.id}`)
    })
    .delete((req, res)=>{
        res.send(`delete list details ${req.params.id}`)
    })

const users = [{ name: "kyle"}, { name: "sally"}]
router.param("id", (req, res, next, id) =>{
    req.user = users[id]
    next()
})

module.exports = router