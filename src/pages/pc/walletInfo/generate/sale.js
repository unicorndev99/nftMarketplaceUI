import React, { Component } from "react";
import {Link} from "react-router-dom";
import { AppContext } from "../../../../AppContext";
import { sellRegisteNFT } from "../../../../services/serverHook";
import { title } from "../../../../services/title";
import { sellListNFT } from "../../../../services/contract";
import LoadingScreen from "react-loading-screen";

class GenerateSale extends Component {
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
            creationDate: nftInfo.generate_time,
            salePrice : 0,
            ownerAddress : nftInfo.mintedWalletAddress,
            status : nftInfo.mintStatus,
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
                    this.props.history.push("/walletInfo");
                } else {
                    setNotification({
                        status: "fail",
                        title: title.sellRegisteFail
                    })
                    this.props.history.push("/walletInfo");
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
            this.props.history.push("/walletInfo");
        }
        
    }


    render() {
        const { wallet, connectedWalletType, loginDate } = this.context;
        return (
            <>
                <div className="w-100">
                    <div className="d-flex justify-content-center pt-lg-5 pb-5">
                        <div className="col-md-4 pt-lg-4 pl-0 pr-0">
                            <div className="d-flex justify-content-between pb-4 mb-4" style={{borderBottom : '1px solid lightgrey'}}>
                                <p className="font-weight-bold modal-header-text">
                                    {title.SellNFT}
                                </p>
                                <div>
                                    <Link to={'/walletInfo'} className="btn btn-default modal_button modal_button_close float-right">{title.Close}</Link>
                                    <button type="button" className="btn btn-default modal_button modal_button_primary float-right" onClick={this.onSellRegisteNFT}>{title.Register}</button>
                                </div>
                            </div>
                            <div className="NFTUpdateModalImageDiv pt-4 pb-3">
                                <div className="d-flex justify-content-center">
                                    <div className="pc-update-img">
                                        {
                                            this.state.mediaType === "Image" && <img src={this.state.mediaIpfs} className="" alt=""/>
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
                                <p className="mb-2 mt-3 font-weight-bold">{title.SalePrice} : &nbsp; 
                                {
                                    connectedWalletType === "metamask" && "ETH"
                                }
                                {
                                    connectedWalletType === "kaikas" && "KLAY"
                                }
                                </p>
                                <input placeholder="Input price to sell" className="form-control form-control-sm form-control-input font-bold price-input-text" value={this.state.salePrice} onChange={this.onSalePriceChange} onBlur={this.onhandleFloat}/>
                                <p className="mb-2 mt-3 font-weight-bold">{title.NFTDetailInfo}</p>
                                <div className="col-md-12">
                                    <div className="row pt-1 pb-1 modal_info_header">
                                        <div className="col-md-3 text-center font-weight-bold pl-0 pr-0 ">{title.category}</div>
                                        <div className="col-md-3 text-center font-weight-bold pl-0 pr-0 ">{title.NFTID}</div>
                                        <div className="col-md-3 text-center font-weight-bold pl-0 pr-0 ">{title.NFTName}</div>
                                        <div className="col-md-3 text-center font-weight-bold pl-0 pr-0 ">{title.CreationDate}</div>
                                    </div>
                                    <div className="row modal_info_body">
                                        <div className="col-md-3 text-center pt-3 pb-3  pl-0 pr-0 font-weight-bold modal_info_body_border_right">{this.state.mediaType}</div>
                                        <div className="col-md-3 text-center pt-3 pb-3  pl-0 pr-0 font-weight-bold modal_info_body_border_right">{this.state.NFTID}</div>
                                        <div className="col-md-3 text-center pt-3 pb-3  pl-0 pr-0 font-weight-bold modal_info_body_border_right">{this.state.name}</div>
                                        <div className="col-md-3 text-center pt-3 pb-3  pl-0 pr-0 font-weight-bold">{this.state.creationDate}</div>
                                    </div>
                                    <div className="row modal_info_body modad_info_color_f5f8ff">
                                        <div className="col-md-6 pt-1 pb-1 text-center font-weight-bold">{title.OwnerAddress}</div>
                                        <div className="col-md-6 pt-1 pb-1 text-center font-weight-bold">{title.Status}</div>
                                    </div>
                                    <div className="row modal_info_body">
                                        <div className="col-md-6 pt-3 pb-3 text-center font-weight-bold modal_info_body_border_right text_underLine">{this.state.ownerAddress}</div>
                                        <div className="col-md-6 pt-3 pb-3 text-center font-weight-bold" style={{color :"green"}}>{this.state.status}</div>
                                    </div>
                                    <div className="row modal_info_body modad_info_color_f5f8ff">
                                        <div className="pt-1 pb-1 text-center col-md-12 font-weight-bold">{title.Description}</div>
                                    </div>
                                    <div className="row modal_info_body">
                                        <div className="pt-2 pb-2 text-left col-md-12 font-weight-bold">{this.state.description}</div>
                                    </div>
                                </div>
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
                            text={title.Listing}
                        >
                            {""}
                        </LoadingScreen>
                }
            </>
        );
    }
}

export default GenerateSale
