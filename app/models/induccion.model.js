module.exports = (sequelize, Sequelize) => {
    const Induccion = sequelize.define('induccion', {
        id_induccion: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        codigo_colaborador: {
            type: Sequelize.STRING
        },
        descripcion: {
            type: Sequelize.STRING
        },
        fecha_inicio: {
            type: Sequelize.DATEONLY
        },
        estado: {
            type: Sequelize.STRING,
            default: 'En curso'
        },
        status: {
            type: Sequelize.BOOLEAN,
            default: true
        }
    }, {
        tableName: 'inducciones'
    })

    return Induccion;
};