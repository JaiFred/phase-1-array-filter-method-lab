// Code your solution here
let drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

// function findMatching(drivers, string){
//     let response = drivers.filter(element => element === string || element === string.toLowerCase)
//     return response
// }

// function fuzzyMatch(drivers, string){
//     let firstLetter = drivers.filter(driver => driver.slice(0, string.length) === string)
//     return firstLetter
// }

function findMatching(array, string) {
    return array.filter(function(el) {
        return el.toLowerCase().indexOf(string.toLowerCase())!== -1
    })
}

function fuzzyMatch(array, string){
    return array.filter(function(el) {
        return el.startsWith(string)
    })
}

function matchName(drivers, name){
    return drivers.filter(function(driver){
      return driver.name === name
    })
  }