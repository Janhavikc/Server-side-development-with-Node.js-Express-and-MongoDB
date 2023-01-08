const express = require('express');
const bodyParser = require('body-parser');

const promotionsRouter = express.Router();

promotionsRouter.use(bodyParser.json());

promotionsRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send all the promotions to you!');
})
.post((req, res, next) => {
    res.end('Will add the promotions: ' + req.body.name + ' with details: ' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /promotions');
})
.delete((req, res, next) => {
    res.end('Deleting all promotions');
});

promotionsRouter.route('/:promotionID')
.get((req,res,next) => {
    res.end('Will send details of the promotion: ' + req.params.promotionID +' to you!');
})
.post((req, res, next) => {
  res.statusCode = 403;
  res.end('POST operation not supported on /promotion/'+ req.params.promotionID);
})
.put((req, res, next) => {
  res.write('Updating the promotion: ' + req.params.promotionID + '\n');
  res.end('Will update the promotion: ' + req.body.name + 
        ' with details: ' + req.body.description);
})
.delete( (req, res, next) => {
    res.end('Deleting promotion: ' + req.params.promotionID);
});

module.exports = promotionsRouter;