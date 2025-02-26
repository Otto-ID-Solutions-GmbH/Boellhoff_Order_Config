const { typeMapping, Addresses, sleepSchedules, notInJSON } = require('./consts')


function convertValue(key, value) {
        if (key in typeMapping) {
            if (typeMapping[key] === "boolean") {
                return value === "true";
            } else if (typeMapping[key] === "number" && value !== undefined && value !== null) {
                return +value;
            }
        }
        return value;
    }

function getAddressForEmail(email) {
    const addressEntry = Addresses.find((entry) => entry.email === email);
    return addressEntry ? addressEntry.address : "";
}


const handlerMap = {
    "selectEmail": (key, value, data) => {
        data.emailAddress = value;
        data.address = getAddressForEmail(value);
    },
    "sleepSchedules": (key, value, data) => {
        data.jsonforAttachment[key] = getSleepSchedule(value);
    },
    "default": (key, value, data) => {
        if (notInJSON.includes(key)) {
            data.jsonforText[key] = convertValue(key, value);
        } else {
            data.jsonforAttachment[key] = convertValue(key, value);
        }
    }
};

function getSleepSchedule(sleepScheduleKey){
    return sleepSchedules[sleepScheduleKey];
} 

module.exports = { handlerMap };
