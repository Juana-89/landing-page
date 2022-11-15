//subir imagen
import file from 'express-fileupload'
import express from 'express'
import routes from './routes/index.routes.js'
import images from './routes/images.routes.js'
import './database.js'

const app = express()

app.set('port', process.env.PORT || 4000);

app.use(file({
    tempFile: '/temp'
}))
//app.get('/', (req, res) => res.send('Hello, daddy, hello, mom Im your ch-ch-ch-cherry bomb'))
app.use(routes)
app.use(images)
app.listen(app.get('port'))
console.log('server on port', app.get('port'))