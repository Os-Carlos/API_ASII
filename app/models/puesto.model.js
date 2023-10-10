module.exports = (sequelize, Sequelize) => {
    const Puesto = sequelize.define('puesto', {
        id_puesto: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        descripcion: {
            type: Sequelize.STRING
        },
        id_departamento: {
            type: Sequelize.INTEGER
        },
        status: {
            type: Sequelize.BOOLEAN,
            default: true
        }
    }, {
        tableName: 'puestos'
    })

    return Puesto;
};