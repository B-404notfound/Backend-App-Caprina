const express = require("express");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const Users = require('./api/users');
const Forms = require ('./api/forms');
const Logins = require('./api/logins');

const app = express();

app.use(bodyparser.urlencoded({extended:false}));

app.use(bodyparser.json());

app.use("/api/users",Users);

app.use("/api/forms",Forms);

app.use('/api/logins',Logins);


mongoose.connect(
    "mongodb://localhost/usuarios",
      {useNewUrlParser:true},
      (err,res)=>{
        err && console.log("Error conectando a la base de datos")
        app.listen(4000,()=>{
            console.log("Servidor corriendo en http://localhost:4000 ");
        })
      }
)

