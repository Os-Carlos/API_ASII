const db = require("../models");
const Documento = db.documentos;
const supabase = require("../config/supabase.config");
const multer = require('multer');

//post
exports.create = async (req, res) => {

    //carga de archivo en supabase
    const fileData = req.file.buffer;
    const fileName = req.file.originalname;
    const fileUrl = 'https://zgcgkizkfhatmwkijhpw.supabase.co/storage/v1/object/public/docs_empresa/' + fileName;

    supabase.storage.from('docs_empresa').upload(fileName, fileData, { contentType: 'application/pdf' })
        .then(({ data, error }) => {
            if (error) {
                return res.status(500).json({ error: 'Error al subir el archivo a Supabase' });
            }

            //registro de documento 
            const documento = {
                nombre_documento: req.body.nombre_documento,
                version: req.body.version,
                url: fileUrl
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
        })
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

//get actives only
exports.findActives = (req, res) => {
    Documento.findAll({ where: { status: true } })
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