import React, { Component } from "react";
class QRModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentDidMount() {

    }

    render() {
        return (
            <div className="modal fade" id="QRModal" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content p-4 mt-7">
                        <p className="text-center mb-2 font-weight-bold" style={{fontSize : '18px'}}>Login</p>
                        <div className="pl-5 mb-2">
                            <p className="text-left">1. Run NFT App</p>
                            <p className="text-left">2. Scan qr code to login</p>
                        </div>
                        <div className="d-flex justify-content-center">
                            <img src="./image/pages/login/QR.png" alt="" className="w-50"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default QRModal
