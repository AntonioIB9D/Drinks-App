import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoria: [],
  bebidas: [],
  bebidaSeleccionada: [],
};

export const drinkSlice = createSlice({
  name: 'drinks',
  initialState,
  reducers: {
    consultCategory: (state, { payload }) => {
      state.categoria = payload.categorylist;
    },
    resultadoBebidas: (state, { payload }) => {
      state.bebidas = payload.drinklist;
    },
    bebidaSeleccionada: (state, { payload }) => {
      state.bebidaSeleccionada = payload.drinkselect;
    },
  },
});

// Action creators are generated for each case reducer function
export const { consultCategory, resultadoBebidas, bebidaSeleccionada } =
  drinkSlice.actions;

export default drinkSlice.reducer;
