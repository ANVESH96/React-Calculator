import {DUAL_OPERATOR} from "./types"

//Dual operator action to display dual operator
export function Dualoperator(value){
    return{
        type: DUAL_OPERATOR,
        value
    }
}