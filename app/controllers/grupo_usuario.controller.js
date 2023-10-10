const db = require("../models");
const Grupo_Usuario = db.grupo_usuarios;
const Op = db.Sequelize.Op;

//post
exports.create = (req, res) => {
    const grupo_usuario = {
        nombre_grupo: req.body.nombre_grupo,
        id_departamento: req.body.id_departamento
    }

    Grupo_Usuario.create(grupo_usuario)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error al insertar grupo_usuario"
            });
        });
};

//get all
exports.findAll = (req, res) => {
    Grupo_Usuario.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error al obtener grupo_usuarios"
            });
        });
};

//put
exports.update = (req, res) => {
    const id = req.params.id;

    Grupo_Usuario.update(req.body, { where: { id_grupo_usuario: id } })
        .then(num => {
            if (num == 1) {
                res.send({ message: "Se actualizó Grupo_Usuario correctamente" });
            } else {
                res.send({ message: `grupo_usuario con id: ${id}, no pudo actualizarse` });
            };
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || `Error al actualizar grupo_usuario con id: ${id}`
            });
        });
};

//delete
exports.delete = (req, res) => {
    const id = req.params.id;

    Grupo_Usuario.destroy({ where: { id_grupo_usuario: id } })
        .then(num => {
            if (num == 1) {
                res.send({ message: "Grupo_Usuario se eliminó correctamente" });
            } else {
                res.send({ message: `grupo_usuario con id: ${id}, no existe` });
            };
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || `Error al eliminar grupo_usuario con id: ${id}`
            });
        });
};