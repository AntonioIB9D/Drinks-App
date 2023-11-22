import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
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
      state.isLoading = false;
      state.bebidas = payload.drinklist;
    },
    bebidaSeleccionada: (state, { payload }) => {
      state.isLoading = false;
      state.bebidaSeleccionada = payload.drinkselect;
    },
    startLoading: (state) => {
      state.isLoading = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  consultCategory,
  resultadoBebidas,
  bebidaSeleccionada,
  startLoading,
} = drinkSlice.actions;

export default drinkSlice.reducer;
