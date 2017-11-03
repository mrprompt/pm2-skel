/**
 * Application configuration section
 * http://pm2.keymetrics.io/docs/usage/application-declaration/
 */
const fs = require('fs');

let apps = [];
let deploy = {};

fs.readdirSync(`${__dirname}/apps`).forEach((file) => {
  let app = require(`${__dirname}/apps/${file}`);

  apps.push(...app);
});

fs.readdirSync(`${__dirname}/deployments`).forEach((file) => {
  let deployClass = require(`${__dirname}/deployments/${file}`);

  deploy = Object.assign(deploy, deployClass);
});

module.exports = { apps, deploy };