export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";
export const APPLIED_FILTER = "APPLIED_FILTER";


export const toogleFavorite=(id)=>{
    return {type:TOGGLE_FAVORITE,mealId:id};
};


export const appliedFilter=(appliedFilters)=>{
    return {type:APPLIED_FILTER,filters:appliedFilters};
};