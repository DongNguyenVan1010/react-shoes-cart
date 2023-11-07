import { combineReducers } from "redux";
import { appReducer } from "../redux/app.reducer";

const rootReducer = combineReducers({
    app: appReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk));
