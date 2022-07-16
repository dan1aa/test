const router = require('express').Router()
const axios = require('axios')

router.post('/search', (req, res) => {
    const { username } = req.body;
    if (!username.trim()) {
        res.redirect('error')
    }
    else {
        axios.get(`https://api.github.com/users/${username}`)
            .then(response => {
                    res.render('search', {
                        username: response?.data.login,
                        id: response?.data.id,
                        avatar: response?.data.avatar_url,
                        name: response?.data.name,
                        repositories: response?.data.public_repos,
                        gists: response?.data.public_gists,
                        followers: response?.data.followers,
                        cssFileName: 'search'
                    })
            })
    }
})

module.exports = router;