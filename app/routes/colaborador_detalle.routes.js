module.exports = app => {
    const colaborador_detalles = require("../controllers/colaborador_detalle.controller");
    var router = require("express").Router();

    router.post("/", colaborador_detalles.create);
    router.get("/", colaborador_detalles.findAll);
    router.put("/:id", colaborador_detalles.update);
    router.delete("/:id", colaborador_detalles.delete);

    app.use("/colaborador_detalles", router);
};