import React,{Component} from 'react'
import KeypadLayout from "./KeypadLayout"
import ResultComponent from "./Result"
import {connect} from "react-redux"
import {Reset} from "../actions/reset"
import {Display} from "../actions/display"
import {Calculate} from "../actions/calcuate"
import {Dualoperator} from "../actions/dualoperator"
import "../styles/main.css"
class Main extends Component{

    // //OnClick() function to be executed when user clicks a button
    onClick =(button)=>{

        if(button === "="){
            this.props.dispatch(Calculate())
        }

        else if(button === "AC"){
             this.props.dispatch(Reset())
        }
        else if(button === "+-"){
           this.props.dispatch(Dualoperator("+"))
        }

        else {
           this.props.dispatch(Display(button))
        }
    };
        render(){
         return (
            <div>
                <div className="calculator-body">
                    <h3>Simple Calculator</h3>
                    <ResultComponent />
                    <KeypadLayout onClick={this.onClick}/>
                </div>
            </div>
        );
}
}

export default connect()(Main)

