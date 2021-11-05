import { ThunkDispatch } from "redux-thunk";

export interface RecipeState {
    data: Recipe[];
    loading: boolean;
    error: string;
}

export interface Recipe {
    directionsUrl: string;
    totalTime: string;
    displayName: string;
    images: typeof Image[];
    name: string;
    keywords: string[];
    brand?: any;
    id: string;
    recipeId: string;
    numberOfServings: number;
    globalId: string;
    totalTimeInSeconds: number;
    rating: number;
}

 interface GET_RECIPES_START {
     type: "GET_RECIPES_START"
}
interface GET_RECIPES_SUCCES {
    type: "GET_RECIPES_SUCCES";
    payload: Recipe[]; 
}
interface GET_RECIPES_ERROR {
    type: "GET_RECIPES_ERROR";

}

export type RecipeAction = 
| GET_RECIPES_START
| GET_RECIPES_SUCCES
| GET_RECIPES_ERROR

export type RecipesDispatch = ThunkDispatch<RecipeState,void,RecipeAction>;