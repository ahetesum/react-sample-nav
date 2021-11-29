import { MEALS } from "../../utils/dummy-data";
import { TOGGLE_FAVORITE } from "../actions/mealsAction";

const initialState={
    meals:MEALS,
    filteredMeals:MEALS,
    favoriteMeals:[]
};
const mealsReducer = (state = initialState,action)=>{

    switch(action.type)
    {
        case TOGGLE_FAVORITE:
            const existingIndex= state.favoriteMeals.findIndex(m=>m.id=== action.mealId);
            if(existingIndex >=0)
            {
                const updatedMeals= [...state.favoriteMeals];
                updatedMeals.splice(existingIndex,1);
                return { ...state, favoriteMeals : updatedMeals}
            } 
            else{
                const meal= state.meals.find(m=>m.id===action.mealId);
                return { ...state, favoriteMeals : state.favoriteMeals.concat(meal)}

            }
    }

    return state;
};


export default mealsReducer;