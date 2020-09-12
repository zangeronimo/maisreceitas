"use strict";

var _express = _interopRequireDefault(require("express"));

require("./controllers/UsersController");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
app.set('view engine', 'pug');
app.get('/', (request, response) => {
  response.render('index', {
    title: 'Hey',
    message: 'Hello there!'
  });
});
app.listen(4000);