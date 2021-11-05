import { combineReducers } from "redux";
import { RecipeState } from "../types/recipes";
import recipesReducer from "./reducers/recipesReducer";

interface AppState {
    recipes: RecipeState;
}
const rootReducer = combineReducers<AppState>({
    recipes:recipesReducer,

});

export default rootReducer;

