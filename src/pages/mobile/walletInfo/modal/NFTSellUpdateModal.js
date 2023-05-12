import React, { Component } from "react";
import { title } from "../../../../services/title";
class NFTSellUpdateModal extends Component {
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
            <div className="modal fade" id="NFTSellUpdateModal" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content p-4 mt-7">
                        <div className="d-flex justify-content-between pb-2  mb-2" style={{borderBottom : '1px solid lightgrey'}}>
                            <p className="font-weight-bold">
                                Edit NFt sale
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
                                <div className="col-md-3 text-center ">{title.category}</div>
                                <div className="col-md-3 text-center ">{title.NFTID}</div>
                                <div className="col-md-3 text-center ">{title.NFTName}</div>
                                <div className="col-md-3 text-center ">MintTime</div>
                            </div>
                            <div className="unColoredTd">
                                <div className="col-md-3 text-center ">Image</div>
                                <div className="col-md-3 text-center ">1167158</div>
                                <div className="col-md-3 text-center ">bipawo</div>
                                <div className="col-md-3 text-center ">2023.03.01. 12:00:00</div>
                            </div>
                            <div className="coloredTd">
                                <div className="col-md-9 text-center ">{title.OwnerAddress}</div>
                                <div className="col-md-3 text-center ">sale price</div>
                            </div>
                            <div className="unColoredTd">
                                <div className="col-md-9 text-center " style={{textDecoration : 'underline'}}>0X388C818CA889251b393131c08a736a292</div>
                                <div className="col-md-3 text-center ">0.12335488989</div>
                            </div>
                            <div className="coloredTd">
                                <div className="col-md-12 text-center ">{title.Description}</div>
                            </div>
                            <div className="unColoredTd">
                                <div className="col-md-12 text-center ">sample memo---- description</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default NFTSellUpdateModal
