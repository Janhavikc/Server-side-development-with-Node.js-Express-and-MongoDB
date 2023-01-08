const express = require('express'),
     http = require('http');

const morgan = require('morgan');
const bodyParser = require('body-parser');

const hostname = 'localhost';
const port = 3000;

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

const dishRouter = require('./routes/dishRouter');
const promotionsRouter = require('./routes/promotions');
const leadersRouter = require('./routes/leadersRouter');

app.use('/dishes', dishRouter);
app.use('/promotions', promotionsRouter);
app.use('/leaders', leadersRouter);

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});