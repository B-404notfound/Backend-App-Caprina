const mongoose = require("mongoose");

const Form = require ('../models/Form');

const findAllForms = (req,res)=>{
    Form.find((err,forms)=>{
        err && res.status(500).send(err.message);

        res.status(200).json(forms);
    })
}

const findById = (req,res)=>{
   Form.findById(req.params.id,(err,form)=>{
     err && res.status(500).send(err.message);

     res.status(200).json(form);
   })
}

const addForm = (req,res)=>{
    let form = new Form({
        specie:req.body.specie,
        production:req.body.production,
        affectedAnimals:req.body.affectedAnimals,
        illness:req.body.illness,
        symptom:req.body.symptom,
        painGrade:req.body.painGrade,
        painLevel:req.body.painLevel
    });

    form.save((err,frm)=>{
        err && res.status(500).send(err.message);

        res.status(200).json(frm);
    });
};



module.exports = {findAllForms,findById,addForm};