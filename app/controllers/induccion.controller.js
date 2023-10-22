const { where } = require("sequelize");
const db = require("../models");
const Induccion = db.inducciones;
const Op = db.Sequelize.Op;

//post
exports.create = (req, res) => {
    const induccion = {
        codigo_colaborador: req.body.codigo_colaborador,
        descripcion: req.body.descripcion,
        estado: req.body.estado,
        fecha_inicio: req.body.fecha_inicio
    }

    // Calcula la fecha_fin sumando 15 días a la fecha_inicio
    const fechaInicio = new Date(induccion.fecha_inicio);
    fechaInicio.setDate(fechaInicio.getDate() + 15);
    induccion.fecha_fin = fechaInicio;

    Induccion.create(induccion)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error al insertar induccion"
            });
        });
};

//get all
exports.findAll = (req, res) => {
    Induccion.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error al obtener inducciones"
            });
        });
};

//get all by user code
exports.findByCode = (req, res) => {
    const codigo = req.params.codigo;
    Induccion.findAll({ where: { codigo_colaborador: codigo } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error al obtener inducciones"
            });
        });
};

//put
exports.update = (req, res) => {
    const id = req.params.id;

    Induccion.update(req.body, { where: { id_induccion: id } })
        .then(num => {
            if (num == 1) {
                res.send({ message: "Se actualizó Induccion correctamente" });
            } else {
                res.send({ message: `induccion con id: ${id}, no pudo actualizarse` });
            };
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || `Error al actualizar induccion con id: ${id}`
            });
        });
};

//delete
exports.delete = (req, res) => {
    const id = req.params.id;

    Induccion.destroy({ where: { id_induccion: id } })
        .then(num => {
            if (num == 1) {
                res.send({ message: "Induccion se eliminó correctamente" });
            } else {
                res.send({ message: `induccion con id: ${id}, no existe` });
            };
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || `Error al eliminar induccion con id: ${id}`
            });
        });
};