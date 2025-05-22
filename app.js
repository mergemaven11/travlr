const express = require('express');
const path = require('path');
const hbs = require('express-handlebars');
const indexRouter = require('./app/routes/index');

const app = express();

app.engine(
  'hbs',
  hbs.engine({
    extname: 'hbs',
    defaultLayout: 'main',
    layoutsDir: 'app/views/layouts/',
  })
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'app/views'));

app.use(express.static(path.join(__dirname, 'static')));

app.use('/', indexRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
