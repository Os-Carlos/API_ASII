module.exports = (sequelize, Sequelize) => {
    const Asignacion_Documento = sequelize.define('asignacion_documento', {
        id_asignacion_documento: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_grupo_usuario: {
            type: Sequelize.INTEGER
        },
        id_documento: {
            type: Sequelize.INTEGER
        },
        status: {
            type: Sequelize.BOOLEAN,
            defaultValue: true
        }
    }, {
        tableName: 'asignacion_documento'
    })

    return Asignacion_Documento;
};