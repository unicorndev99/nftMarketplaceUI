import React, { Component } from "react";
import NFTSaleBuyModal from "./NFTSaleBuyModal";
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
                <div className="modal-dialog modal-lg">
                    <div className="modal-content p-4 mt-7">
                        <div>
                            <button type="button" className="btn btn-default modal_button modal_button_close float-right" data-dismiss="modal">{title.Close}</button>
                            <button type="button" className="btn btn-default modal_button modal_button_primary float-right" data-toggle="modal" data-target="#NFTSaleBuyModal">{title.Buy}</button>
                        </div>
                        <div className="d-flex pt-3 mb-5">
                            <div className="col-md-3 img-pane">
                                <img src="image/image7.png" className="updateModalImg" alt=""/>
                            </div>
                            <div className="col-md-9">
                                <div className="d-flex pt-1 pb-1 modal_info_header">
                                    <div className="col-md-3 text-center font-weight-bold">{title.category}</div>
                                    <div className="col-md-3 text-center font-weight-bold">{title.NFTID}</div>
                                    <div className="col-md-3 text-center font-weight-bold">{title.NFTName}</div>
                                    <div className="col-md-3 text-center font-weight-bold">{title.RegisterSalesTime}</div>
                                </div>
                                <div className="d-flex modal_info_body">
                                    <div className="col-md-3 text-center pt-3 pb-3 font-weight-bold modal_info_body_border_right">Image</div>
                                    <div className="col-md-3 text-center pt-3 pb-3 font-weight-bold modal_info_body_border_right">12445634</div>
                                    <div className="col-md-3 text-center pt-3 pb-3 font-weight-bold modal_info_body_border_right">Rest</div>
                                    <div className="col-md-3 text-center pt-3 pb-3 font-weight-bold">2023.01.01</div>
                                </div>
                                <div className="d-flex modal_info_body modad_info_color_f5f8ff">
                                    <div className="col-md-6 pt-1 pb-1 text-center font-weight-bold">{title.OwnerAddress}</div>
                                    <div className="col-md-6 pt-1 pb-1 text-center font-weight-bold">{title.SalePrice}</div>
                                </div>
                                <div className="d-flex modal_info_body">
                                    <div className="col-md-6 pt-3 pb-3 text-center font-weight-bold modal_info_body_border_right text_underLine">WWWWSWWDDWESFWWWWDAD</div>
                                    <div className="col-md-6 pt-3 pb-3 text-center font-weight-bold" style={{color : '#083f92'}}>0.24557198 ETH</div>
                                </div>
                                <div className="d-flex modal_info_body modad_info_color_f5f8ff">
                                    <div className="pt-1 pb-1 text-center col-md-12 font-weight-bold">{title.Description}</div>
                                </div>
                                <div className="d-flex modal_info_body">
                                    <div className="pt-2 pb-2 text-left col-md-12 font-weight-bold">sample memo---- description</div>
                                </div>
                            </div>
                        </div>
                        <div className="w-100">
                            <p className="d-flex font-weight-bold history_text">{title.History}</p>
                            <div className="d-flex pt-1 pb-1 modal_info_header">
                                <div className="col-md-2 pl-0 pr-0 pt-1 pb-1 text-center font-weight-bold">{title.SalePrice}</div>
                                <div className="col-md-4 pl-0 pr-0 pt-1 pb-1 text-center font-weight-bold">{title.Buyer}</div>
                                <div className="col-md-4 pl-0 pr-0 pt-1 pb-1 text-center font-weight-bold">{title.Seller}</div>
                                <div className="col-md-2 pl-0 pr-0 pt-1 pb-1 text-center font-weight-bold">{title.SaleCompleteTime}</div>
                            </div>
                            {
                                this.state.historyData.map((item,index) => {
                                    return(
                                        <div className="d-flex modal_info_body" key={index}>
                                            <div className="col-md-2 pl-0 pr-0 pt-4 pb-4 text-center font-weight-bold" style={{color : '#064092'}}>{item.price}</div>
                                            <div className="col-md-4 pl-0 pr-0 pt-4 pb-4 text-center font-weight-bold text_underLine">{item.buyer}</div>
                                            <div className="col-md-4 pl-0 pr-0 pt-4 pb-4 text-center font-weight-bold text_underLine">{item.saler}</div>
                                            <div className="col-md-2 pl-0 pr-0 pt-4 pb-4 text-center font-weight-bold">{item.completeTime}</div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <NFTSaleBuyModal/>
            </div>
        );
    }
}

export default NFTSaleModal
