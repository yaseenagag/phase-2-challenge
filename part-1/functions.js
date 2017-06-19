'use strict'

const weekday = (date) => {

  if (typeof date === 'object') {
    var dayName = date.toString().split(' ')[0]
    return dayName
  }
}


export default weekday
