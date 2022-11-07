import Generator = require('yeoman-generator')
import {green} from 'chalk';
import yosay = require('yosay')
import {load} from 'js-yaml';
import * as filesystem from 'fs';

interface Answers {
  answer1: string
}

interface Arguments {
  arg1: string
  arg2: string
  argRest: string[]
  option1: boolean
  option2: string
}

module.exports = class extends Generator<Arguments> {
  answers: Answers
  constructor(args, opts: Arguments) {
    super(args, opts)

    this.argument("arg1", { type: String, required: false, default: 'arg1default', description: 'Argument 1' })
    this.argument("arg2", { type: String, required: false, default: 'arg2default', description: 'Argument 2' })
    this.argument("argRest", { type: Array, required: false, default: [], description: 'Rest arguments' })

    this.option("config", { type: String, default: 'vars.yml', description: 'Configuration File', alias: 'o' })
    this.option("option2", { type: String, default: 'opt2default', description: 'Option 2', alias: 'p' })
  }

  async prompting() {
    this.log(yosay(`Welcome to  ${green('TS')} generator !`))

    const prompts: Generator.Question[] = [
      {
        type: 'confirm',
        name: 'answer1',
        message: 'Would you like to enable this option?',
        default: true
      }
    ]

    this.answers = await this.prompt<Answers>(prompts)
  }

  writing() {
    this.fs.delete('project');
    console.log('project deleted');
    console.log('answers :',this.answers);
    console.log('config :',this.options['config']);
    console.log('config exists :',filesystem.existsSync(this.options['config']))
    if(filesystem.existsSync(this.options['config'])){
      const cfdata = load(filesystem.readFileSync(this.options['config'], 'utf8'));
      console.log("cfdata :",cfdata);
    }
    // const templateData = {
    //   ...this.answers,
    //   ...this.options
    // }
    
    // this.fs.copyTpl(
    //   this.templatePath('dummyfile.txt'),
    //   this.destinationPath('project/dummyfile.txt'),
    //   templateData
    // )
  }

  install() {
    console.log('Nothing to install for liquid generator')
  }
}
