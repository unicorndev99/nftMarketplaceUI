import React, { useContext, useState, useEffect } from "react";
import "../../../assets/css/pages/buylist.css";
import NFTSaleBuyModal from "./modal/NFTSaleBuyModal";
import SearchBox from "../../../components/layout_pc/searchBox";
import { useHistory } from "react-router-dom"
import {Link} from "react-router-dom";
import { AppContext } from "../../../AppContext";
import { getBoughtHistoryData, saveBoughtNFT } from "../../../services/serverHook";
import { title } from "../../../services/title";
import { buyNFT } from "../../../services/contract";
import LoadingScreen from "react-loading-screen";

const BuylistDetail = (props) => {
    const { wallet, connectedWalletType, loginDate, setNotification } = useContext(AppContext)
    const nftInfo = props.location.nftInfo
    const history = useHistory()
    const [boughtHistory, setBoughtHistory] = useState(null);
    const [transacting, setTransacting] = useState(false)

    useEffect(() => {
        if(nftInfo) {
            getBoughtHistoryData(nftInfo.id, nftInfo.mintedWalletType).then(data => {
                const historyData = data.map(({ PriceTrading, oldWalletAddress, newWalletAddress, createdAt }) => ({
                    price : PriceTrading,
                    buyer : newWalletAddress,
                    seller : oldWalletAddress,
                    completeTime : new Date(createdAt).getFullYear() + "." + new Date(createdAt).getMonth() + "." + new Date(createdAt).getDate() + " " + new Date(createdAt).getHours() + ":" + new Date(createdAt).getMinutes() + ":" + new Date(createdAt).getSeconds(),
                }))
                setBoughtHistory(historyData)
            })
            
        }
    },[nftInfo])

    const buySelectedNFT = async () => {
        setTransacting(true)
        let resTx = await buyNFT(nftInfo.id, nftInfo.price, wallet, connectedWalletType)
        if(resTx) {
            const { txHash } = resTx
            saveBoughtNFT(nftInfo.dbID, nftInfo.price, wallet, txHash).then(res => {
                setTransacting(false)
                if(res) {
                    setNotification({
                        status: "success",
                        title: title.boughtSuccess
                    })
                    history.push("/")
                } else {
                    setNotification({
                        status: "fail",
                        title: title.boughtFail
                    })
                    history.push("/")
                }
            })
        } else {
            setTransacting(false)
            setNotification({
                status: "fail",
                title: title.boughtFail
            })
            history.push("/")
        }
    }

    const onFilterByName = (name) => {
    }

    return (
        <>
            <div>
                <SearchBox onSearchName={onFilterByName}/>
                <div className="d-flex justify-content-center pt-5 pb-5 z-20">
                    <div className="w-49">
                        <div className="d-flex justify-content-end mb-2">
                            <button type="button" className="btn btn-default modal_button modal_button_primary float-right" data-toggle="modal" data-target="#NFTSaleBuyModal">{title.Buy}</button>
                            <Link to={'/'} className="btn btn-default modal_button modal_button_close float-right">{title.Close}</Link>
                        </div>
                        <div className="d-flex pt-3 mb-5">
                            <div className="col-md-3 img-pane">
                                {
                                    nftInfo.category === "Image" && <img className="updateModalImg" src={nftInfo.content}/>
                                }
                                {
                                    nftInfo.category === "Video" && <video controls className="updateModalImg"> 
                                        <source type="video/mp4" src={nftInfo.content} /> 
                                    </video>
                                }
                            </div>
                            <div className="col-md-9">
                                <div className="d-flex pt-1 pb-1 modal_info_header">
                                    <div className="col-md-3 text-center font-weight-bold">{title.category}</div>
                                    <div className="col-md-3 text-center font-weight-bold">{title.NFTID}</div>
                                    <div className="col-md-3 text-center font-weight-bold">{title.NFTName}</div>
                                    <div className="col-md-3 text-center font-weight-bold">{title.RegisterSalesTime}</div>
                                </div>
                                <div className="d-flex modal_info_body">
                                    <div className="col-md-3 text-center pt-2 pb-2 font-weight-bold modal_info_body_border_right">{nftInfo.category}</div>
                                    <div className="col-md-3 text-center pt-2 pb-2 font-weight-bold modal_info_body_border_right">{nftInfo.id}</div>
                                    <div className="col-md-3 text-center pt-2 pb-2 font-weight-bold modal_info_body_border_right">{nftInfo.NFTName}</div>
                                    <div className="col-md-3 text-center pt-2 pb-2 font-weight-bold">{nftInfo.createTime}</div>
                                </div>
                                <div className="d-flex modal_info_body modad_info_color_f5f8ff">
                                    <div className="col-md-6 pt-1 pb-1 text-center font-weight-bold">{title.OwnerAddress}</div>
                                    <div className="col-md-6 pt-1 pb-1 text-center font-weight-bold">{title.BuyingPrice}</div>
                                </div>
                                <div className="d-flex modal_info_body">
                                    <div className="col-md-6 pt-2 pb-2 text-center font-weight-bold modal_info_body_border_right text_underLine">{nftInfo.mintedWalletAddress}</div>
                                    <div className="col-md-6 pt-2 pb-2 text-center font-weight-bold" style={{color : '#083f92'}}>{nftInfo.price} &nbsp;
                                    {
                                        connectedWalletType === "metamask" && "ETH"
                                    }
                                    {
                                        connectedWalletType === "kaikas" && "KLAY"
                                    }</div>
                                </div>
                                <div className="d-flex modal_info_body modad_info_color_f5f8ff">
                                    <div className="pt-1 pb-1 text-center col-md-12 font-weight-bold">{title.Description}</div>
                                </div>
                                <div className="d-flex modal_info_body">
                                    <div className="pt-2 pb-2 text-left col-md-12 font-weight-bold" style={{minHeight : '80px'}}>{nftInfo.description}</div>
                                </div>
                            </div>
                        </div>
                        <div className="w-100 mb-5">
                            <p className="d-flex font-weight-bold history_text">{title.History}</p>
                            <div className="d-flex pt-1 pb-1 modal_info_header">
                                <div className="col-md-2 pl-0 pr-0 pt-1 pb-1 text-center font-weight-bold">{title.SalePrice}</div>
                                <div className="col-md-4 pl-0 pr-0 pt-1 pb-1 text-center font-weight-bold">{title.Buyer}</div>
                                <div className="col-md-4 pl-0 pr-0 pt-1 pb-1 text-center font-weight-bold">{title.Seller}</div>
                                <div className="col-md-2 pl-0 pr-0 pt-1 pb-1 text-center font-weight-bold">{title.SaleCompleteTime}</div>
                            </div>
                            {
                                boughtHistory && boughtHistory.map((item,index) => {
                                    return(
                                        <div className="d-flex modal_info_body" key={index}>
                                            <div className="col-md-2 pl-0 pr-0 pt-4 pb-4 text-center font-weight-bold" style={{color : '#064092'}}>{item.price}</div>
                                            <div className="col-md-4 pl-0 pr-0 pt-4 pb-4 text-center font-weight-bold text_underLine">{item.buyer}</div>
                                            <div className="col-md-4 pl-0 pr-0 pt-4 pb-4 text-center font-weight-bold text_underLine">{item.seller}</div>
                                            <div className="col-md-2 pl-0 pr-0 pt-4 pb-4 text-center font-weight-bold">{item.completeTime}</div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="modal fade" id="NFTSaleBuyModal" role="dialog">
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content p-4 modal_backgroundColor pl-5 pr-5 pt-4">
                                    <div className="d-flex justify-content-center mt-2">
                                        <i className="fa fa-exclamation mainicon"></i>
                                    </div>
                                    <p className="text-white text-center mt-3" style={{fontSize : '18px'}}>{title.BuyTheNFT}.</p>
                                    <button className="btn buyButton mt-4" data-dismiss="modal" onClick={() => buySelectedNFT()} >{title.Buy}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            { 
                    transacting && <LoadingScreen
                        className="loadingscreen"
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

export default BuylistDetail
