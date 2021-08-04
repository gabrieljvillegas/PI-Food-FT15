const { Router } = require("express");

const router = Router();
const { v4: uuidv4 } = require("uuid");
const axios = require("axios");

router.get("/", (req, res) => {
  res.send("ruta de dieta");
});

module.exports = router;
