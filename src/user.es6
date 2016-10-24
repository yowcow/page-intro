import React from 'react'
import ReactDOM from 'react-dom'

module.exports = (el) => (ctx) => ReactDOM.render(<h1>User {ctx.params.userId}</h1>, el)
