
// You should implement your task here.

module.exports = function towelSort (matrix) {
  return !matrix ? [] : matrix.map((v, i) => i%2==0 ? v : v.reverse()).flat();
}
