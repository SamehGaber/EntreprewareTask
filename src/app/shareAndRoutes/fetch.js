const express =require('express');
const router =express.Router();
const axios =require('axios');


const API_Key="ccb9f2cb75dcde596ca5f2b1fca08593";
var phoneNumber="+201007596970";
const URL ="http://apilayer.net/api/validate?";

router.get('/',(req,res)=>{
    axios.get(`${URL}access_key=${API_Key}&number=${phoneNumber}`)
    .then(posts=>{
        console.log(posts.data);
        res.status(200).json(posts.data);
        
    })
    .catch(err=>{
        res.status(500).send(err);
    })
});














module.exports =router;