const multer = require('multer');

// Configura el almacenamiento de multer (en memoria en este ejemplo)
const storage = multer.memoryStorage();

// Crea la instancia de multer
const upload = multer({ storage: storage });

// Exporta el middleware de multer
module.exports = upload;
