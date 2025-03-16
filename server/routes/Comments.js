const express = require('express');
const router = express.Router();
const { Comments } = require("../models");

router.get('/:PostId', async (req, res) => {
    const postId = req.params.PostId;
    if (!postId) return res.status(400).json({ error: "Brak ID posta" });

    try {
        const comments = await Comments.findAll({ where: { PostId: postId } });
        res.json(comments);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Błąd pobierania komentarzy" });
    }
});

router.post("/", async (req, res) => {
    try {
        const comment = req.body;
        if (!comment.commentBody || !comment.PostId) {
            return res.status(400).json({ error: "Brak treści komentarza lub PostId" });
        }

        const newComment = await Comments.create(comment);
        res.json(newComment);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Błąd zapisu komentarza" });
    }
});

module.exports = router;
