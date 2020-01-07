
import React from "react";

export default class ClickityClick extends React.Component{

    updateState = (state) => {
        this.setState({
            hasBeenClicked: state
        })
    }
    state = {
        hasBeenClicked: false
    }
    render(){
        

        return (
            <div>
                <p>I have {this.state.hasBeenClicked ? null : "not"} been Clicked!</p>
                <button onClick={() => this.updateState(true)}>Click me!</button>
            </div>
        )
    }
}