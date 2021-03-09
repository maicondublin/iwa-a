const express = require('express'), //using express for routing
router = express.Router();

//routing line 17 to 24 
//end point line 14 
//changed app to router below.
router.get('/hello/:foo/:bar', (req, res) =>{ //to play around 'trick'
   res.json({message: 'Hello BScBest!', data: [
       req.params.foo,
       req.params.bar
   ]});
   });
//post requesting 
   router.post('/hello', (req, res) => {
       res.json({result: 'Post was sent', data: req.body});
   });
//"tricky" 
module.exports = router;