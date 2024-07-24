const recipients = {
    main: "raey@otto-id.com",
    cc: ["raey@otto-id.com", "raey@otto-id.com"],
    additional: "raey@otto-id.com"
};

const notInJSON = [
    "Device-Type", "Sales-Unit", "teamviewer_alies", "final_cost_center",
    "final_investment_number", "floorScan1200x800", "floorScan800x600",
    "shelfScan", "labelScan", "powerCharger", "tAdapter", "extensionCable15m",
    "extensionCable3m", "WallMountingKit", "Order_number"
];

const typeMapping = {
    // Booleans
    deleteToggle: "boolean",
    sendingOnMonday: "boolean",
    sendingOnTuesday: "boolean",
    sendingOnWednesday: "boolean",
    sendingOnThursday: "boolean",
    sendingOnFriday: "boolean",
    sendingOnSaturday: "boolean",
    sendingOnSunday: "boolean",
    epcDependent: "boolean",
    orderTransferAutomatic: "boolean",
    transferOptionSummarized: "boolean",
    epcMarriedToContainer: "boolean",
    inventoryFunctionality: "boolean",
    bluetooth: "boolean",
    stationary: "boolean",
    landscape: "boolean",
    internalAntenna: "boolean",
    engel: "boolean",

    // Numbers
    // stationNumber: "number",
    final_cost_center: "number",
    seconds: "number",
    floorScan1200x800: "number",
    floorScan800x600: "number",
    labelScan: "number",
    powerCharger: "number",
    tAdapter: "number",
    extensionCable15m: "number",
    extensionCable3m: "number",
    dbm: "number",
    blockingTime: "number",
    WallMountingKit: "number"
};

const Addresses = [
    {
        email: "hrehm@boellhoff.com",
        address:
            "Böllhoff GmbH, Heiko Rehm, Königstrasse 25, 32584 Löhne, Deutschland",
    },
    {
        email: "mbischiff@boellhoff.com",
        address:
            "Böllhoff GmbH, Matthias Bischoff, Gewerbestrasse 10, 04420 Markranstädt/OT Frankenheim, Deutschland",
    },
    {
        email: "shutzler@boellhoff.com",
        address:
            "Böllhoff GmbH, Stefan Hutzler, Bühlstraße 16, 90610 Winkelhaid, Deutschland",
    },
    {
        email: "mimbach@boellhoff.com",
        address:
            "Böllhoff GmbH, Mathias Imbach, St Anna Weg 11, 89349 Burtenbach, Deutschland",
    },
    {
        email: "funtersmeier@boellhoff.com",
        address:
            "Böllhoff GmbH, Fritz Untersmeier, Johann-Roithner-Straße 131, 4050 Traun, Österreich",
    },
    {
        email: "sgrünwald@boellhoff.com",
        address:
            "Böllhoff GmbH, Stefanie Grünwald, Johann-Roithner-Straße 131, 4050 Traun, Österreich",
    },
    {
        email: "apeter@boellhoff.com",
        address:
            "Böllhoff KFT, Àlmos Peter, Alba Ipari Zona, Zsúrió utca 8, 8000 Székesfehérvár, Ungarn",
    },
    {
        email: "hboer@boellhoff.com",
        address:
            "Böllhoff s.r.o., Henri Boer, Palouky C.P. 1365, 25301 Hostivice, Tschechien",
    },
    {
        email: "mfabian@boellhoff.com",
        address:
            "Böllhoff s.r.o., Martin Fabian, Dialnicná Cesta 10 a, 90301 Senec, Slovakei",
    },
    {
        email: "a.goeppel@schrauben-engel.de",
        address:
            "Verbindungselemente Engel GmbH	Andreas Göppel	Weltestraße 2+4	88250	Weingarten	Deutschland	",
    },
    {
        email: "mgrassy@boellhoff.com",
        address:
            "Böllhoff GmbH	Mario Graßy	Archimedesstraße 1-4	33649	Bielefeld	Deutschland",
    },
    {
        email: "getahunraey@gmail.com",
        address:
            "Böllhoff GmbH	Mario Graßy	Archimedesstraße 1-4	33649	Bielefeld	Deutschland",
    },
];

module.exports = { notInJSON, recipients, typeMapping, Addresses };
