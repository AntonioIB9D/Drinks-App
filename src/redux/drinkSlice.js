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
    consultCategory: (state, action) => {
      state.categoria = action.payload.categorylist;
    },
    resultadoBebidas: (state, action) => {
      state.bebidas = action.payload.drinklist;
    },
    bebidaSeleccionada: (state, action) => {
      state.bebidaSeleccionada = action.payload.drinkselect;
    },
  },
});

// Action creators are generated for each case reducer function
export const { consultCategory, resultadoBebidas, bebidaSeleccionada } =
  drinkSlice.actions;

export default drinkSlice.reducer;
