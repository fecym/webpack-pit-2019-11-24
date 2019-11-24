// module.exports = function(ctx) {
//   const reg = /console\.log\(.+?\)/g
//   const result = ctx.replace(reg, '')
//   console.log(result)
//   return result
// }

module.exports = function(ctx) {
  const callback = this.async()
  const reg = /console\.log\(.+?\)/g
  const result = ctx.replace(reg, '')
  // console.log(this)
  callback(null, result)
}