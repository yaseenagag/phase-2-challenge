'use strict'

const weekday = date => date.toString().split(' ')[0]


const snippet = (string, maxlength) => {

  if ( typeof string === 'string' || typeof maxlength === NaN ) {
    return (string.length > maxlength) 
      ? string.slice(0,maxlength) + "..." 
      : string
  }
}


const numProps = object => Object.keys(object).length


const filterBetween = (array, min, max) => {

  if (Array.isArray(array)) {
    return array.filter(number => number >= min && number <= max)
  }
}


export { weekday, snippet, numProps, filterBetween }
