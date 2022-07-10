const LoginController = require ('../controllers/logins');

const express = require ('express');

const router = express.Router();

router.get("/all",LoginController.findAllLogins);

router.get('/:id',LoginController.findById);

router.post('/add',LoginController.addLogin);

module.exports = router;