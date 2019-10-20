module.exports = (arr) => {
  const res = []

  const getPermutations = (head = [], tail = []) => {
    if (tail.length === 0) {
      res.push(head)
    }
    
    tail.forEach((val, i) => {
      getPermutations([...head, val], [ ...tail.slice(0, i), ...tail.slice(i+1) ])
    })
  }

  getPermutations([], arr)
  return res
}