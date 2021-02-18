function myIterator (array) {
  let length = 0
  return {
    next: function() {
      return length < array.length ? 
      {
        value: array[length++],
        done: true
      } 
      : 
      {
        value: undefined,
        done: false
      }
    }
  }
}