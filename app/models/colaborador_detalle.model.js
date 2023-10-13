module.exports = (sequelize, Sequelize) => {
    const Colaborador_Detalle = sequelize.define('colaborador_detalle', {
        id_colaborador_detalle: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_colaborador: {
            type: Sequelize.STRING,
            primaryKey: true,
            unique: true
        },
        direccion: {
            type: Sequelize.STRING
        },
        telefono: {
            type: Sequelize.STRING
        },
        correo: {
            type: Sequelize.STRING
        },
        fecha_nacimiento: {
            type: Sequelize.DATEONLY
        },
        cuenta_bancaria: {
            type: Sequelize.STRING
        },
        fecha_contratacion: {
            type: Sequelize.DATEONLY
        },
        status: {
            type: Sequelize.BOOLEAN,
            defaultValue: true
        }
    }, {
        tableName: 'colaborador_detalle'
    })

    return Colaborador_Detalle;
};