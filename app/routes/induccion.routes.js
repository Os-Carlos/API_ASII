module.exports = app => {
    const inducciones = require("../controllers/induccion.controller");
    var router = require("express").Router();

    router.post("/", inducciones.create);
    router.get("/", inducciones.findAll);
    router.get("/:codigo", inducciones.findByCode);
    router.put("/:id", inducciones.update);
    router.delete("/:id", inducciones.delete);

    app.use("/inducciones", router);
};