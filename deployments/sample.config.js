/**
 * Deploy configuration section
 * http://pm2.keymetrics.io/docs/usage/deployment/
 */
const hosts = require('../hosts/index');
const REPOSITORY = "git@github.com:mrprompt/pm2-skel.git";

module.exports = {
    "sample-production": {
        "user": hosts.production.user,
        "key": hosts.production.key,
        "host": hosts.production.hosts,
        "ref": "origin/master",
        "repo": REPOSITORY,
        "path": "/home/ubuntu/sample-app/",
        "ssh_options": "StrictHostKeyChecking=no",
        "post-deploy": "npm install --progress=false --production && pm2 startOrRestart ~/pm2-skel/ecosystem.config.js --only sample-production"
    },
    "sample-develop": {
        "user": hosts.develop.user,
        "key": hosts.develop.key,
        "host": hosts.develop.hosts,
        "ref": "origin/develop",
        "repo": REPOSITORY,
        "path": "/home/ubuntu/sample-app/",
        "ssh_options": "StrictHostKeyChecking=no",
        "post-deploy": "npm install --progress=false && pm2 startOrRestart ~/pm2-skel/ecosystem.config.js --only sample-develop"
    },
}