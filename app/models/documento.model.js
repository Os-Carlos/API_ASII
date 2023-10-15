module.exports = (sequelize, Sequelize) => {
    const Documento = sequelize.define('documento', {
        id_documento: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre_documento: {
            type: Sequelize.STRING
        },
        version: {
            type: Sequelize.STRING
        },
        url: {
            type: Sequelize.STRING
        },
        status: {
            type: Sequelize.BOOLEAN,
            defaultValue: true
        }
    }, {
        tableName: 'documentos'
    })

    return Documento;
};