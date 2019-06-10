import React,{Component} from 'react'
import KeypadLayout from "./KeypadLayout"
import ResultComponent from "./Result"
import {connect} from "react-redux"
import {Reset} from "../actions/reset"
import {Backspace} from "../actions/backspace"
import {Display} from "../actions/display"
import {Calculate} from "../actions/calcuate"

class Main extends Component{

    // Calculate Function to generate calculations
    // const calculate =() =>{
    //     try {
    //         // this.setState({
    //         //     // eslint-disable-next-line
    //         //     result: (eval(this.state.result) || "" ) + ""
    //         // })
    //     } catch (e) {
    //         // this.setState({
    //         //     result: "error"
    //         // })

    //     }
    // };

    // //OnClick() function to be executed when user clicks a button
    onClick =(button)=>{

        if(button === "="){
            this.props.dispatch(Calculate())
        }

        else if(button === "AC"){
             this.props.dispatch(Reset())
        }
        else if(button === "CE"){
            this.props.dispatch(Backspace())
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

