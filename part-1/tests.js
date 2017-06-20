import chai from 'chai'
import { weekday, snippet } from './functions'
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

  it('it retruns false if the input is unexpected/invalid', () => {
    expect(weekday("A")).to.be.undefined
  })

})

describe('snippet', () => {

  it('should be a function', () => {
    expect(snippet).to.be.a('function')
  })

  it('shortens the string given to the maxlength and adds the ellipsis character ("…") to the end of string', () => {
    expect(snippet("Hello, world!", 4)).to.deep.equal("Hell...")
  })

  it('return the string unmodified, if the string is shorter than the maxlength', () => {
    expect(snippet("Hello, world!", 13)).to.deep.equal("Hello, world!")
  })

  it('it retruns false if the input is unexpected/invalid', () => {
    expect(snippet({},3)).to.be.false
  })

  it('it retruns false if the input is unexpected/invalid', () => {
    expect(snippet([])).to.be.false
  })

})
