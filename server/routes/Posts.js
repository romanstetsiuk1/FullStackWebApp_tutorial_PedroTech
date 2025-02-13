const express = require('express');
const router = express.Router();

// wyciagamy to co stworzylismy w models:
const { Posts } = require("../models");

// można robic requesty typu get i post:
// router.get()
// router.post()

// Ten skrypt wysyla "Hello World;" na adress http://localhost:3001/posts 
router.get("/", (req, res) => {
    res.json("Hello World;");       // wysyła w formacie .json
    // res.send("Hello World;");
});
router.post("/", async (req, res) => {
    try {
        const post = req.body;
        const newPost = await Posts.create(post);
        res.json(newPost);
    } catch (error) {
        console.error("Błąd przy dodawaniu posta:", error);
        res.status(500).json({ error: "Nie udało się dodać posta" });
    }
});
// W metodzie post uzywamy sqlize. Dane wysyłane w formacie .json jako obiekt:
router.post("/", async (req, res) => {
    const post = req.body;

    // await Posts.create({
    //     title: "Testowy post",
    //     postText: "To jest test",
    //     userName: "Admin"
    // });
    await Posts.create(post);
    res.json(post);
});


module.exports = router;