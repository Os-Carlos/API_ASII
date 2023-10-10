const db = require("../models");
const Puesto = db.puestos;
const Op = db.Sequelize.Op;

//post
exports.create = (req, res) => {
    const puesto = {
        descripcion: req.body.descripcion,
        id_departamento: req.body.id_departamento
    }

    Puesto.create(puesto)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error al insertar puesto"
            });
        });
};

//get all
exports.findAll = (req, res) => {
    Puesto.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error al obtener puestos"
            });
        });
};

//put
exports.update = (req, res) => {
    const id = req.params.id;

    Puesto.update(req.body, { where: { id_puesto: id } })
        .then(num => {
            if (num == 1) {
                res.send({ message: "Se actualizó Puesto correctamente" });
            } else {
                res.send({ message: `puesto con id: ${id}, no pudo actualizarse` });
            };
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || `Error al actualizar puesto con id: ${id}`
            });
        });
};

//delete
exports.delete = (req, res) => {
    const id = req.params.id;

    Puesto.destroy({ where: { id_puesto: id } })
        .then(num => {
            if (num == 1) {
                res.send({ message: "Puesto se eliminó correctamente" });
            } else {
                res.send({ message: `puesto con id: ${id}, no existe` });
            };
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || `Error al eliminar puesto con id: ${id}`
            });
        });
};