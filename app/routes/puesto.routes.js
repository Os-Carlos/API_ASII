module.exports = app => {
    const puestos = require("../controllers/puesto.controller");
    var router = require("express").Router();

    router.post("/", puestos.create);
    router.get("/", puestos.findAll);
    router.put("/:id", puestos.update);
    router.delete("/:id", puestos.delete);

    app.use("/puestos", router);
};