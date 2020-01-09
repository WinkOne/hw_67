const initialState = {
    number: "",
    backgroundColor: false
};
const password = "7091";

const reducer = (state = initialState, action) => {
    if (action.type === "INC"){
        if (state.number.length < 4){
            return {
                ...state,
                number: state.number + action.numb
            }
        }
    }

    if (action.type === "INC_DEL"){
        return {
            ...state,
            number: state.number.substring(0, state.number.length - 1),
            backgroundColor: false,
        }
    }
    if (action.type === "INC_OK"){
        if (password === state.number){
            return {
                ...state,
                backgroundColor: true,
            };
        }
    }

    return state;
};

export default reducer;