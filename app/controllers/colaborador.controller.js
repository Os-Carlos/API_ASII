const db = require("../models");
const Colaborador = db.colaboradores;
const Op = db.Sequelize.Op;

//post
exports.create = (req, res) => {
    const colaborador = {
        codigo_colaborador: req.body.codigo_colaborador,
        nombre_completo: req.body.nombre_completo,
        id_puesto: req.body.id_puesto,
        salario: req.body.salario,
        horario: req.body.horario
    }

    Colaborador.create(colaborador)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error al insertar colaborador"
            });
        });
};

//get all
exports.findAll = (req, res) => {
    Colaborador.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error al obtener colaboradores"
            });
        });
};

//put
exports.update = (req, res) => {
    const id = req.params.id;

    Colaborador.update(req.body, { where: { id_colaborador: id } })
        .then(num => {
            if (num == 1) {
                res.send({ message: "Se actualizó Colaborador correctamente" });
            } else {
                res.send({ message: `colaborador con id: ${id}, no pudo actualizarse` });
            };
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || `Error al actualizar colaborador con id: ${id}`
            });
        });
};

//delete
exports.delete = (req, res) => {
    const id = req.params.id;

    Colaborador.destroy({ where: { id_colaborador: id } })
        .then(num => {
            if (num == 1) {
                res.send({ message: "Colaborador se eliminó correctamente" });
            } else {
                res.send({ message: `colaborador con id: ${id}, no existe` });
            };
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || `Error al eliminar colaborador con id: ${id}`
            });
        });
};