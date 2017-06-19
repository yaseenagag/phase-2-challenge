import chai from 'chai'
import weekday from './functions'
const expect = chai.expect

describe('weekday', () => {

  it('should be a function', () => {
    expect(weekday).to.be.a('function')
  })

  it('find the weekday for a given Date object', () => {
    expect(weekday(new Date(2017, 5, 15))).to.deep.equal("Thu")
  })

  it('find the weekday for a given Date object', () => {
    expect(weekday(new Date(1993, 8, 15))).to.deep.equal("Wed")
  })

  it('find the weekday for a given Date object', () => {
    expect(weekday(new Date(2014, 5, 15))).to.deep.equal("Sun")
  })

  it('find the weekday for a given Date object', () => {
    expect(weekday("A")).to.deep.equal(undefined)
  })

})
