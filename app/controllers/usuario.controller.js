const db = require("../models");
const Usuario = db.usuarios;
const Op = db.Sequelize.Op;

//post
exports.create = (req, res) => {
    const usuario = {
        codigo_colaborador: req.body.codigo_colaborador,
        nombre_usuario: req.body.nombre_usuario,
        clave: req.body.clave,
        tipo_usuario: req.body.tipo_usuario,
        id_grupo_usuario: req.body.id_grupo_usuario
    }

    Usuario.create(usuario)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error al insertar usuario"
            });
        });
};

//get all
exports.findAll = (req, res) => {
    Usuario.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error al obtener usuarios"
            });
        });
};


//put
exports.update = (req, res) => {
    const id = req.params.id;

    Usuario.update(req.body, { where: { id_usuario: id } })
        .then(num => {
            if (num == 1) {
                res.send({ message: "Se actualizó Usuario correctamente" });
            } else {
                res.send({ message: `usuario con id: ${id}, no pudo actualizarse` });
            };
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || `Error al actualizar usuario con id: ${id}`
            });
        });
};

//delete
exports.delete = (req, res) => {
    const id = req.params.id;

    Usuario.destroy({ where: { id_usuario: id } })
        .then(num => {
            if (num == 1) {
                res.send({ message: "Usuario se eliminó correctamente" });
            } else {
                res.send({ message: `usuario con id: ${id}, no existe` });
            };
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || `Error al eliminar usuario con id: ${id}`
            });
        });
};

//login
exports.login = (req, res) => {
    const username = req.params.username;
    const password = req.params.password;

    Usuario.findOne({ where: { nombre_usuario: username, clave: password } })
        .then(data => {
            res.send(data.tipo_usuario);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error al verificar usuario"
            });
        });
};