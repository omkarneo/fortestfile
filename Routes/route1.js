const router = require('express').Router

router.get("/2", (req, res) => {
    res.send("1,2")
})
router.get("/3", (req, res) => {
    res.send("1,3")
})