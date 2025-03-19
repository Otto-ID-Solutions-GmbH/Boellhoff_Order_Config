const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const { handlerMap } = require("./utils/helperFunctions.js")
const { sendEmails } = require('./utils/email.js');
const { recipients } = require("./utils/recipients.js")

dotenv.config();

const app = express();
const port = process.env.PORT || 3030;

app.use(bodyParser.urlencoded({ extended: false }));


app.post("/submit", (req, res) => {
    let jsonforAttachment = {};
    let jsonforText = {};
    let selectedRep = {
        address: "",
        emailAddress: ""
    };

    // Filter the data
    for (const [key, value] of Object.entries(req.body)) {
        const handler = handlerMap[key] || handlerMap['default'];
        handler(key, value, { jsonforText, jsonforAttachment, selectedRep });
    }
    const address = selectedRep.address

    const mailData = {
        address,
        jsonforText,
        jsonforAttachment
    };

    sendEmails(recipients, mailData, selectedRep.emailAddress)
        .then(() => res.sendFile(__dirname + "/views/thanks.html"))
        .catch(() => res.sendFile(__dirname + "/views/error.html"));
});

app.listen(port, () => { });
