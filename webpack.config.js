module.exports = {
    "entry": "./app.es6",
    "devtool": "source-map",
    "output": {
        "path": __dirname + "/public/dist",
        "filename": "bundle.js"
    },
    "module": {
        "loaders": [
            {
                "test": /\.es6$/,
                "exclude": /node_modules/,
                "loader": "babel"
            }
        ]
    }
}
