
import React from "react";

export default class ClickityClick extends React.Component{

    updateState = () => {
        this.setState(previousState=>{

            
            return {
                hasBeenClicked: !previousState.hasBeenClicked
            }
            
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