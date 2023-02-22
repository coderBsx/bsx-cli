const { promisify } = require('util')
const download = promisify(require('download-git-repo'))
const { React_REPO } = require('./repo-constants')

async function createReactAciton(project) {

  try {
    await download(React_REPO, project, { clone: true })

    // 提示信息
    console.log(`cd/  ${project}`)
    console.log('npm install')
    console.log('npm run start')
  } catch (error) {
    console.log(error)
    console.log('可恶 github 连接又失败啦')
  }





}

module.exports = {
  createReactAciton
}