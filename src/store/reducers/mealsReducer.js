import { MEALS } from "../../utils/dummy-data";
import { APPLIED_FILTER, TOGGLE_FAVORITE } from "../actions/mealsAction";

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
           case APPLIED_FILTER:
               const filters= action.filters;
               let updatedMeals=state.meals.filter(meal=>{
                    if(filters.glutenFree && !meal.isGlutenFree)
                    {
                        return false;
                    }
                    if(filters.lactoseFree && !meal.isLactoseFree)
                    {
                        return false;
                    }
                    if(filters.vegan && !meal.isVegan)
                    {
                        return false;
                    }
                    if(filters.vegitarian && !meal.isVegetarian)
                    {
                        return false;
                    }

                    return true;
               });
               console.log(updatedMeals)


               return { ...state, filteredMeals : updatedMeals}

               default:
                   return state;
    }

};


export default mealsReducer;