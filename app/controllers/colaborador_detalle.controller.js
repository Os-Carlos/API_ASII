const db = require("../models");
const Colaborador_Detalle = db.colaborador_detalles;
const Op = db.Sequelize.Op;

//post
exports.create = (req, res) => {
    const colaborador_detalle = {
        id_colaborador: req.body.id_colaborador,
        direccion: req.body.direccion,
        telefono: req.body.telefono,
        correo: req.body.correo,
        fecha_nacimiento: req.body.fecha_nacimiento,
        cuenta_bancaria: req.body.cuenta_bancaria,
        fecha_contratacion: req.body.fecha_contratacion
    }

    Colaborador_Detalle.create(colaborador_detalle)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error al insertar colaborador_detalle"
            });
        });
};

//get all
exports.findAll = (req, res) => {
    Colaborador_Detalle.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error al obtener colaborador_detalles"
            });
        });
};

//put
exports.update = (req, res) => {
    const id = req.params.id;

    Colaborador_Detalle.update(req.body, { where: { id_colaborador_detalle: id } })
        .then(num => {
            if (num == 1) {
                res.send({ message: "Se actualizó Colaborador_Detalle correctamente" });
            } else {
                res.send({ message: `colaborador_detalle con id: ${id}, no pudo actualizarse` });
            };
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || `Error al actualizar colaborador_detalle con id: ${id}`
            });
        });
};

//delete
exports.delete = (req, res) => {
    const id = req.params.id;

    Colaborador_Detalle.destroy({ where: { id_colaborador_detalle: id } })
        .then(num => {
            if (num == 1) {
                res.send({ message: "Colaborador_Detalle se eliminó correctamente" });
            } else {
                res.send({ message: `colaborador_detalle con id: ${id}, no existe` });
            };
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || `Error al eliminar colaborador_detalle con id: ${id}`
            });
        });
};