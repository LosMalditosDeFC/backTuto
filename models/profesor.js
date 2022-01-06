const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfesorSchema = new Schema({
id:Number,
nombre:String,
email:String,
clave: String,
});

const Profesor = mongoose.model('Profesor',ProfesorSchema);
module.exports=Profesor;