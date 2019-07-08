var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']
var addElementToBeginningOfArray = (arr, el) => [el, ...arr]
var destructivelyAddElementToBeginningOfArray = (arr, el) => arr.unshift(el)
var addElementToEndOfArray = (arr, el) => [...arr, el]
var destructivelyAddElementToEndOfArray = (arr, el) => arr.push(el)
var accessElementInArray = (arr, el) => arr[el]
var destructivelyRemoveElementFromBeginningOfArray = (arr, el) => arr.shift()
var des
/*
('arrays', () => {
  
  describe('removeElementFromBeginningOfArray(array)', () => {
    it('removes the first element from the array', () => {
      expect(removeElementFromBeginningOfArray([1, 2, 3])).to.eql([2, 3])
    })

    it('does not alter the original array', () => {
      const array = [1, 2, 3];

      removeElementFromBeginningOfArray(array);

      expect(array).to.eql([1, 2, 3]);
    })
  })

  describe('destructivelyRemoveElementFromEndOfArray(array)', () => {
    it('returns the array with the last element removed', () => {
      expect(destructivelyRemoveElementFromEndOfArray([1, 2, 3])).to.eql([1, 2])
    })
    
    it('alters the original array', ()=>{
      const array = [1, 2, 3];
      destructivelyRemoveElementFromEndOfArray(array);
      expect(array).to.eql([1, 2]);
    })
  })
  
  describe('removeElementFromEndOfArray(array)', () => {
    it('removes the last element from the array', () => {
      expect(removeElementFromEndOfArray([1, 2, 3])).to.eql([1, 2])
    })
    
    it('does not alter the original array', () => {
      const array = [1, 2, 3];
      removeElementFromEndOfArray(array);
      expect(array).to.eql([1, 2, 3]);
    })
  })
})
*/