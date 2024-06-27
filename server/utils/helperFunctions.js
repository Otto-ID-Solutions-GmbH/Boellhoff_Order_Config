const { typeMapping, Addresses } = require('./consts')

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

module.exports = { convertValue, getAddressForEmail };
