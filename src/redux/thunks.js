import axios from 'axios';
import {
  bebidaSeleccionada,
  consultCategory,
  resultadoBebidas,
} from './drinkSlice';

export const consultaCategoria = () => async (dispatch) => {
  try {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
    const { data } = await axios(url);
    dispatch(
      consultCategory({ categorylist: data.drinks })
    ); /*El valor que se manda aquí debe ser el mismo que recibe el reducer */
  } catch (error) {
    console.log(error);
  }
};

export const consultBebidas = (data) => async (dispatch) => {
  const { BebidaN, CategoriaB } = data;
  try {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${BebidaN}&c=${CategoriaB}`;
    const { data } = await axios(url);
    dispatch(resultadoBebidas({ drinklist: data.drinks }));
  } catch (error) {
    console.log(error);
  }
};

export const consultReceta = (idDrink) => async (dispatch) => {
  try {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`;
    const { data } = await axios(url);
    dispatch(bebidaSeleccionada({ drinkselect: data.drinks }));
  } catch (error) {
    console.log(error);
  }
};
