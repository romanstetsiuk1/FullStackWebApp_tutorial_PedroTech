// Zaczynamy budowe polaczenie node.js i express serwer. To jest potrzebne do robienia API requests.
const express = require('express');
const app = express();

app.use(express.json());
// // Rozwiazanie z AI:
// app.post("/posts", (req, res) => {
//     try {
//         const { title, postText, userName } = req.body;
//         if (!title || !postText || !userName) {
//             return res.status(400).json({ error: "Missing required fields" });
//         }
//         res.status(201).json({ message: "Post created", data: req.body });
//     } catch (error) {
//         console.error("Error handling /posts request:", error);
//         res.status(500).json({ error: "Internal server error" });
//     }
// });



const db = require("./models");

// Routers
const postRouter = require('./routes/Posts');
app.use("/posts", postRouter);


// Start API na odpowiednim porcie (ma sie roznic od portu na ktorym inicujemy aplikacje React)
    // db.sequelize lączy naszą aplikację z MySQL
db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log("Server running on port 3001");
    });
});

// Sprawdzenie czy polaczenie z baza działa
db.sequelize.authenticate()
    .then(() => console.log("Polaczono z baza danych"))
    .catch(err => console.error("Blad polaczenia z baza:", err));