const router = require('express').Router()

router.get('/search', (req, res) => {
    res.json({requestBody: req.body})
})

module.exports = router;