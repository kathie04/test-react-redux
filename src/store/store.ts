import {applyMiddleware, compose, createStore} from "redux";
import rootReducer from "./reducers/rootReducer";
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./middleWare/saga";

const saga = createSagaMiddleware();
const devTools = process.env.NODE_ENV === 'development' ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : null


let store = createStore(
    rootReducer,
    compose(
        applyMiddleware(
            saga
            // devTools
        )
    )
)

saga.run(rootSaga)

export default store