module.exports = (sequelize, Sequelize) => {
    const Colaborador = sequelize.define('colaborador', {
        id_colaborador: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        codigo_colaborador: {
            type: Sequelize.STRING,
            primaryKey: true,
            unique: true
        },
        nombre_completo: {
            type: Sequelize.STRING
        },
        id_puesto: {
            type: Sequelize.INTEGER
        },
        salario: {
            type: Sequelize.FLOAT
        },
        horario: {
            type: Sequelize.STRING
        },
        status: {
            type: Sequelize.BOOLEAN,
            defaultValue: true
        }
    }, {
        tableName: 'colaboradores'
    })

    return Colaborador;
};