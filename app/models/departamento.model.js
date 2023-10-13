module.exports = (sequelize, Sequelize) => {
    const Departamento = sequelize.define('departamento', {
        id_departamento: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        descripcion: {
            type: Sequelize.STRING
        },
        status: {
            type: Sequelize.BOOLEAN,
            defaultValue: true
        }
    }, {
        tableName: 'departamentos'
    })

    return Departamento;
};