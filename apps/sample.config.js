/**
 * Application configuration section
 * http://pm2.keymetrics.io/docs/usage/application-declaration/
 */
module.exports = [
    {
      name: "sample-production",
      script: "./src/index.js",
      cwd: "/home/ubuntu/sample-app/current",
      out_file: "sample-app-output.log",
      error_file: "sample-app-error.log",
      combine_logs: true,
      env: {
        NODE_ENV: "production"
      }
    },
    {
      name: "sample-develop",
      script: "./src/index.js",
      cwd: "/home/ubuntu/sample-app/current",
      out_file: "sample-app-output.log",
      error_file: "sample-app-error.log",
      combine_logs: true,
      env: {
        NODE_ENV: "development"
      }
    }
];