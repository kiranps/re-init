#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');



const projectName = process.argv.slice(2)[0];
const currentWorkingDirectory = process.cwd();

const appPath = path.join(currentWorkingDirectory, projectName)
const templatePath = path.join(__dirname, "template");

//console.log(projectName);
//console.log(currentWorkingDirectory);
console.log(templatePath);
console.log(appPath);

fs.copySync(templatePath, appPath);
//
