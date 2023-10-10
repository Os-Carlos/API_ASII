const db = require("../models");
const Departamento = db.departamentos;
const Op = db.Sequelize.Op;

//post
exports.create = (req, res) => {
    const departamento = {
        descripcion: req.body.descripcion
    }

    Departamento.create(departamento)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error al insertar departamento"
            });
        });
};

//get all
exports.findAll = (req, res) => {
    Departamento.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error al obtener departamentos"
            });
        });
};

//put
exports.update = (req, res) => {
    const id = req.params.id;

    Departamento.update(req.body, { where: { id_departamento: id } })
        .then(num => {
            if (num == 1) {
                res.send({ message: "Se actualizó Departamento correctamente" });
            } else {
                res.send({ message: `departamento con id: ${id}, no pudo actualizarse` });
            };
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || `Error al actualizar departamento con id: ${id}`
            });
        });
};

//delete
exports.delete = (req, res) => {
    const id = req.params.id;

    Departamento.destroy({ where: { id_departamento: id } })
        .then(num => {
            if (num == 1) {
                res.send({ message: "Departamento se eliminó correctamente" });
            } else {
                res.send({ message: `departamento con id: ${id}, no existe` });
            };
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || `Error al eliminar departamento con id: ${id}`
            });
        });
};