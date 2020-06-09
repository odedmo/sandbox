import express from 'express'
import 'dotenv/config'
import path from 'path'
import webpack from 'webpack'

const port = process.env.PORT || 4001
const app = express()

const webpackConfig = require('./webpack.config')
const compiler = webpack(webpackConfig)

app.use(
    require('webpack-dev-middleware')(compiler, {
        noInfo: true,
        publicPath: webpackConfig.output.publicPath
    })
);

app.use(require('webpack-hot-middleware')(compiler));

app.use(express.static('dist'))

// app.get('/', (req, res) => {
//     res.send('');
// })

app.get('/', (req, res) =>
    res.sendFile(path.resolve(__dirname, './dist/index.html'))
);

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})