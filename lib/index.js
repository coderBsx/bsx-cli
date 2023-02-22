#!/usr/bin/env node

//导入program库
const { program } = require("commander")
const { helpOptions } = require("./core/help-options")
const { createVueAction } = require("./core/createVueAction")
const { createReactAciton } = require("./core/createReactAction")
const inquirer = require('inquirer')

console.log('bsxcli 启动啦')

helpOptions()



var questions = [
  {
    type: 'input',
    name: 'name',
    message: "please select Vue or React : "
  }
]
var p_name = [
  {
    type: 'input',
    name: 'name',
    message: "Project Name : "
  }
]

program.command('create').description('a create Project cli').action(function () {
  inquirer.prompt(questions).then(answers => {
    console.log(`${answers['name']}`)
    const n = 'Vue' || 'vue'
    if (`${answers['name']}` == n) {
      inquirer.prompt(p_name).then(answers => {
        createVueAction(`${answers['name']}`)
      })
    }
    else {
      inquirer.prompt(p_name).then(answers => {
        createReactAciton(`${answers['name']}`)
      })
    }
  })
})

// program
//   .command("create <project> [...others]")
//   .description('a web project')
//   .action(createAciton)




program.parse(program.argv)

// console.log(program.opts().dest)

