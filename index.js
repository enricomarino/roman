var letters = {
  I:    1,
  V:    5,
  X:   10,
  L:   50,
  C:  100,
  D:  500,
  M: 1000
}

module.exports = function (string) { 
  return string.split('')
    .map(letter => (letters[letter]))
    .reduce((a, b) => (a > b ? a + b : b - a)) 
}
