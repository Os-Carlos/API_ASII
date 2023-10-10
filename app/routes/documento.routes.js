module.exports = app => {
    const documentos = require("../controllers/documento.controller");
    var router = require("express").Router();

    router.post("/", documentos.create);
    router.get("/", documentos.findAll);
    router.put("/:id", documentos.update);
    router.delete("/:id", documentos.delete);

    app.use("/documentos", router);
};