import {createStore} from 'redux';
import rootReducer from './reducers/rootReducer';
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react'; // Импортируйте функцию setupListeners
import { apiSlice } from './apiSlice';

export const store = configureStore({
  reducer: {
    // Добавляем редюсер RTK-Query
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware), // Добавляем middleware RTK-Query
});

// Добавляем обработчик событий RTK-Query
setupListeners(store.dispatch);

export default store;

/*const store=createStore(rootReducer);

export default store;
console.log(store.getState())*/