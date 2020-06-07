import express from 'express'
import 'dotenv/config'

const port = process.env.PORT || 4001
const app = express()

app.use(express.static('dist'))

// app.get('/', (req, res) => {
//     res.send('');
// })

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})