/* eslint no-eval: 0 */ 
//The above line disables the eval function
function evaluate(str){
    try{
        return eval(str)
    }
    catch(err){
        return "Invalid Expression"
    }
    
}

export default evaluate