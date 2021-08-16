import { StyledDiv } from "./styled";
import { useState } from "react";
import { useSelector } from "react-redux";
import { dishTypes } from "../../utils/dishTypes";
import { imagesRecipes } from "../../utils/imagesRecipe";
import Checkbox from "../../components/Checkbox/Checkbox";
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
    dishTypes: [],
    errors: {},
    image: "",
    spoonacularScore: "",
    healthScore: "",
    steps: [],
  };
  const [recipe, setRecipe] = useState(initialState);
  const [step, setStep] = useState("");

  function validate(values) {
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
  function handleImage(e) {
    setRecipe({ ...recipe, image: e.target.value });
  }

  function addDiet(id) {
    if (recipe.diets.includes(id)) {
      const newFilter = recipe.diets.filter((type) => type !== id);
      setRecipe({
        ...recipe,
        diets: newFilter,
      });
    } else {
      setRecipe({
        ...recipe,
        diets: [...recipe.diets, id],
      });
    }
  }
  function addDishType(dish) {
    if (recipe.dishTypes.includes(dish)) {
      const newFilter = recipe.dishTypes.filter((e) => e !== dish);
      setRecipe({
        ...recipe,
        dishTypes: newFilter,
      });
    } else {
      setRecipe({
        ...recipe,
        dishTypes: [...recipe.dishTypes, dish],
      });
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { errors, ...sinErrors } = recipe;
    const result = validate(sinErrors);
    setRecipe((prevState) => {
      return {
        ...prevState,
        errors: result,
      };
    });

    if (!Object.keys(result).length) {
      try {
        await axios.post("http://localhost:3001/recipes", recipe);
      } catch (error) {
        console.log(error);
      }
      setRecipe(initialState);
      document.getElementById("formCreate").reset();
      alert("Se agrego la receta");
    } else {
      alert("Se encontraron errores");
    }
  };

  function handleChangeStep(e) {
    setStep(e.target.value);
  }

  function addStep(e) {
    e.preventDefault();
    document.getElementsByClassName("stepInput")[0].value = "";
    setRecipe({
      ...recipe,
      steps: [...recipe.steps, step],
    });
  }

  return (
    <StyledDiv>
      <div className="titlePage">
        <h4>Create your recipe</h4>
      </div>
      <form
        className="form container"
        id="formCreate"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="left">
          <div className="form__name">
            <p>Name</p>
            <input
              name="name"
              className=""
              type="text"
              autoComplete="off"
              onChange={(e) => handleChange(e)}
            />

            <div className="error">
              {recipe.errors.name && <p>Campo obligatorio</p>}
            </div>
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

            <div className="error">
              {recipe.errors.summary && <p>Campo obligatorio</p>}
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
            <div>
              <button onClick={(e) => addStep(e)}>Add Step</button>
            </div>
          </div>
          <div className="form__image">
            <p>Image</p>
            <input
              name="image"
              placeholder="url..."
              type="text"
              autoComplete="off"
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
        <div className="right">
          <div className="form__score">
            <p>Score</p>
            <input
              name="spoonacularScore"
              className=""
              type="number"
              autoComplete="off"
              onChange={(e) => handleChange(e)}
            />
            <div className="error">
              {recipe.errors.spoonacularScore && <p>Valor entre 0 y 100</p>}
            </div>
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
            <div className="error">
              {recipe.errors.healthScore && <p>Valor entre 0 y 100</p>}
            </div>
          </div>
          <div className="flexcheckboxs">
            <div className="form__diet">
              <p>Diets</p>
              <div className="grid">
                {types &&
                  types.map((type, idx) => {
                    return (
                      <div className="grid__el">
                        <Checkbox
                          key={idx}
                          className="grid__el--check"
                          label={type.name}
                          onChange={() => addDiet(type.id)}
                        />
                      </div>
                    );
                  })}
              </div>
            </div>
            <div className="form__dishType">
              <p>Dish type</p>
              <div className="grid">
                {dishTypes &&
                  dishTypes.map((dish, idx) => {
                    return (
                      <div className="grid__el">
                        <Checkbox
                          key={idx}
                          className="grid__el--check"
                          label={dish}
                          onChange={() => addDishType(dish)}
                        />
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
        <button className="btn-create" type="submit">
          Create
        </button>
      </form>
    </StyledDiv>
  );
};

export default CreateRecipe;
