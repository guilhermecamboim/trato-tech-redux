import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./reducers/categorias";
import itensSlice from "./reducers/itens";

const store = configureStore({
  reducer: {
    categorias: categoriesSlice,
    itens: itensSlice,
  },
});

export default store;
