import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import artistsongsReducer from '../reducers/artistsongs';
import errorsReducer from '../reducers/errors';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    artists: artistsongsReducer,
    errors: errorsReducer,
    
  }),
  composeEnhancers(applyMiddleware(thunk))
);

console.log(store.getState());

export default store;