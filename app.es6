import page from 'page'
import React from 'react'
import ReactDOM from 'react-dom'

const el = document.getElementById('main')

const Index    = require('./src/index.es6')
const Hello    = require('./src/hello.es6')
const User     = require('./src/user.es6')
const NotFound = require('./src/not-found.es6')

page('/', (ctx) =>
    ReactDOM.render(<Index ctx={ctx} />, el))

page('/hello', (ctx) =>
    ReactDOM.render(<Hello ctx={ctx} />, el))

page('/user/:userId', (ctx) =>
    ReactDOM.render(<User ctx={ctx} />, el))

page('*', (ctx) =>
    ReactDOM.render(<NotFound ctx={ctx} />, el))

page()
