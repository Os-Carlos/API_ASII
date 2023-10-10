module.exports = app => {
    const grupo_usuarios = require("../controllers/grupo_usuario.controller");
    var router = require("express").Router();

    router.post("/", grupo_usuarios.create);
    router.get("/", grupo_usuarios.findAll);
    router.put("/:id", grupo_usuarios.update);
    router.delete("/:id", grupo_usuarios.delete);

    app.use("/grupo_usuarios", router);
};