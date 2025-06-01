const express = require('express');
const path = require('path');
const hbs = require('express-handlebars');
const indexRouter = require('./app_server/routes/index');

const app = express();

app.engine(
  'hbs',
  hbs.engine({
    extname: 'hbs',
    defaultLayout: 'main',
    layoutsDir: 'app_server/views/layouts/',
    partialsDir: path.join(__dirname, 'app_server/views/partials')

  })
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'app_server/views'));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
