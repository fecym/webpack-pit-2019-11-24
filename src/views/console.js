console.log('你好哦')
const a = 1
const b = 2

const obj = { a, b }

console.log(obj)
const requireAllImg = require.context('../../static/', false, /\.(jpg|png)$/)
// console.log(requireAllImg.keys())
const path = require('path')
let str = ''
requireAllImg.keys().forEach(item => {
  str += `
    <img src="../../static/${item}">
  `
})
document.getElementById('root').innerHTML = str
