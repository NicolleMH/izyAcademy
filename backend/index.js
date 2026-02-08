const app = require('./app.js');
const sequelize = require('./config/database.js');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

// Verificar conexión a la base de datos y luego iniciar el servidor
(async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Conexión a la base de datos establecida correctamente.");

    app.listen(PORT, () => {
      console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("❌ No se pudo conectar a la base de datos:", error);
    process.exit(1);
  }
})();