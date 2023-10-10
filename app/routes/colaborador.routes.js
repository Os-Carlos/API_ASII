module.exports = app => {
    const colaboradores = require("../controllers/colaborador.controller");
    var router = require("express").Router();

    router.post("/", colaboradores.create);
    router.get("/", colaboradores.findAll);
    router.put("/:id", colaboradores.update);
    router.delete("/:id", colaboradores.delete);

    app.use("/colaboradores", router);
};