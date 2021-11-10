import { combineReducers } from "redux";
import { RecipeState } from "../types/recipes";
import recipesReducer from "./reducers/recipesReducer";

export interface AppState {
    recipes: RecipeState;
}
const rootReducer = combineReducers({
    recipes: recipesReducer,

});

export default rootReducer;

