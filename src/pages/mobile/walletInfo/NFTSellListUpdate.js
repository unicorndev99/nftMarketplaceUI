import React, { Component } from "react";
import {Link} from "react-router-dom";

import "../../../assets/css/pages/mobile/generate.css"
import { sellRegisteNFT } from "../../../services/serverHook";
import { AppContext } from "../../../AppContext";
import { title } from "../../../services/title";
import { sellListNFT } from "../../../services/contract";
import LoadingScreen from "react-loading-screen";

class NFTSellListUpdate extends Component {
    static contextType = AppContext;
    constructor(props) {
        super(props);
        const nftInfo = props.location.nftInfo
        this.state = {
            category : nftInfo.categoryOfMintpage ? nftInfo.categoryOfMintpage : "category1",
            name : nftInfo.NFTName,
            description : nftInfo.description,
            mediaIpfs: nftInfo.content,
            mediaType: nftInfo.category,
            dbID: nftInfo.dbID,
            NFTID: nftInfo.id,
            creationDate: nftInfo.register_time,
            salePrice : nftInfo.price,
            ownerAddress : nftInfo.mintedWalletAddress,
            status : nftInfo.mintStatus,
            sellPrice : nftInfo.price,
            transacting: false
        }
    }
    componentDidMount() {

    }

    onSalePriceChange = async (e) => {
        let input = e.target.value;
        if(input.match(/^([0-9]{1,})?(\.)?([0-9]{1,})?$/)) {
            this.setState({
                salePrice : input
            })
        }
        
    }

    onhandleFloat = () => {
        this.setState((prevState) => ({
            salePrice : (parseFloat(prevState.salePrice) || '')
        }))
    }

    onSellRegisteNFT = async () => {
        this.setState({
            transacting: true
        })
        const { wallet, connectedWalletType, setNotification } = this.context;
        let resTx = await sellListNFT(this.state.NFTID, this.state.salePrice, wallet, connectedWalletType)
        if(resTx) {
            sellRegisteNFT(this.state.dbID, this.state.salePrice).then(res => {
                this.setState({
                    transacting: false
                })
                if(res) {
                    setNotification({
                        status: "success",
                        title: title.sellRegisteSuccess
                    })
                    this.props.history.push("/NFTSellList");
                } else {
                    setNotification({
                        status: "fail",
                        title: title.sellRegisteFail
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
                title: title.sellRegisteFail
            })
            this.props.history.push("/NFTSellList");
        }
    }

    render() {
        const { wallet, connectedWalletType, loginDate } = this.context;
        return (
            <>
                <div className="pt-4 pl-1 pr-1">
                    <div className="d-flex justify-content-between pb-3  mb-3 mt-3" style={{borderBottom : '1px solid lightgrey'}}>
                        <p className="mobile_generate_update_header_text">
                            {title.SellNFT}
                        </p>
                        <div className="d-flex">
                            <button type="button" className="btn btn-mobile-default modal_button_primary float-right mr-3" onClick={this.onSellRegisteNFT}>{title.Edit}</button>
                            <Link to={'/NFTSellList'} className="btn btn-mobile-default modal_button_close float-right">{title.Close}</Link>
                        </div>
                    </div>
                    <div className="NFTSellListUpdateImgDiv pt-4 pb-3">
                        <div className="d-flex justify-content-center">
                            <div className="mobile-NFTGenerate-update-img">
                            {
                                this.state.mediaType === "Image" && <img src={this.state.mediaIpfs} alt=""/>
                            }
                            {
                                this.state.mediaType === "Video" && <video controls> 
                                    <source type="video/mp4" src={this.state.mediaIpfs} /> 
                                </video>
                            }
                            </div>
                        </div>
                        {/* <p className="text-center font-weight-bold mb-1 mt-1">Filename.png</p> */}
                    </div>
                    <div className="pt-4">
                        <p className="mb-2 font-weight-bold pl-2">{title.SalePrice} : &nbsp; 
                        {
                            connectedWalletType === "metamask" && "ETH"
                        }
                        {
                            connectedWalletType === "kaikas" && "KLAY"
                        }
                        </p>
                        <input type="text" className="form-control form-control-sm form-control-input mb-2 font-size-13" placeholder={'Input price to sell'} value={this.state.salePrice} onChange={this.onSalePriceChange} onBlur={this.onhandleFloat} />
                        <p className="mb-2 mt-3 font-weight-bold pl-2">{title.NFTDetailInfo}</p>
                        <div className="coloredTd w-100">
                            <div className="w-25 pl-0 pr-0 text-center">{title.category}</div>
                            <div className="w-25 pl-0 pr-0 text-center">{title.NFTID}</div>
                            <div className="w-15 pl-0 pr-0 text-center">{title.NFTName}</div>
                            <div className="w-35 pl-0 pr-0 text-center">{title.RegisterSalesTime}</div>
                        </div>
                        <div className="unColoredTd">
                            <div className="w-25 pl-0 pr-0 text-center">{this.state.mediaType}</div>
                            <div className="w-25 pl-0 pr-0 text-center">{this.state.NFTID}</div>
                            <div className="w-15 pl-0 pr-0 text-center">{this.state.name}</div>
                            <div className="w-35 pl-0 pr-0 text-center">{this.state.creationDate}</div>
                        </div>
                        <div className="coloredTd w-100">
                            <div className="w-75 pl-0 pr-0 text-center">{title.OwnerAddress}</div>
                            {/* <div className="w-25 pl-0 pr-0 text-center">sell price</div> */}
                        </div>
                        <div className="unColoredTd w-100">
                            <div className="w-75 pl-0 pr-0 text-center text_underLine">{this.state.ownerAddress}</div>
                            {/* <div className="w-25 pl-0 pr-0 text-center" style={{color : "green"}}>{this.state.sellPrice}</div> */}
                        </div>
                        <div className="coloredTd">
                            <div className="col-md-12 text-center">{title.Description}</div>
                        </div>
                        <div className="unColoredTd">
                            <div className="col-md-12">{this.state.description}</div>
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
                        text={title.Listing}
                    >
                        {""}
                    </LoadingScreen>
                }
            </>
        );
    }
}

export default NFTSellListUpdate
