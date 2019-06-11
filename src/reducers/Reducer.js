import evalfunction from "../utils/evalfunction"
const initialState={
    result:"",
    dualoperator:null
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
        result:"",
        dualoperator:null
    }
    case "DUAL_OPERATOR":
    if(state.dualoperator === null){
            return {
                ...state,
                result: state.result+action.value,
                dualoperator:1
            }   
    }
    else{
        return{
            ...state,
            result:(state.result).slice(0,-1)+"-",
            dualoperator:null
        }
    }
    case "DISPLAY":
    return{
        ...state,
        result: state.result+action.button,
        dualoperator:null
    }
    default:{
        return state
    }
}
}
export default calculatorReducer