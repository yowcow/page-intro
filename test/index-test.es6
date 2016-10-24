import expect from 'expect'
import React from 'react'
import ReactTestUtils from 'react-addons-test-utils'

const renderer = ReactTestUtils.createRenderer()
const Index = require('../src/index.es6')

describe('Index', () => {
    const result = renderer.render(<Index />)

    it('should render h1', () => {
        expect(result.type).toEqual('h1')
    })

    it('should contain "Index です"', () => {
        expect(result.props.children).toEqual('Index です')
    })
})
