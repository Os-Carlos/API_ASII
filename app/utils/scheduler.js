const schedule = require('node-schedule');
const { Induccion, Usuario } = require('../models'); // Importa tus modelos

function programarTareas() {
    // Define una regla para que la función se ejecute diariamente a una hora específica (ajusta según tus necesidades)
    const rule = new schedule.RecurrenceRule();
    rule.hour = 12; // Hora (0-23)
    rule.minute = 30; // Minuto (0-59)

    // Programa la función para que se ejecute diariamente
    const job = schedule.scheduleJob(rule, async function () {
        try {
            // Obtén las inducciones que están "en proceso" y su fecha_fin ha pasado al día siguiente
            const today = new Date();
            today.setDate(today.getDate() + 1);

            const inducciones = await Induccion.findAll({
                where: {
                    estado: 'en proceso',
                    fecha_fin: { $lt: today }
                }
            });

            for (const induccion of inducciones) {
                // Actualiza el estado a 'finalizada'
                await induccion.update({ estado: 'finalizada' });

                // Obtén el usuario asociado a la inducción y actualiza el status a false
                const usuario = await Usuario.findByPk(induccion.codigo_colaborador);
                if (usuario) {
                    await usuario.update({ status: false });
                }
            }

            console.log('Actualizaciones completadas.');
        } catch (error) {
            console.error('Error al actualizar registros:', error);
        }
    });
}

module.exports = programarTareas;
