import express from 'express'
import '@controllers/UsersController'

const app = express()

app.set('view engine', 'pug');
app.use(express.static('public'))

app.get('/', (request, response) => {
  const Xmas = new Date();
  response.render('index', {
    yearNow: Xmas.getFullYear(),
    message: 'Hello there!'
  });
})
app.listen(4000)