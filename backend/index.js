const app = require('./app.js');
const sequelize = require('./config/database.js');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

// Verificar conexión a la base de datos y luego iniciar el servidor
(async () => {
  try {
    // 1. Autenticar conexión
    await sequelize.authenticate();
    console.log("✅ Conexión a la base de datos establecida correctamente.");

    // 2. Sincronizar modelos (crea las tablas si no existen)
    await sequelize.sync({ force: false }); // force: true BORRA todo, ¡cuidado!
    console.log("✅ Modelos sincronizados con la base de datos.");

    // 3. Iniciar servidor
    app.listen(PORT, () => {
      console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("❌ Error durante la inicialización:", error);
    process.exit(1);
  }
})();