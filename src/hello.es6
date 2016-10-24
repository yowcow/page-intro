import React from 'react'
import ReactDOM from 'react-dom'

module.exports = (el) => () => ReactDOM.render(<h1>Hello</h1>, el)
