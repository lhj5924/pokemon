import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { pokemonAPI } from "./services/pokemon";

export const store = configureStore({
    reducer: {
        [pokemonAPI.reducerPath]: pokemonAPI.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(pokemonAPI.middleware),
})

setupListeners(store.dispatch)