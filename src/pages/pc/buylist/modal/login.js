import React, { Component } from "react";
import { title } from "../../../../services/title";

class LoginConfirm extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentDidMount() {

    }

    render() {
        return (
            <div className="modal fade" id="LoginConfirm" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content p-5 mt-7 modal_backgroundColor">
                        <div className="d-flex justify-content-center">
                            <i className="fa fa-exclamation mainicon"></i>
                        </div>
                        <p className="text-white text-center mt-4" style={{fontSize : '18px'}}>{title.Loginisnecessary}</p>
                        <button className="btn buyButton mt-4">Login</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginConfirm
