// store.jsx
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import * as thunk from 'redux-thunk'; // Named import should work

const store = configureStore({
  reducer: rootReducer,
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
