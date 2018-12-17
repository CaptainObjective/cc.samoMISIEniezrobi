const express = require('express')
const router = express.Router();
const indexController = require ('../controllers/index');
const editController = require ('../controllers/edit');
router.get ('/', indexController.getIndex);

router.post ('/addme', indexController.postIndex);
router.delete ('/deleteme/:id', indexController.deleteIndex);
router.get ('/editme/:id', editController.getEdit);
router.put ('/editme/:id', editController.putEdit);
module.exports = router;