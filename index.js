#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');
const commander = require('commander');
const exec = require('child_process').exec;


const run = function(cmd, cb) {
  var child = exec(cmd, function (error, stdout, stderr) {
    if (stderr !== null) {
      console.log('' + stderr);
    }
    if (stdout !== null) {
      console.log('' + stdout);
      cb()
    }
    if (error !== null) {
      console.log('' + error);
    }
  });
};

const projectName = process.argv.slice(2)[0];
const currentWorkingDirectory = process.cwd();
const appPath = path.join(currentWorkingDirectory, projectName)

const templatePath = path.join(currentWorkingDirectory, projectName, "node_modules", "re-templates", "template");

fs.ensureDirSync(appPath);
process.chdir(appPath);

run('npm install re-templates', () => 
  fs.copySync(templatePath, appPath)
)
