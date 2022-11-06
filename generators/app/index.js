"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Generator = require("yeoman-generator");
const chalk_1 = require("chalk");
const yosay = require("yosay");
module.exports = class extends Generator {
    answers;
    constructor(args, opts) {
        super(args, opts);
        this.argument("arg1", { type: String, required: false, default: 'arg1default', description: 'Argument 1' });
        this.argument("arg2", { type: String, required: false, default: 'arg2default', description: 'Argument 2' });
        this.argument("argRest", { type: Array, required: false, default: [], description: 'Rest arguments' });
        this.option("option11", { type: Boolean, default: false, description: 'Option 1', alias: 'o' });
        this.option("option2", { type: String, default: 'opt2default', description: 'Option 2', alias: 'p' });
    }
    async prompting() {
        this.log(yosay(`Welcome to  ${(0, chalk_1.green)('TS')} generator !`));
        const prompts = [
            {
                type: 'confirm',
                name: 'answer1',
                message: 'Would you like to enable this option?',
                default: true
            }
        ];
        this.answers = await this.prompt(prompts);
    }
    writing() {
        this.fs.delete('project');
        console.log('project deleted');
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
        console.log('Nothing to install for liquid generator');
    }
};
//# sourceMappingURL=index.js.map