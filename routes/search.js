const router = require('express').Router()

router.get('/search', (req, res) => {
    const { username } = req.body;
    console.log(username)
    res.end()
})

module.exports = router;