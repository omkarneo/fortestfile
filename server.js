const express = require("express")
const app = express();

const port = 8080;
app.use(express.static("public"))
app.get("/", (req, res) => {
    res.send("saasd")
})

app.listen(port, (req, res) => {
    console.log(`Server is Listening on port ${port}`)
});