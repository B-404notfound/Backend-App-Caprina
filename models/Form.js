const mongoose = require ("mongoose");

const Schema = mongoose.Schema;

const FormSchema = new Schema({
    specie:{type:String},
    production:{type:String},
    affectedAnimals:{type:String},
    illness:{type:String},
    symptom:{type:String},
    painGrade:{type:String},
    painLevel:{type:String}
});

module.exports = Form = mongoose.model('Form',FormSchema);