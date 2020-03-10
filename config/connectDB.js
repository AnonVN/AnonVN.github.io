const mongoose = require('mongoose');
const Schema = mongoose.Schema
mongoose.connect('mongodb://localhost/todo',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
// mongoose.connection.once("open",function(){

// })

const AddSchema =new Schema({
    username:String,
    phonenumber:String,
  email:String,
  password:String
}, {
 
  // 3
  timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  }
});
const AddModel = mongoose.model('Add', AddSchema )
module.exports = AddModel;