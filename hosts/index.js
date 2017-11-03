// Hosts lists
module.exports = {
    develop: {
        hosts: ["192.168.1.100"],
        user: 'ubuntu',
        key: '~/.ssh/id_rsa'
    },
    production: {
        hosts: ["192.168.2.100"],
        user: 'ubuntu',
        key: '~/.ssh/id_rsa'
    },
};
