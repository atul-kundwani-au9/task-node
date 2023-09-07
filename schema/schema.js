const mongoose =  require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    EmpID: Number,   
    EmpName:String,
    Gender:String,
    Salary: Number,
    City: String
    
  
});
module.exports = mongoose.model('user', userSchema);