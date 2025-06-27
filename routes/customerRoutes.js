// routes/customerRoutes.js
const express = require("express");
const router = express.Router();
const Customer = require("../models/customer");

// Ruta para obtener un cliente por id
router.get("/customer/:id", async (req, res) => {
  try {
    const customer = await Customer.findOne({ id: req.params.id });
    if (!customer) {
      return res.status(404).json({ message: "Cliente no encontrado" });
    }
    res.json(customer);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Ruta para actualizar un cliente
router.put("/customer/:id", async (req, res) => {
  try {
    const updatedCustomer = await Customer.findOneAndUpdate(
      { id: req.params.id },
      req.body,  // Datos que vienen en el cuerpo de la petición
      { new: true } // Devuelve el cliente actualizado
    );
    if (!updatedCustomer) {
      return res.status(404).json({ message: "Cliente no encontrado" });
    }
    res.json(updatedCustomer);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Ruta para eliminar un cliente
router.delete("/customer/:id", async (req, res) => {
  try {
    const deletedCustomer = await Customer.findOneAndDelete({ id: req.params.id });
    if (!deletedCustomer) {
      return res.status(404).json({ message: "Cliente no encontrado" });
    }
    res.json({ message: "Cliente eliminado con éxito" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
