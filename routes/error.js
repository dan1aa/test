const router = require('express').Router()

router.get('/error', (req, res) => {
    res.render('error', {
        cssFileName: 'error'
    })
})

module.exports = router;