import React, { Component } from "react";
class NFTBuyUpdateSale extends Component {
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
            <div className="modal fade" id="NFTBuyUpdateSale" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content p-4 mt-7">
                        <div className="d-flex justify-content-between pb-2  mb-2" style={{borderBottom : '1px solid lightgrey'}}>
                            <p className="font-weight-bold modal-header-text">
                                Sell NFT
                            </p>
                            <div>
                                <button type="button" className="btn btn-default modal_button modal_button_close float-right" data-dismiss="modal">{title.Close}</button>
                                <button type="button" className="btn btn-default modal_button modal_button_primary float-right">sale</button>
                            </div>
                        </div>
                        <div className="NFTUpdateModalImageDiv pt-3 pb-3">
                            <div className="d-flex justify-content-center">
                                <img src="image/image7.png" className="NFTupdateModalImg" alt=""/>
                            </div>
                            <p className="text-center font-weight-bold mb-1 mt-1">Filename.png</p>
                        </div>
                        <div className="pt-4">
                            <p className="mb-2 mt-3 font-weight-bold">salePrice</p>
                            <input placeholder="Input price to sell" className="form-control form-control-sm form-control-input" />
                            <p className="mb-2 mt-3 font-weight-bold">{title.NFTDetailInfo}</p>
                            <div className="col-md-12">
                                <div className="row pt-1 pb-1 modal_info_header">
                                    <div className="col-md-3 text-center">{title.category}</div>
                                    <div className="col-md-3 text-center">{title.NFTID}</div>
                                    <div className="col-md-3 text-center">{title.NFTName}</div>
                                    <div className="col-md-3 text-center">{title.CreationDate}</div>
                                </div>
                                <div className="row modal_info_body">
                                    <div className="col-md-3 text-center pt-3 pb-3 modal_info_body_border_right">Image</div>
                                    <div className="col-md-3 text-center pt-3 pb-3 modal_info_body_border_right">12445634</div>
                                    <div className="col-md-3 text-center pt-3 pb-3 modal_info_body_border_right">Rest</div>
                                    <div className="col-md-3 text-center pt-3 pb-3">2023.01.01</div>
                                </div>
                                <div className="row modal_info_body modad_info_color_f5f8ff">
                                    <div className="col-md-6 pt-1 pb-1 text-center">{title.OwnerAddress}</div>
                                    <div className="col-md-6 pt-1 pb-1 text-center">{title.Status}</div>
                                </div>
                                <div className="row modal_info_body">
                                    <div className="col-md-6 pt-3 pb-3 text-center modal_info_body_border_right text_underLine">WWWWSWWDDWESFWWWWDAD</div>
                                    <div className="col-md-6 pt-3 pb-3 text-center" style={{color :"darkred"}}>buy</div>
                                </div>
                                <div className="row modal_info_body modad_info_color_f5f8ff">
                                    <div className="pt-1 pb-1 text-center col-md-12">{title.Description}</div>
                                </div>
                                <div className="row modal_info_body">
                                    <div className="pt-2 pb-2 text-left col-md-12">sample memo---- description</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default NFTBuyUpdateSale
