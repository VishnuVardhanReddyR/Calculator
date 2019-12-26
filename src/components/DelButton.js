import React, { Component } from "react";
import './DelButton.css';
class DelButton extends Component {
    render() {
        return (
            <div className="del-btn"
            onClick={() => this.props.handleDel()}
            >
                {this.props.children}
            </div>
        );
    }
}

export default DelButton;