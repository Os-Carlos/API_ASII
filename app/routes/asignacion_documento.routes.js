module.exports = app => {
    const asignacion_documentos = require("../controllers/asignacion_documento.controller");
    var router = require("express").Router();

    router.post("/", asignacion_documentos.create);
    router.get("/", asignacion_documentos.findAll);
    router.put("/:id", asignacion_documentos.update);
    router.delete("/:id", asignacion_documentos.delete);

    app.use("/asignacion_documentos", router);
};