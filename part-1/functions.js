'use strict'

const weekday = (date) => {
  let dayName

  if ( typeof date === 'object' ) {
    dayName = date.toString().split(' ')[0]
    return dayName
  }
}


const snippet = (string, maxlength) => {
  let shortenedString

  if ( typeof string !== 'string' || typeof maxlength === NaN ) {
    return false
  }

  if ( string.length > maxlength ) {
    shortenedString = string.slice(0,maxlength) + "..."
    return shortenedString
  }
  return string
}


const numProps = (obj) => {
  let result

  if ( typeof obj === 'object') {
    result = Object.keys(obj).length
    return result
  }
}


const filterBetween = (array, min, max) => {
  let result

  if (Array.isArray(array)) {
    for (var i = min - 1 ; i < array.length; i++) {
      if ( array[i] >= min && array[i] <= max  ) {
        result.push[array[i]]
      }
    }
    return result
  }
}


export { weekday, snippet, numProps, filterBetween }
