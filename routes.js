const express = require('express'), //using express for routing
    router = express.Router();

var userCtrl = require('./user-controller');
//itemCtrl = require('./item-controller'),
// userCtrl = require('./user-controller');

// router.get('/hello', itemCtrl.getWorld);
// router.get('/hello/:foo/bar', itemCtrl.getWorldParams);
// router.post('/hello', itemCtrl.postWorld);

router.post('/users', userCtrl.createUser);
router.get('/users', userCtrl.getUsers);
router.get('/users/:id', userCtrl.getUser); //get user by id
router.put('/users/:id', userCtrl.updateUser);//update
router.delete('/users/:id', userCtrl.deleteUser);//delete


module.exports.UPLOAD_PATH = 'uploads';

var multer = require('multer');
var upload = multer({ dest: module.exports.UPLOAD_PATH });
var imageCtrl = require('./image-controller');

router.post('/images', upload.single('image'), imageCtrl.uploadImage);
router.get('/images', imageCtrl.getImages);

router.get('/images/:id', imageCtrl.getImage);
// router.delete('/images/:id', imageCtrl.deleteImage);

module.exports = router;

//routing line 17 to 24 
//end point line 14 
//changed app to router below.
// router.get('/hello/:foo/:bar', (req, res) =>{ //to play around 'trick'
//    res.json({message: 'Hello BScBest!', data: [
//        req.params.foo,
//        req.params.bar
//    ]});
//    });
// //post requesting 
//    router.post('/hello', (req, res) => {
//        res.json({result: 'Post was sent', data: req.body});
//    });
// //"tricky" 
