const solve = (books) => {
  const sortedBooks = books.sort()

  const days = sortedBooks.reduce((agr, curr) => {
    if (curr >= agr) {
      agr++
    }

    return agr
  }, 0)

  return days - 1
}

console.log(solve([1, 1, 1, 2, 2]))
console.log(solve([3, 1, 4, 1]))
console.log(solve([1, 4, 1, 3]))
