import chai from 'chai'
import { weekday, snippet, numProps, filterBetween } from './functions'
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
    expect(weekday(new Date(2014, 'May', 15))).to.deep.equal('Invalid')
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
    expect(snippet({},3)).to.be.undefined
  })

  it('it retruns false if the input is unexpected/invalid', () => {
    expect(snippet([])).to.be.undefined
  })

})


describe('numProps', () => {

  it('should be a function', () => {
    expect(numProps).to.be.a('function')
  })

  it('returns the number of properties an object has', () => {
      let friend = {
      name: 'Dominique',
      age: 30,
      phone: '555-555-5555'
    }
    expect(numProps(friend)).to.deep.equal(3)
  })

  it('returns the number of properties an object has', () => {
    expect(numProps([])).to.deep.equal(0)
  })

  it('it retruns false if the input is unexpected/invalid', () => {
    expect(numProps("")).to.deep.equal(0)
  })

})


describe('filterBetween', () => {

  it('should be a function', () => {
    expect(filterBetween).to.be.a('function')
  })

  it('returns a new array containing only the elements that are greater than or equal to min and less than or equal to max', () => {
    let array = [1, 2, 3, 4, 5, 6, 7, 99, 100]
    expect(filterBetween(array, 50, 100)).to.deep.equal([99, 100])
  })

  it('returns a new array containing only the elements that are greater than or equal to min and less than or equal to max', () => {
    let array = [1, 2, 4, 5, 6, 7]
    expect(filterBetween(array, 2, 6)).to.deep.equal([2, 4, 5, 6])
  })

  it('it retruns false if the input is unexpected/invalid', () => {
    expect(filterBetween()).to.be.undefined 
  })

})
