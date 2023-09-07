const express = require('express');
const app = express();
const UserSchema = require  ('./schema/schema')
const mongoose = require('mongoose');

// MongoDB connection URL
const url = 'mongodb://127.0.0.1:27017/mydb';

async function dbconnection (){
await   mongoose.connect('mongodb://127.0.0.1:27017/mydb')
  .then(() => console.log('Connected!'));

}
  
 dbconnection()

 app.get('/users', async (req,res)=>{
 const user = await UserSchema.find()
 res.send(user)
 })

 app.listen(3000, ()=>{

  console.log('server started on port 3000')
  } )
