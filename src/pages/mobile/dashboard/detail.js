import React, { Component } from "react";
import {Link} from "react-router-dom";

import STable from "../../../components/mobile/mobile_standard_table";
import FullTable from "../../../components/mobile/mobile_full_table";
import { AppContext } from "../../../AppContext";
import { buyNFT } from "../../../services/contract";
import { title } from "../../../services/title";
import { saveBoughtNFT } from "../../../services/serverHook";
import LoadingScreen from "react-loading-screen";

class DashboardDetail extends Component {
    static contextType = AppContext;
    constructor(props) {
        super(props);
        const nftInfo = props.location.nftInfo
        this.state = {
            ...nftInfo,
            transacting : false
        }
    }
    componentDidMount() {

    }

    buyNFT = async () => {
        this.setState({
            transacting: true
        })
        const { wallet, connectedWalletType, setNotification } = this.context;
        let resTx = await buyNFT(this.state.id, this.state.price, wallet, connectedWalletType)
        if(resTx) {
            const { txHash } = resTx
            saveBoughtNFT(this.state.dbID, this.state.price, wallet, txHash).then(res => {
                this.setState({
                    transacting: false
                })
                if(res) {
                    setNotification({
                        status: "success",
                        title: title.boughtSuccess
                    })
                    this.props.history.push("/dashboard");
                } else {
                    setNotification({
                        status: "fail",
                        title: title.boughtFail
                    })
                    this.props.history.push("/dashboard");
                }
            })
        } else {
            this.setState({
                transacting: false
            })
            setNotification({
                status: "fail",
                title: title.boughtFail
            })
            this.props.history.push("/dashboard");
        }
    }

    render() {
        return (
            <>
                <div className="pt-4 pl-1 pr-1 mt-7">
                    <div className="d-flex justify-content-around pb-3 mb-2 pl-3 pr-3 mt-3">

                        <button type="button" className="btn btn-mobile-default modal_button_primary float-right" data-toggle="modal" data-target="#NFTBuyConfirmModal">{title.Buy}</button>
                        <Link to={'/dashboard'} className="btn btn-default btn-mobile-default modal_button_close float-right">{title.Close}</Link>
                    </div>
                    <div className="d-flex justify-content-center pt-2 pb-2 mb-3">
                        <div className="mobile-NFTGenerate-detail-img">
                            {
                                this.state.category === "Image" && <img src={this.state.content}/>
                            }
                            {
                                this.state.category === "Video" && <video controls> 
                                    <source type="video/mp4" src={this.state.content} /> 
                                </video>
                            }
                        </div>
                    </div>
                    <div className="mt-4 mb-4">
                        <div className="coloredTd w-100">
                            <div className="w-25 pl-0 pr-0 text-center">{title.category}</div>
                            <div className="w-25 pl-0 pr-0 text-center">{title.NFTID}</div>
                            <div className="w-15 pl-0 pr-0 text-center">{title.NFTName}</div>
                            <div className="w-35 pl-0 pr-0 text-center">{title.CreationDate}</div>
                        </div>
                        <div className="unColoredTd">
                            <div className="w-25 pl-0 pr-0 text-center">{this.state.category}</div>
                            <div className="w-25 pl-0 pr-0 text-center">{this.state.id}</div>
                            <div className="w-15 pl-0 pr-0 text-center">{this.state.NFTName}</div>
                            <div className="w-35 pl-0 pr-0 text-center">{this.state.generate_time}</div>
                        </div>
                        <div className="coloredTd w-100">
                            <div className="w-75 pl-0 pr-0 text-center">{title.OwnerAddress}</div>
                            <div className="w-25 pl-0 pr-0 text-center">{title.SalePrice}</div>
                        </div>
                        <div className="unColoredTd w-100">
                            <div className="w-75 pl-0 pr-0 text-center text_underLine">{this.state.mintedWalletAddress}</div>
                            <div className="w-25 pl-0 pr-0 text-center" style={{color : "#083f92"}}>{this.state.price} &nbsp;
                                {
                                    this.state.mintedWalletType === "metamask" && "ETH"
                                }
                                {
                                    this.state.mintedWalletType === "kaikas" && "KLAY"
                                }
                                </div>
                        </div>
                        <div className="coloredTd">
                            <div className="col-md-12 text-center">{title.Description}</div>
                        </div>
                        <div className="unColoredTd">
                            <div className="col-md-12">{this.state.description}</div>
                        </div>
                    </div>
                    <div className="modal fade" id="NFTBuyConfirmModal" role="dialog">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content login_modal p-4">
                                <div className="d-flex justify-content-center mb-3">
                                    <i className="fa fa-exclamation mobileLoginIcon"></i>
                                </div>
                                <div className="d-flex justify-content-center mb-4">
                                    <p className="text-white">{title.WillYouBuy}</p>
                                </div>
                                <button className="btn loginButton" data-dismiss="modal" onClick={this.buyNFT}>{title.Buy}</button>
                            </div>
                        </div>
                    </div>
                </div>
                { 
                    this.state.transacting && <LoadingScreen
                        loading={true}
                        bgColor="rgba(0,0,0,0.7)"
                        spinnerColor="#23b4cb"
                        textColor="white"
                        logoSrc=""
                        text={title.Buying}
                    >
                        {""}
                    </LoadingScreen>
                }
            </>
        );
    }
}

export default DashboardDetail
