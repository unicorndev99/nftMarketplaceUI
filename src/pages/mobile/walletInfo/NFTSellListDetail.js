import React, { Component } from "react";
import {Link} from "react-router-dom";

import STable from "../../../components/mobile/mobile_standard_table";
import FullTable from "../../../components/mobile/mobile_full_table";
import { getBoughtHistoryData, stopForsaleNFT } from "../../../services/serverHook";
import { title } from "../../../services/title";
import { AppContext } from "../../../AppContext";
import { disableListNFT } from "../../../services/contract";
import LoadingScreen from "react-loading-screen"

class NFTSellListDetail extends Component {
    static contextType = AppContext;
    constructor(props) {
        super(props);
        const nftInfo = props.location.nftInfo
        this.state = {
            ...nftInfo,
            historyTableHeader : [
                { name : `${title.SalePrice}`, field : 'price', sortable : false,width : '150px' },
                { name : `${title.Buyer}`, field : 'buyer', sortable : false,width : '290px' },
                { name : `${title.Seller}`, field : 'seller', sortable : false,width : '290px' },
                { name : `${title.SaleCompleteTime}`, field : 'endTime', sortable : false,width : '180px' },
            ],
            historyTableData : [],
            num : 5,
            transacting: false
        }
    }
    componentDidMount() {
        const nftInfo = this.props.location.nftInfo
        if(nftInfo) {
            getBoughtHistoryData(nftInfo.id, nftInfo.mintedWalletType).then(data => {
                let historyData = data.map(({ PriceTrading, oldWalletAddress, newWalletAddress, createdAt }) => ({
                    price : PriceTrading,
                    buyer : newWalletAddress,
                    seller : oldWalletAddress,
                    endTime : new Date(createdAt).getFullYear() + "." + new Date(createdAt).getMonth() + "." + new Date(createdAt).getDate() + " " + new Date(createdAt).getHours() + ":" + new Date(createdAt).getMinutes() + ":" + new Date(createdAt).getSeconds(),
                }))
                
                this.setState({
                    historyTableData : historyData
                })
            })
        }
    }

    stopSaleNFT = async (dbID, tokenID) => {
        this.setState({
            transacting: true
        })
        const { wallet, connectedWalletType, setNotification } = this.context;
        let resTx = await disableListNFT(tokenID, wallet, connectedWalletType)
        if(resTx) {
            stopForsaleNFT(dbID).then(res => {
                this.setState({
                    transacting: false
                })
                if(res) {
                    setNotification({
                        status: "success",
                        title: title.sellStopSuccess
                    })
                    this.props.history.push("/NFTSellList");
                } else {
                    setNotification({
                        status: "fail",
                        title: title.sellStopFail
                    })
                    this.props.history.push("/NFTSellList");
                }
            })
        } else {
            this.setState({
                transacting: false
            })
            setNotification({
                status: "fail",
                title: title.sellStopFail
            })
            this.props.history.push("/NFTSellList");
        }
    }

    render() {
        return (
            <>
                <div className="pt-4 pl-1 pr-1 mt-7">
                    <div className="d-flex justify-content-around pb-3 mb-2 pl-3 pr-3 mt-3">
                        <button onClick={() => this.stopSaleNFT(this.state.dbID, this.state.id)} className="btn btn-default btn-mobile-default modal_button_primary float-right">{title.Stop}</button>
                        <Link to={{ pathname: "/NFTSellListUpdate", nftInfo: this.state}} className="btn btn-default btn-mobile-default modal_Link_primary float-right">{title.Edit}</Link>
                        <Link to={'/NFTSellList'} className="btn btn-default btn-mobile-default modal_button_close float-right">{title.Close}</Link>
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
                            <div className="w-35 pl-0 pr-0 text-center">{title.RegisterSalesTime}</div>
                        </div>
                        <div className="unColoredTd">
                            <div className="w-25 pl-0 pr-0 text-center">{this.state.category}</div>
                            <div className="w-25 pl-0 pr-0 text-center">{this.state.id}</div>
                            <div className="w-15 pl-0 pr-0 text-center">{this.state.NFTName}</div>
                            <div className="w-35 pl-0 pr-0 text-center">{this.state.register_time}</div>
                        </div>
                        <div className="coloredTd w-100">
                            <div className="w-75 pl-0 pr-0 text-center">{title.OwnerAddress}</div>
                            <div className="w-25 pl-0 pr-0 text-center">{title.MySalePrice}</div>
                        </div>
                        <div className="unColoredTd w-100">
                            <div className="w-75 pl-0 pr-0 text-center text_underLine">{this.state.mintedWalletAddress}</div>
                            <div className="w-25 pl-0 pr-0 text-center" style={{color : "#083f92"}}>{this.state.price}</div>
                        </div>
                        <div className="coloredTd">
                            <div className="col-md-12 text-center">{title.Description}</div>
                        </div>
                        <div className="unColoredTd">
                            <div className="col-md-12">{this.state.description}</div>
                        </div>
                    </div>
                    <p className="font-bold mb-3 pl-1">{title.History}</p>
                    <div className="table-responsive mt-2 mobile_tab">
                        <STable data={this.state.historyTableData} num={this.state.num} header={this.state.historyTableHeader}/>
                    </div>
                </div>
                { 
                    this.state.transacting && <LoadingScreen
                        loading={true}
                        bgColor="rgba(0,0,0,0.7)"
                        spinnerColor="#23b4cb"
                        textColor="white"
                        logoSrc=""
                        text={title.SellStopping}
                    >
                        {""}
                    </LoadingScreen>
                }
            </>
        );
    }
}

export default NFTSellListDetail
