const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const customerRouter = require("./routes/customerRoutes");

dotenv.config(); // Cargar variables de entorno desde el archivo .env

const app = express();
app.use(express.json()); // Para poder leer los datos JSON de las peticiones

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Conectado a MongoDB Atlas"))
  .catch((err) => console.log("Error de conexión a MongoDB:", err));

// Usar las rutas del archivo customerRoutes.js
app.use("/computerstore", customerRouter);

// Iniciar el servidor
const port = process.env.PORT || 30016;
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
