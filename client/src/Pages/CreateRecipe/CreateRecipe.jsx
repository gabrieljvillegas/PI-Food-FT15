import { StyledDiv } from "./styled";
import { useState } from "react";
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

  function validate(values) {
    console.log(values);
    let errors = {};
    if (!values.name) {
      errors.name = "Campo obligatorio";
    }
    if (!values.summary) {
      errors.summary = "Campo obligatorio";
    }
    if (
      0 > parseInt(values.spoonacularScore) ||
      parseInt(values.spoonacularScore) > 100
    ) {
      errors.spoonacularScore = "Numero entre 0 y 100";
    }
    if (
      0 > parseInt(values.healthScore) ||
      parseInt(values.healthScore) > 100
    ) {
      errors.healthScore = "Numero entre 0 y 100";
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
    const { errors, ...sinErrors } = recipe;
    console.log("sin errors:", sinErrors);
    const result = validate(sinErrors);

    setRecipe((prevState) => {
      return {
        ...prevState,
        errors: result,
      };
    });

    if (!Object.keys(result).length) {
      await axios.post("http://localhost:3001/recipes", recipe);
      setRecipe(initialState);
      document.getElementById("formCreate").reset();
      alert("se agrego el personaje");
    }
  };

  function handleChangeStep(e) {
    setStep(e.target.value);
  }

  function addStep(e) {
    e.preventDefault();
    console.log((document.getElementsByClassName("stepInput")[0].value = ""));
    setRecipe({
      ...recipe,
      steps: [...recipe.steps, step],
    });
  }

  return (
    <StyledDiv>
      <form
        className="form container"
        id="formCreate"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="form__name">
          <p>Name</p>
          <input
            name="name"
            className=""
            type="text"
            autoComplete="off"
            onChange={(e) => handleChange(e)}
          />
          {recipe.errors.name && <p>Campo obligatorio</p>}
        </div>
        <div className="form__summary">
          <p>Summary</p>
          <textarea
            name="summary"
            className=""
            type="text"
            autoComplete="off"
            onChange={(e) => handleChange(e)}
          />
          {recipe.errors.summary && <p>Campo obligatorio</p>}
        </div>
        <div className="form__score">
          <p>Score</p>
          <input
            name="spoonacularScore"
            className=""
            type="number"
            autoComplete="off"
            onChange={(e) => handleChange(e)}
          />
          {recipe.errors.spoonacularScore && <p>Valor entre 0 o 100</p>}
        </div>
        <div className="form__scoreHealth">
          <p>Score Health</p>
          <input
            name="healthScore"
            className=""
            type="number"
            autoComplete="off"
            onChange={(e) => handleChange(e)}
          />
          {recipe.errors.healthScore && <p>Valor entre 0 o 100</p>}
        </div>
        <div className="form__diet">
          <p>Diets</p>
          <div className="grid">
            {types &&
              types.map((type) => {
                return (
                  <div className="grid__el">
                    <p className="grid__el--name">{type.name}</p>
                    <p
                      className="grid__el--btn"
                      onClick={() => addDiet(type.id)}
                    >
                      Add
                    </p>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="form__steps">
          <p>Steps</p>
          <textarea
            className="stepInput"
            onChange={(e) => handleChangeStep(e)}
            name="steps"
            type="textarea"
            autoComplete="off"
          />
          <button onClick={(e) => addStep(e)}>Add Step</button>
        </div>
        <button type="submit">Create</button>
      </form>
    </StyledDiv>
  );
};

export default CreateRecipe;
