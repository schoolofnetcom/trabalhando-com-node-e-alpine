const express = require('express');
const router = express.Router();

const db = require('./../db');

router.get('/', async (req, res) => {
    try {
        const result = await db.asyncFind({});
        return res.status(200).json({ result });
    } catch (err) {
        return res.status(500).json({ err });
    }
});

router.post('/', async (req, res) => {
    try {
        const result = await db.asyncInsert(req.body);
        return res.status(201).json({ result });
    } catch(err) {
        return res.status(500).json({ err });
    }
})


module.exports = router;