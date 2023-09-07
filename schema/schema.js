const mongoose =  require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  name: String, 
  age: Number,
  place: String,
  
});
module.exports = mongoose.model('user', userSchema);