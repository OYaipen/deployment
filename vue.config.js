const path = require("path");

module.exports = {
    chainWebpack: config => {
        config
            .entry("main")
            .clear()
            .add("./src/main.js")
            .end();
        config.resolve.alias
            .set("~", path.join(__dirname, "./src"))
    }
};