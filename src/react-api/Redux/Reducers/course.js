
let initialState = {
    coures : []
};

const CourseReducer = (state = initialState,action) =>{
    switch (action.type){
        case "FETCH_COURSE":
            state.courses = action.payload;
            return{...state};
        default:
            return state;
    }
}

export default CourseReducer ;