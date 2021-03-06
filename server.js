require('typescript-require')({
    nodeLib: false,
    targetES5: true,
    exitOnError: true,
    emitOnError: true
});
const dummy =require('./src/app/search/search.component');


const express = require('express');
const path = require('path');
bodyParser = require('body-parser')
const app = express();


// getting our  routes
const fetch = require('./src/app/shareAndRoutes/fetch');
const checkDb = require('./src/app/shareAndRoutes/firestoreDb');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'/dist/Entrepreware')));

app.use('/fetch',fetch);
app.use('/check',checkDb);
//catching requests and return to the index in distribution file
app.get('*',(req,res)=>{
   res.sendFile(__dirname + '/dist/Entrepreware/index.html');
   //res.sendFile(path.join(__dirname,'dist/first-project/index.html'));
  // res.sendFile('index.html',{ root:__dirname+'/dist/first-project' })

  });


const port = process.env.port || 4500;
app.listen(port,(req,res)=>{
    console.log(` Server is Running on port ${port}`); 
    console.log(__dirname);
    
});