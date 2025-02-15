const { runServer } = require('../config/server.config');

function main() {
    try {
        runServer();
    } catch (error) {
        console.error("Error to start api", error);
    }
}

main();