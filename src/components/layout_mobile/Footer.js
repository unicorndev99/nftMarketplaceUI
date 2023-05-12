import React, { Component } from "react";

class Mobile_Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage : 'Login',
            update : 1,
            isMobile : false,
        }
    }
    componentDidMount() {

    }
    onShowModal() {
        this.setState({update : this.state.update + 1});
    }

    goto(params) {
        this.setState({currentPage : params});
    }

    render() {
        return (
            <div>Mobile.....Header</div>
        );
    }
}

export default Mobile_Footer
