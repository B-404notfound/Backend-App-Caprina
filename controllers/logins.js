const mongoose = require ('mongoose');

const Login = require('../models/Login');

const findAllLogins = (req,res)=>{
    Login.find((err,logins)=>{
        err && res.status(500).send(err.message);

        res.status(200).json(logins);
    })
}

const findById = (req,res)=>{
   Login.findById(req.params.id,(err,login)=>{
        err && res.status(500).send(err.message);

        res.status(200).json(login);
   })
}

const addLogin =(req,res)=>{
    let login = new Login ({
        email:req.body.email,
        password:req.body.password
    });

    login.save((err,lgn)=>{
        err && res.status(500).send(err.message);

        res.status(200).json(lgn);
    });
};

module.exports = {findAllLogins,findById,addLogin};