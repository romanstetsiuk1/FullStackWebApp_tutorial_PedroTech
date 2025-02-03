// Zaczynamy budowe polaczenie node.js i express serwer. To jest potrzebne do robienia API requests.
const express = require('express')
const app = express()

// Start API na odpowiednim porcie (ma sie roznic od portu na ktorym inicujemy aplikacje React)
app.listen(3001, () => {
    console.log("Server running on port 3001");
});
