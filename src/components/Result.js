import React, {Component} from 'react';
import {connect} from "react-redux"
import PropTypes from 'prop-types'
import  "../styles/result.css"

class ResultComponent extends Component {
    render() {
        return (
            <div className="result">
                <p>{this.props.calresult.result}</p>
            </div>
    )
    }
}

ResultComponent.propTypes = {
    calresult : PropTypes.object.isRequired
}

const mapStateToProps =(state)=>({
   calresult: state.calc
})

export default connect(mapStateToProps,{})(ResultComponent);