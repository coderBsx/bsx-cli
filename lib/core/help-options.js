const { program } = require('commander')
const version = require("../../package.json").version

function helpOptions() {
  // 查看版本信息
  program.version(version, "-v --version")

  // 对应命令
  program.option("-b --bsx", "a bsx cli program~")
  program.option("-d --dest <dest>", "a destination folder~,例如: -d src/components")

  //执行help的 补充信息
  program.on('--help', () => {
    console.log('')
    console.log('other:')
    console.log('  xxx')
    console.log('  yyy')
  })
}

module.exports ={
  helpOptions
}