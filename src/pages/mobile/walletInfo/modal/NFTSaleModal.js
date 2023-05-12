import React, { Component } from "react";
import { title } from "../../../../services/title";
class NFTSaleModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            historyData : [
                { price : '0.123845658544 ETH', buyer : 'WWWWSWWDDWESFWWWWDAD', saler : 'WWWWSWWDDWESFWWWWDAD', completeTime : '2023.01.01. 12:23:14'},
                { price : '0.123845658544 ETH', buyer : 'WWWWSWWDDWESFWWWWDAD', saler : 'WWWWSWWDDWESFWWWWDAD', completeTime : '2023.01.01. 12:23:14'}
            ]
        }
    }
    componentDidMount() {

    }

    render() {
        return (
            <div className="modal fade" id="NFTSaleModal" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content p-4 mt-7">
                        <div className="d-flex justify-content-between pb-2  mb-2" style={{borderBottom : '1px solid lightgrey'}}>
                            <p className="font-weight-bold">
                                Sell NFT
                            </p>
                            <div>
                                <button type="button" className="btn btn-default modal_button modal_button_close float-right" data-dismiss="modal">{title.Close}</button>
                                <button type="button" className="btn btn-default modal_button modal_button_primary float-right">Edit</button>
                            </div>
                        </div>
                        <div className="NFTUpdateModalImageDiv pt-3 pb-3">
                            <div className="d-flex justify-content-center">
                                <img src="image/image7.png" className="NFTupdateModalImg" alt=""/>
                            </div>
                            <p className="text-center mb-1">Filename.png</p>
                        </div>
                        <div className="pt-4">
                            <p className="mb-2 font-weight-bold">salePrice</p>
                            <input type="text" className="form-control form-control-sm form-control-input mb-2"/>
                            <p className="mb-2 mt-3 font-weight-bold">{title.NFTDetailInfo}</p>
                            <div className="coloredTd" style={{borderTop : '1px solid lightgrey'}}>
                                <div className="col-md-3 text-center p-0">{title.category}</div>
                                <div className="col-md-3 text-center p-0">{title.NFTID}</div>
                                <div className="col-md-3 text-center p-0">{title.NFTName}</div>
                                <div className="col-md-3 text-center p-0">MintTime</div>
                            </div>
                            <div className="unColoredTd">
                                <div className="col-md-3 text-center p-0">Image</div>
                                <div className="col-md-3 text-center p-0">1167158</div>
                                <div className="col-md-3 text-center p-0">bipawo</div>
                                <div className="col-md-3 text-center p-0">2023.03.01. 12:00:00</div>
                            </div>
                            <div className="coloredTd">
                                <div className="col-md-9 text-center p-0">{title.OwnerAddress}</div>
                                <div className="col-md-3 text-center p-0">{title.Status}</div>
                            </div>
                            <div className="unColoredTd">
                                <div className="col-md-9 text-center p-0" style={{textDecoration : 'underline'}}>0X388C818CA889251b393131c08a736a292</div>
                                <div className="col-md-3 text-center p-0">create</div>
                            </div>
                            <div className="coloredTd">
                                <div className="col-md-12 text-center p-0">{title.Description}</div>
                            </div>
                            <div className="unColoredTd">
                                <div className="col-md-12 text-center p-0">sample memo---- description</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default NFTSaleModal
