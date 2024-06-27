const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const { notInJSON, recipients } = require("./utils/consts.js")
const { convertValue, getAddressForEmail } = require("./utils/helperFunctions.js")
const { sendEmails } = require('./utils/email.js');

dotenv.config();

const app = express();
const port = process.env.PORT || 3030;

app.use(bodyParser.urlencoded({ extended: false }));


app.post("/submit", (req, res) => {
    let jsonforAttachment = {};
    let jsonforText = {};
    let address;
    let emailAddress;

    // Filter the data
    for (const [key, value] of Object.entries(req.body)) {
        if (notInJSON.includes(key)) {
            jsonforText[key] = convertValue(key, value);
        } else if (key === "selectEmail") {
            emailAddress = value;
            address = getAddressForEmail(value);
        } else {
            jsonforAttachment[key] = convertValue(key, value);
        }
    }

    const mailData = {
        address,
        jsonforText,
        jsonforAttachment
    };

    sendEmails(recipients, mailData, emailAddress)
        .then(() => res.sendFile(__dirname + "/views/thanks.html"))
        .catch(() => res.sendFile(__dirname + "/views/error.html"));
});

app.listen(port, () => {});
