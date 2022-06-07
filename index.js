const express = require('express')
const heroes = require('./heroes')
const { getAllHeroes, getHeroBySlug } = require('./controller/heroes')

const app = express()

app.get('/', getAllHeroes)

app.get('/:slug', getHeroBy)

app.listen(1337, () => {
  console.log('Listening on port 1337...') //eslint-disable-line no-console
})
