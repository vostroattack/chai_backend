require('dotenv').config()
const express = require('express')

const app = express()

const port = 4000

const gitHubData={
    "login": "vostroattack",
    "id": 118600361,
    "node_id": "U_kgDOBxGyqQ",
    "avatar_url": "https://avatars.githubusercontent.com/u/118600361?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/vostroattack",
    "html_url": "https://github.com/vostroattack",
    "followers_url": "https://api.github.com/users/vostroattack/followers",
    "following_url": "https://api.github.com/users/vostroattack/following{/other_user}",
    "gists_url": "https://api.github.com/users/vostroattack/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/vostroattack/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/vostroattack/subscriptions",
    "organizations_url": "https://api.github.com/users/vostroattack/orgs",
    "repos_url": "https://api.github.com/users/vostroattack/repos",
    "events_url": "https://api.github.com/users/vostroattack/events{/privacy}",
    "received_events_url": "https://api.github.com/users/vostroattack/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Sarthak Agarwal",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 3,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2022-11-19T09:57:26Z",
    "updated_at": "2025-02-17T18:22:31Z"
  }

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('sarthakdotcom')
})

app.get('/login', (req, res) => {
    res.send('<h1>please login at chai aur code</h1>')
})

app.get('/youtube', (req, res) => {
    res.send('<h2>Chai aur Code</h2>')
})

app.get('/github', (req, res) => {
    res.json(gitHubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})