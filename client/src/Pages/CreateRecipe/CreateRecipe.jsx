import { StyledDiv } from "./styled";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
const axios = require("axios");

// [ ] Un formulario controlado con los siguientes campos
// Nombre
// Resumen del plato
// Puntuación
// Nivel de "comida saludable"
// Paso a paso
// [ ] Posibilidad de seleccionar/agregar uno o más tipos de dietas
// [] Botón / Opción para crear una nueva receta

const CreateRecipe = () => {
  const types = useSelector((state) => state.types);
  const initialState = {
    name: "",
    summary: "",
    diets: [],
    errors: {},
    spoonacularScore: "",
    healthScore: "",
    steps: [],
  };
  const [recipe, setRecipe] = useState(initialState);
  const [step, setStep] = useState("");
  const [listStep, setListStep] = useState([]);

  function validate(values) {
    console.log(typeof values.score);
    console.log(values.score);
    let errors = {};
    if (!values.name) {
      errors.name = "Campo obligatorio";
    }
    if (!values.summary) {
      errors.summary = "Campo obligatorio";
    }
    if (0 > parseInt(values.score) || parseInt(values.score) > 100) {
      errors.score = "Numero entre 0 y 100";
    }
    if (0 > values.scoreHealth || values.scoreHealth > 100) {
      errors.scoreHealth = "Numero entre 0 y 100";
    }
    return errors;
  }
  const handleChange = (e) => {
    setRecipe((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  function addDiet(id) {
    setRecipe({
      ...recipe,
      diets: [...recipe.diets, id],
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(listStep);
    const { errors, ...sinErrors } = recipe;
    const result = validate(sinErrors);

    setRecipe((prevState) => {
      return {
        ...prevState,
        errors: result,
      };
    });

    if (!Object.keys(result).length) {
      console.log(recipe);
    }
    console.log("recipeeee:", recipe);
    await axios.post("http://localhost:3001/recipes", recipe);
    setRecipe(initialState);
    document.getElementById("formCreate").reset();
    alert("se agrego el personaje");
  };
  function handleChangeStep(e) {
    setStep(e.target.value);
  }

  function addStep(e) {
    e.preventDefault();
    setRecipe({
      ...recipe,
      steps: [...recipe.steps, step],
    });
  }

  return (
    <StyledDiv>
      <div className="form container">
        <form id="formCreate" onSubmit={(e) => handleSubmit(e)}>
          <div>
            <label>Name</label>
            <input
              name="name"
              className=""
              type="text"
              autoComplete="off"
              onChange={(e) => handleChange(e)}
            />
            {recipe.errors.name && <p>Campo obligatorio</p>}
          </div>
          <div>
            <label>Summary</label>
            <input
              name="summary"
              className=""
              type="text"
              autoComplete="off"
              onChange={(e) => handleChange(e)}
            />
            {recipe.errors.summary && <p>Campo obligatorio</p>}
          </div>
          <div>
            <label>Score</label>
            <input
              name="spoonacularScore"
              className=""
              type="number"
              autoComplete="off"
              onChange={(e) => handleChange(e)}
            />
            {recipe.errors.score && <p>Valor entre 0 o 100</p>}
          </div>
          <div>
            <label>Score Health</label>
            <input
              name="healthScore"
              className=""
              type="number"
              autoComplete="off"
              onChange={(e) => handleChange(e)}
            />
            {recipe.errors.scoreHealth && <p>Valor entre 0 o 100</p>}
          </div>
          <div>
            {types &&
              types.map((type) => {
                return (
                  <div>
                    <p>{type.name}</p>
                    <p onClick={() => addDiet(type.id)}>Add</p>
                  </div>
                );
              })}
          </div>
          <div>
            <label>Steps</label>
            <input
              onChange={(e) => handleChangeStep(e)}
              name="steps"
              type="text"
              autoComplete="off"
            />
            <button onClick={(e) => addStep(e)}>Add Step</button>
          </div>
          <button type="submit">Create</button>
        </form>
      </div>
    </StyledDiv>
  );
};

export default CreateRecipe;
