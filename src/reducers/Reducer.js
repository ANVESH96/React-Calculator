import evalfunction from "../utils/evalfunction"
const initialState={
    result:""
}

const calculatorReducer =(state=initialState,action)=>{
switch(action.type){
    case "CALCULATE":
    return {
        ...state,
        result: evalfunction(state.result)
    }
    case "RESET":
    return{
        ...state,
        result:""
    }
    case "BACKSPACE":
    return{
        ...state,
        result: state.result.slice(0, -1)
    }
    case "DISPLAY":
    return{
        ...state,
        result: state.result+action.button
    }
    default:{
        return state
    }
}
}
export default calculatorReducer