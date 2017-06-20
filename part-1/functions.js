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




export { weekday, snippet }
