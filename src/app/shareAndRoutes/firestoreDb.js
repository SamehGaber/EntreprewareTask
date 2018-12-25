const express =require('express');
const router =express.Router();

// connecting to Firestore Database 
const Firestore = require('@google-cloud/firestore');
const admin = require('firebase-admin');
const serviceAccount = require('./entrepreware-task-firebase-adminsdk-he544-4077870019.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

  const db = admin.firestore();
  db.settings({ timestampsInSnapshots: true });

  router.get('/',(req,res)=>{
    db.collection('Records').get()
    .then(snapshot=>{
         snapshot.forEach(doc =>{
          console.log(doc.id, '=>', doc.data());
         res.setHeader('Content-Type','application/json');
         res.statusCode=200;
         res.json(doc.data());

    });
 }) 
    .catch((err) => {
    console.log('Error getting documents', err);
  });

});

router.post('/',(req,res)=>{

    db.collection('Records').add(req.body)
    .then((update)=>{
      console.log('update is done');
      res.statusCode=200;
      res.setHeader('Content-Type','application/json');
      res.json(req.body);
      res.end();
  
  
    })
  
  .catch((err) => {
  console.log('Error getting documents', err);
  });
  });




module.exports =router;