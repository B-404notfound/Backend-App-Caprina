const FormController = require('../controllers/forms');

const express = require('express');

const router = express.Router();

router.get("/all",FormController.findAllForms);

router.get('/:id',FormController.findById);

router.post("/add",FormController.addForm);




module.exports = router;