var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController')
const postController = require('../controllers/postController')

/* GET home page. */
router.post('/', userController.getUserData);

router.post('/createPost', postController.createPost);

router.post('/getPost', postController.getPost);

module.exports = router;
