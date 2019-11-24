
// const requireAllRoute = require.context('./src/views/', true, /\.js$/)
// // 让返回的这个函数执行，并传入相关的每一个文件的地址（由context.keys返回的）
// const requireAll = context => context.keys().map(context)
// // requireAll 执行完毕其实就得到了我们要的 modules 文件下的所有文件，但是我们是 default 里面的内容
// const routes = requireAll(requireAllRoute).map(route => route.default)
// console.log(...routes)
// require('./src/views/home')
require('./src/views/console')
