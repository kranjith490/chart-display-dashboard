import { combineReducers } from "redux";

import { chartReducer } from "./Reducer/index";

const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  chartReducer: chartReducer,
});

export default rootReducer;
