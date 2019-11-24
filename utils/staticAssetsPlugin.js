// 需求：把所有的引入中的静态资源 /static/ 变成 http://chengyuming.cn/imgs/
const fs = require('fs')
class StaticAssetsPlugin {
  constructor(options) {
    this.options = options
  }
  // 在插件中 new 的时候会自动执行 apply 方法，主入口方法
  apply(complier) {
    // 若是开发环境则不执行
    if (!this.options.isProduction) return
    // webpack 编译的生命周期 
    // console.log(complier.hooks)
    // 监听过程，拿到结果
    complier.hooks.done.tap('StaticAssetsPlugin', compontion => {
      // 得到当前目录 
      const context = complier.options.context
      console.log(context, '----------->> context')
      const path = context + '/love'
      // 打包之后的文件结果
      const assets = compontion.toJson().assets
      console.log(path, '----------->> path')
      assets.forEach(ast => {
        // 现在我们得到了所有的打包后的文件信息，我们把文件中遇到的那些资源给替换掉就可以了
        console.log(ast.name, '----------->> ast.name')
        fs.readFile(path + '/' + ast.name, (err, res) => {
          if (err) throw err
          let result = res.toString()
          result = result.replace(/([\.\./]+)\/static\//g, 'http://chengyuming.cn/imgs/')
          // console.log(result, '----------------------->>>>')
          fs.writeFileSync(path + '/' + ast.name, result)
        })
      })
    })
  }
}

module.exports = StaticAssetsPlugin