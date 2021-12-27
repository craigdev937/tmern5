import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { PlayerAPI } from "./PlayerAPI";

export const RootReducer = configureStore({
    reducer: {
        [PlayerAPI.reducerPath]: PlayerAPI.reducer,
    },  // gDM = getDefaultMiddleware.
    middleware: (gDM) => gDM().concat(PlayerAPI.middleware),
});

setupListeners(RootReducer.dispatch);



