import React, { Component } from "react";
import { title } from "../../../../services/title";
class NFTBuyModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentDidMount() {

    }

    render() {
        return (
            <div className="modal fade" id="NFTBuyModal" role="dialog">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content p-4 mt-7">
                        <div className="d-flex justify-content-end pb-2  mb-2">
                            <button type="button" className="btn btn-mobile-default modal_button_primary float-right" data-toggle="modal" data-target="#NFTBuyConfirmModal">{title.Buy}</button>
                            <button type="button" className="btn btn-mobile-default modal_button_close float-right ml-2" data-dismiss="modal">{title.Close}</button>
                        </div>
                        <div className="d-flex justify-content-center">
                            <img src="image/image7.png" className="NFTupdateModalImg" alt=""/>
                        </div>
                        <div className="pt-4">
                            <div className="coloredTd" style={{borderTop : '1px solid lightgrey'}}>
                                <div className="col-md-3 text-center">{title.category}</div>
                                <div className="col-md-3 text-center">{title.NFTID}</div>
                                <div className="col-md-3 text-center">{title.NFTName}</div>
                                <div className="col-md-3 text-center">{title.MintTime}</div>
                            </div>
                            <div className="unColoredTd">
                                <div className="col-md-3 text-center">Image</div>
                                <div className="col-md-3 text-center">1167158</div>
                                <div className="col-md-3 text-center">bipawo</div>
                                <div className="col-md-3 text-center">2023.03.01. 12:00:00</div>
                            </div>
                            <div className="coloredTd">
                                <div className="col-md-9 text-center">{title.OwnerAddress}</div>
                                <div className="col-md-3 text-center">{title.SalePrice}</div>
                            </div>
                            <div className="unColoredTd">
                                <div className="col-md-9 text-center" style={{textDecoration : 'underline'}}>0X388C818CA889251b393131c08a736a292</div>
                                <div className="col-md-3 text-center">0.133579542</div>
                            </div>
                            <div className="coloredTd">
                                <div className="col-md-12 text-center">{title.Description}</div>
                            </div>
                            <div className="unColoredTd">
                                <div className="col-md-12 text-center">sample memo---- description</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default NFTBuyModal
