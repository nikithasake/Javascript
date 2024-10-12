var values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// var result = values.fill("0")
// [
//     '0', '0', '0', '0',
//     '0', '0', '0', '0',
//     '0', '0'
//   ]
// var result = values.fill("nikki", 2)
// [
//     1,       2,
//     'nikki', 'nikki',
//     'nikki', 'nikki',
//     'nikki', 'nikki',
//     'nikki', 'nikki'
//   ]
var result = values.fill("nikki", 2, 5)
// [
//     1,       2,       'nikki',
//     'nikki', 'nikki', 6,
//     7,       8,       9,
//     10
//   ]
console.log(result)