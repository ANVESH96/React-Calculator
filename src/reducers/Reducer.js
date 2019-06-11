import evalfunction from "../utils/evalfunction"
const initialState={
    result:"",
    dualoperator:null
}

const calculatorReducer =(state=initialState,action)=>{
switch(action.type){
    case "CALCULATE":
    console.log(state.result)
    return {
        ...state,
        result: evalfunction(state.result),
        dualoperator:null
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
    else if(state.dualoperator === 1){
        return{
            ...state,
            result:(state.result).slice(0,-1)+"-",
            dualoperator:0
        }
    }
    else{
        return{
            ...state,
            result:(state.result).slice(0,-1)+action.value,
            dualoperator:1
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