import numIslands from './components/numberOfIslands';
test('Island test', () => {
  const arrTest =  [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
  ]
  expect(numIslands(arrTest)).toBe(1)
})
