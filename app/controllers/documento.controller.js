const db = require("../models");
const Documento = db.documentos;
const Op = db.Sequelize.Op;

//post
exports.create = (req, res) => {
    const documento = {
        nombre_documento: req.body.nombre_documento,
        version: req.body.version
    }

    Documento.create(documento)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error al insertar documento"
            });
        });
};

//get all
exports.findAll = (req, res) => {
    Documento.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error al obtener documentos"
            });
        });
};

//put
exports.update = (req, res) => {
    const id = req.params.id;

    Documento.update(req.body, { where: { id_documento: id } })
        .then(num => {
            if (num == 1) {
                res.send({ message: "Se actualizó Documento correctamente" });
            } else {
                res.send({ message: `documento con id: ${id}, no pudo actualizarse` });
            };
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || `Error al actualizar documento con id: ${id}`
            });
        });
};

//delete
exports.delete = (req, res) => {
    const id = req.params.id;

    Documento.destroy({ where: { id_documento: id } })
        .then(num => {
            if (num == 1) {
                res.send({ message: "Documento se eliminó correctamente" });
            } else {
                res.send({ message: `documento con id: ${id}, no existe` });
            };
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || `Error al eliminar documento con id: ${id}`
            });
        });
};