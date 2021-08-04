const { Router } = require("express");
require("dotenv").config();
const router = Router();

const { v4: uuidv4 } = require("uuid");

const axios = require("axios");

const { FOOD_GET_NAME } = require("../utils/constants");
const { API_KEY } = process.env;

router.get("/", async (req, res, next) => {
  const { name } = req.query;
  console.log(`${FOOD_GET_NAME}${name}&apiKey=${API_KEY}`);

  if (name) {
    try {
      console.log("entre al if del try");
      const recipe = await axios.get(
        `${FOOD_GET_NAME}${name}&apiKey=${API_KEY}`
      );
      res.status(200).json(recipe.data);
      console.log(recipe.data);
    } catch (error) {
      console.log(error);
    }
  }
});

module.exports = router;
