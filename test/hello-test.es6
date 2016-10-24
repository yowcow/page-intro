import expect from 'expect'
import React from 'react'
import ReactTestUtils from 'react-addons-test-utils'

const renderer = ReactTestUtils.createRenderer()
const Hello = require('../src/hello.es6')

describe('Hello', () => {
    const result = renderer.render(<Hello />)

    it('should render h1', () => {
        expect(result.type).toEqual('h1')
    })

    it('should contain "Hello です"', () => {
        expect(result.props.children).toEqual('Hello です')
    })
})
