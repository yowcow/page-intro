import expect from 'expect'

const ok = () => 'ok'

describe('ok()', () => {
    it('should return "ok"', () => {
        expect(ok()).toEqual('ok')
    })
})
