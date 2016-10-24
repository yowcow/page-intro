import expect from 'expect'
import React from 'react'
import ReactTestUtils from 'react-addons-test-utils'

const renderer = ReactTestUtils.createRenderer()
const NotFound = require('../src/not-found.es6')

describe('NotFound', () => {
    const result = renderer.render(<NotFound/>)

    it('should render h1', () => {
        expect(result.type).toEqual('h1')
    })

    it('should contain "Not Found"', () => {
        expect(result.props.children).toEqual("Not Found です")
    })
})
