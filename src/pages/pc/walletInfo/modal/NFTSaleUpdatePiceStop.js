import React, { Component } from "react";

class NFTSaleUpdatePiceStop extends Component {
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
            <div className="modal fade" id="NFTSaleUpdatePiceStop" role="dialog">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content p-4 mt-7">
                        <div>
                            <button type="button" className="btn btn-default modal_button modal_button_close float-right" data-dismiss="modal">{title.Close}</button>
                            <button type="button" className="btn btn-default modal_button modal_button_primary float-right">Priceedit</button>
                        </div>
                        <div className="d-flex pt-3 mb-5">
                            <div className="col-md-3 p-0 pr-3">
                                <img src="image/image7.png" className="updateModalImg" alt=""/>
                            </div>
                            <div className="col-md-9">
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
                                    <div className="col-md-3 pt-1 pb-1 text-center">{title.Status}</div>
                                    <div className="col-md-3 pt-1 pb-1 text-center">{title.Status}</div>
                                </div>
                                <div className="row modal_info_body">
                                    <div className="col-md-6 pt-3 pb-3 text-center modal_info_body_border_right text_underLine">WWWWSWWDDWESFWWWWDAD</div>
                                    <div className="col-md-3 pt-3 pb-3 text-center modal_info_body_border_right" style={{color : '#083f92'}}>sale중</div>
                                    <div className="col-md-3 pt-3 pb-3 text-center" style={{color : '#083f92'}}>0.5611344</div>
                                </div>
                                <div className="row modal_info_body modad_info_color_f5f8ff">
                                    <div className="pt-1 pb-1 text-center col-md-12">{title.Description}</div>
                                </div>
                                <div className="row modal_info_body">
                                    <div className="pt-2 pb-2 text-left col-md-12">sample memo---- description</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <p className="row font-weight-bold history_text">{title.History}</p>
                            <div className="row pt-1 pb-1 modal_info_header">
                                <div className="col-md-3 text-center">{title.SalePrice}</div>
                                <div className="col-md-3 text-center">{title.Buyer}</div>
                                <div className="col-md-3 text-center">{title.Seller}</div>
                                <div className="col-md-3 text-center">{title.SaleCompleteTime}</div>
                            </div>
                            {
                                this.state.historyData.map((item,index) => {
                                    return(
                                        <div className="row modal_info_body" key={index}>
                                            <div className="col-md-3 pt-1 pb-1 text-center modal_info_body_border_right">{item.price}</div>
                                            <div className="col-md-3 pt-1 pb-1 text-center modal_info_body_border_right text_underLine">{item.buyer}</div>
                                            <div className="col-md-3 pt-1 pb-1 text-center modal_info_body_border_right text_underLine">{item.saler}</div>
                                            <div className="col-md-3 pt-1 pb-1 text-center">{item.completeTime}</div>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default NFTSaleUpdatePiceStop
