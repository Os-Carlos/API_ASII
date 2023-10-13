module.exports = app => {
    const usuarios = require("../controllers/usuario.controller");
    var router = require("express").Router();

    router.post("/", usuarios.create);
    router.get("/", usuarios.findAll);
    router.put("/:id", usuarios.update);
    router.delete("/:id", usuarios.delete);

    router.get("/login/:username/:password", usuarios.login);
    
    app.use("/usuarios", router);
};