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
            defaultValue: 'En curso'
        },
        status: {
            type: Sequelize.BOOLEAN,
            defaultValue: true
        }
    }, {
        tableName: 'inducciones'
    })

    return Induccion;
};