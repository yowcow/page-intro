import expect from 'expect'
import React from 'react'
import ReactTestUtils from 'react-addons-test-utils'

const renderer = ReactTestUtils.createRenderer()
const User = require('../src/user.es6')

describe('User', () => {
    const ctx = {
        params: {
            userId: "9999"
        }
    }
    const result = renderer.render(<User ctx={ctx} />)

    it('should render h1', () => {
        expect(result.type).toEqual('h1')
    })

    it('should contain ["User ", "9999"]', () => {
        expect(result.props.children).toEqual(['User ', '9999'])
    })
})
