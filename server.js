const express = require("express")
const app = express();
const path = require('path');

const port = 8080;

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
});

// app.use(express.static("public"))
app.get("/.well-known/assetlinks.json", (req, res) => {
    res.send([
        {
            "relation": ["delegate_permission/common.handle_all_urls"],
            "target": {
                "namespace": "unilinksdemo",
                "package_name": "com.example.unilinksdemo",
                "sha256_cert_fingerprints": [
                    "3C:13:7D:68:EA:B6:6A:08:46:E7:0A:16:16:92:A5:0B:F6:B7:0A:65:8E:A5:64:DC:0D:E5:96:3B:E4:0A:EF:54"
                ]
            }
        }
    ])
})

app.listen(port, (req, res) => {
    console.log(`Server is Listening on port ${port}`)
});