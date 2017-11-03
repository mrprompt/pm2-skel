# PM2 Ecosystem Skel

Projects PM2 configurations.

## 1st read this:

```
http://pm2.keymetrics.io/docs/usage/application-declaration/
http://pm2.keymetrics.io/docs/usage/deployment/
```

## Configuring

To add a project for management, create a javascript file with extension 
-.config.js-  in apps/deployments directory. 

This files must be return an array/object of environments and configurations 
for applications.

Example:

```javascript
/* apps/sample.config.js */
module.exports = [
    {
      name: "sample-develop",
      script: "./index.js",
      cwd: "/var/www/sample/develop/current",
      out_file: "sample-output.log",
      error_file: "sample-error.log",
      combine_logs: false,
      env: {
        NODE_ENV: "develop"
      }
    }
]
```

```javascript
/* deployments/sample.config.js */
const hosts = require('../hosts/index');
const REPOSITORY = "git@github.com:foo/sample.git";

module.exports = {
    "sample-develop": {
        "user": "ubuntu",
        "host": hosts.develop,
        "ref": "origin/master",
        "repo": REPOSITORY,
        "path": "/home/ubuntu/sample/develop/",
        "ssh_options": "StrictHostKeyChecking=no",
        "post-deploy": "npm install --progress=false && pm2 startOrRestart ecosystem.config.js --only sample-develop"
    }
}
```

### Run

```
pm2 startOrRestart ecosystem.config.js --only <app-name>
```

### Deploy

First, create environment
```
pm2 deploy ecosystem.config.js <environment-name> setup
```

Now, you can deploy normally

```
pm2 deploy ecosystem.config.js <environment-name> [<tag-ref>]
```
