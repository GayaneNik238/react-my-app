import React, {Component} from "react";
import ReactDOM from "react-dom";
import Navigation from "./Navigation"
import "./header.css"
import "../button/button.css"
//import Header from "./header.css";

class Header extends Component {
    state = {
        bool: false
    }   

    changeState = () => {
        this.setState({bool: !this.state.bool});
    };

    render() {
        return(
        <div className="header-container">
            <button onClick={this.changeState}>Click Me</button>
            <Navigation bool={this.state.bool}/>
            {this.state.bool ? <p className="disP">I may appear and disappear</p> : null}
           {this.state.bool ? <h1 className="text">Text in h1</h1> : <h6 className="text">Text in h6</h6>}

        </div>
        );
    }
}

export default Header;