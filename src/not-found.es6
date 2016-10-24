import React from 'react'
import ReactDOM from 'react-dom'

module.exports = (el) => () => ReactDOM.render(<h1>404 Not Found</h1>, el)
