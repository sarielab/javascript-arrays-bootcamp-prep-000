var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']
var addElementToBeginningOfArray = (arr, el) => [el, ...arr]
var destructivelyAddElementToBeginningOfArray = (arr, el) => arr.unshift(el)
var addElementToEndOfArray = (arr, el) => [...arr, el]
var destructivelyAddElementToEndOfArray = (arr, el) => arr.push(el)
var accessElementInArray = (arr, el) => arr[el]
var destructivelyRemoveElementFromBeginningOfArray = (arr) => arr.shift()
var removeElementFromBeginningOfArray = (arr) => arr.slice(1)
var removeElementFromEndOfArray = (arr) => arr.slice(-1)
var destructivelyRemoveElementFromEndOfArray = (arr) => arr.pop()