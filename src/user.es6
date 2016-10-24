import React from 'react'

module.exports = React.createClass({
    render() {
        return (
            <h1>User {this.props.ctx.params.userId}</h1>
        )
    }
})
