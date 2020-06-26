const app = require("./app");
const config = require("./config");
const database = require("./database");

database()
    .then((info) => {
        console.log(`Connected to ${info.host}:${info.port}/${info.name}`);

        app.listen(config.PORT, () =>
            console.log(`Example app listining an port ${config.PORT}`)
        );
    })
    .catch((process) => {
        console.error("Cannot connect to db");
        process.exit(1);
    });
