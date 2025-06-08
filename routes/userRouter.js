const express = require('express');
const router = express.Router(); // ← Add parentheses!

router.get('/', (req, res) => {
    res.send('Users Page');
});

module.exports = router;