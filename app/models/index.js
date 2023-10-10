const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");

//pool de conexion
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorAliases: false,
    //dialectOptions: {ssl:true},
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle,
    }
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

//importacion de modelos
db.asignacion_documentos = require("./asignacion_documento.model.js")(sequelize, Sequelize);
db.colaborador_detalles = require("./colaborador_detalle.model.js")(sequelize, Sequelize);
db.colaboradores = require("./colaborador.model.js")(sequelize, Sequelize);
db.departamentos = require("./departamento.model.js")(sequelize, Sequelize);
db.documentos = require("./documento.model.js")(sequelize, Sequelize);
db.grupo_usuarios = require("./grupo_usuario.model.js")(sequelize, Sequelize);
db.inducciones = require("./induccion.model.js")(sequelize, Sequelize);
db.puestos = require("./puesto.model.js")(sequelize, Sequelize);
db.usuarios = require("./usuario.model.js")(sequelize, Sequelize);

module.exports = db;