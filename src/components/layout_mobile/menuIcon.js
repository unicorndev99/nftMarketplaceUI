import React, { Component } from "react";

class MenuIcon extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="cursor-pointer">
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>
        );
    }
}

export default MenuIcon
