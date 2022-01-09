const Sesiones = require("../models/sesiones");
const express = require("express");
const router = express.Router();

router.post('/comentar',(req,res)=>{
    let{id, comentario}=req.body;
    comentario = comentario.toString().trim();
    if (comentario == "" ) {
        res.json({
          status: "FAILED",
          message: "Comentario vacio",
        });
      }else{
          const sesion = new Sesiones({
              id:id,
              comentario:comentario
          });
          sesion.save().then((result) => {
            res.json({
              status: "SUCCESS",
              message: "Comentario gruardado",
            });
          }).catch((err) => {
            res.json({
              status: "FAILED",
              message: "Error al guardar.",
            });
          });
      }

})

router.post('/loadC',(req,res)=>{
    let{id}=req.body;
    if (id == "" ) {
        res.json({
          status: "FAILED",
          message: "vacio",
        });
      }else{
          Sesiones.find({"id":id}).then(
              (result)=> {
                if (result.length != 0) {
                    res.json({
                      status: "SUCCESS",
                      message: result[0].comentario,
                    });
                  } 
              }
          ).catch((err) => {
            res.json({
              status: "FAILED",
              message: "Error al buscar.",
            });
          });
      }

})

module.exports = router;
