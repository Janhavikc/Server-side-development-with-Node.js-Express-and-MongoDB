const express = require('express');
const bodyParser = require('body-parser');

const leadersRouter = express.Router();

leadersRouter.use(bodyParser.json());

leadersRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send all the leaders to you!');
})
.post((req, res, next) => {
    res.end('Will add the leaders: ' + req.body.name + ' with details: ' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /leaders');
})
.delete((req, res, next) => {
    res.end('Deleting all leaders');
});

leadersRouter.route('/:leadersID')
.get((req,res,next) => {
    res.end('Will send details of the leaders: ' + req.params.leadersID +' to you!');
})
.post((req, res, next) => {
  res.statusCode = 403;
  res.end('POST operation not supported on /leaders/'+ req.params.leadersID);
})
.put((req, res, next) => {
  res.write('Updating the leaders: ' + req.params.leadersID + '\n');
  res.end('Will update the leaders: ' + req.body.name + 
        ' with details: ' + req.body.description);
})
.delete( (req, res, next) => {
    res.end('Deleting leaders: ' + req.params.leadersID);
});

module.exports = leadersRouter;