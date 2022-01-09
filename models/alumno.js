const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AlumnoSchema = new Schema({
  id: Number,
  nombre: String,
  apellido: String,
  email: String,
  clave: String,
  telefono: Number,
});

const Alumno = mongoose.model("Alumno", AlumnoSchema);
module.exports = Alumno;
