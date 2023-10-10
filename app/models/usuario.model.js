module.exports = (sequelize, Sequelize) => {
    const Usuario = sequelize.define('usuario', {
        id_usuario: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        codigo_colaborador: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        nombre_usuario: {
            type: Sequelize.STRING,
            unique: true
        },
        clave: {
            type: Sequelize.STRING,
            allowNull: false
        },
        tipo_usuario: {
            type: Sequelize.STRING
        },
        id_grupo_usuario: {
            type: Sequelize.INTEGER
        },
        status: {
            type: Sequelize.BOOLEAN,
            default: true
        }
    }, {
        tableName: 'usuarios'
    })

    return Usuario;
};