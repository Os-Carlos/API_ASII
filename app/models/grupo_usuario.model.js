module.exports = (sequelize, Sequelize) => {
    const Grupo_Usuario = sequelize.define('grupo_usuario', {
        id_grupo_usuario: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre_grupo: {
            type: Sequelize.STRING,
            unique: true
        },
        id_departamento: {
            type: Sequelize.INTEGER
        },
        status: {
            type: Sequelize.BOOLEAN,
            default: true
        }
    }, {
        tableName: 'grupo_usuario'
    })

    return Grupo_Usuario;
};