const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SesionesSchema = new Schema({
  id: Number,
  fecha: Date,
  tutor: String,
  asistencia: Boolean,
  valoracion: [],
  comentario: String,
});

const Sesiones = mongoose.model("Sesiones", SesionesSchema);
module.exports = Sesiones;
