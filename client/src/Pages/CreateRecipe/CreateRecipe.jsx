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
  };
  const [recipe, setRecipe] = useState(initialState);

  function validate(values) {
    let errors = {};
    if (!values.name) {
      errors.name = "Campo obligatorio";
    }
    if (!values.summary) {
      errors.summary = "Campo obligatorio";
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
    const result = validate(sinErrors);

    setRecipe((prevState) => {
      return {
        ...prevState,
        errors: result,
      };
    });

    if (!Object.keys(result).length) {
      alert("formulario valido");
    }
    // await axios.post("http://localhost:3001/api/characters/", recipe);
    // setRecipe(initialState);
    // document.getElementById("formCreate").reset();
    // alert("se agrego el personaje");
  };

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
            {types &&
              types.map((type) => {
                return (
                  <div>
                    <p>{type.name}</p>
                    <buttton onClick={() => addDiet(type.id)}>Add</buttton>
                  </div>
                );
              })}
          </div>
          <button type="submit">Create</button>
        </form>
      </div>
    </StyledDiv>
  );
};

export default CreateRecipe;
