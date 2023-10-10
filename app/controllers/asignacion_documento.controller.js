const db = require("../models");
const Asignacion_Documento = db.asignacion_documentos;
const Op = db.Sequelize.Op;

//post
exports.create = (req, res) => {
    const asignacion_documento = {
        id_grupo_usuario: req.body.id_grupo_usuario,
        id_documento: req.body.id_documento
    }

    Asignacion_Documento.create(asignacion_documento)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error al insertar asignacion_documento"
            });
        });
};

//get all
exports.findAll = (req, res) => {
    Asignacion_Documento.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error al obtener asignacion_documentos"
            });
        });
};

//put
exports.update = (req, res) => {
    const id = req.params.id;

    Asignacion_Documento.update(req.body, { where: { id_asignacion_documento: id } })
        .then(num => {
            if (num == 1) {
                res.send({ message: "Se actualizó Asignacion_Documento correctamente" });
            } else {
                res.send({ message: `asignacion_documento con id: ${id}, no pudo actualizarse` });
            };
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || `Error al actualizar asignacion_documento con id: ${id}`
            });
        });
};

//delete
exports.delete = (req, res) => {
    const id = req.params.id;

    Asignacion_Documento.destroy({ where: { id_asignacion_documento: id } })
        .then(num => {
            if (num == 1) {
                res.send({ message: "Asignacion_Documento se eliminó correctamente" });
            } else {
                res.send({ message: `asignacion_documento con id: ${id}, no existe` });
            };
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || `Error al eliminar asignacion_documento con id: ${id}`
            });
        });
};