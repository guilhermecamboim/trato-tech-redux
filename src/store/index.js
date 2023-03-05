import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./reducers/categorias";
import itensSlice from "./reducers/itens";
import carrinhoSlice from "./reducers/carrinho";

const store = configureStore({
  reducer: {
    categorias: categoriesSlice,
    itens: itensSlice,
    carrinho: carrinhoSlice,
  },
});

export default store;
