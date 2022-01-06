const Profesor = require("../models/profesor");
const express = require("express");
const router = express.Router();

router.post('/iniciaSesion', (req, res) => {
    let {
        email,
        clave
    } = req.body;
    email = email.toString().trim();
    clave = clave.toString().trim();
    if (email == "" || clave == "") {
        res.json({
            status: "FAILED",
            message: "Hay campos vacios",
        });
    } else {
        Profesor.find({"email": email})
            .then((result) => {
                if (result.length == 0) {
                    res.json({
                        status: "FAILED",
                        message: "correo no existe",
                    });
                } else {
                    const clavec = result[0].clave;

                    if (clavec == clave) {
                        res.json({
                            status: "SUCCESS",
                            message: "Inicio de sesión satisfactorio",
                        });
                    } else {
                        res.json({
                            status: "FAILED",
                            message: "Contraseña inválida!",
                        });
                    }
                }
            }).catch((err)=>{
                res.json({
                    status: "FAILED",
                    message: "error comparando email"
                });
            })
    }
});

router.post('/creaUsuario', (req, res) => {
    let { nombre, email, clave } = req.body
    nombre = nombre.toString().trim();
    if (nombre == "" || email == "" || clave == "") {
        res.json({
            status: "FAILED",
            message: "Campo Vacio",
        });
    }
    else {
        Profesor.find({ "email": email }).then((result) => {
            if (result.length != 0) {
                res.json({
                    status: "FAILED",
                    message: "email registrado"
                });
            } else {
                const profesor = new Profesor({
                    nombre: nombre,
                    email: email,
                    clave: clave,
                });
                profesor.save().then((result) => {
                    res.json({
                        status: "SUCCESS",
                        message: "Registro satisfactorio",
                        data: result,
                    });
                }).catch((err) => {
                    res.json({
                        status: "FAILED",
                        message: "Error al guardar."
                    });
                });
            }
        }
        ).catch((err) => {
            res.json({
                status: "FAILED",
                message: "error al buscar"
            });
        });
    }

});


router.post('/nombreId', (req, res) => {
    let { id } = req.body
    Profesor.find({
        "id": id
    }).then((result) => {
        if (result.length == 0) {
            res.json({
                status: "FAILED",
                message: "no existe",
            });
        } else {
            res.json({
                status: "SUCCESS",
                message: result[0].name,
                data: result[0].name,
            });
        }
    }).catch((err) => {
        console.log(err);
    })
})

module.exports = router;