import React, { useContext, useEffect, useState } from "react";
import { useHistory  } from "react-router-dom"
import { getBoughtHistoryData, stopForsaleNFT } from "../../../../services/serverHook";
import { AppContext } from "../../../../AppContext";
import { title } from "../../../../services/title";

const NFTHistoryDetail = (props) => {
    const { wallet, connectedWalletType, loginDate } = useContext(AppContext)
    const nftInfo = props.Info
    const history = useHistory()
    const [boughtHistory, setBoughtHistory] = useState(null);

    useEffect(() => {
        console.log("new", nftInfo)
        if(nftInfo) {
            getBoughtHistoryData(nftInfo.id, nftInfo.walletType).then(data => {
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

    // const linkPage = (pageRouter, data) => {
    //     history.push({
    //         pathname: pageRouter,
    //         nftInfo : data
    //     });
    // }

    // const stopSaleNFT = (nftID) => {
    //     console.log("int ehfrist", wallet, connectedWalletType)
    //     stopForsaleNFT(nftID).then(data => {
    //         if(data) {
    //             alert("stop Success");

    //             props.getRefreshData(wallet, connectedWalletType)
    //         } else {

    //         }
    //     })
    // }

    return (
        nftInfo &&
        <div className="modal fade" id="NFTHistoryDetail" role="dialog">
            <div className="modal-dialog modal-xl modal-dialog-centered">
                <div className="modal-content p-5">
                    <div>
                        <button type="button" className="btn btn-default modal_button modal_button_close float-right" data-dismiss="modal">{title.Close}</button>
                        {/* <button type="button" className="btn btn-default modal_button modal_button_primary float-right" data-dismiss="modal" onClick={() => linkPage("/saleUpdate", nftInfo)}>{title.Edit}</button>
                        <button type="button" className="btn btn-default modal_button modal_button_primary float-right" data-dismiss="modal" onClick={() => stopSaleNFT(nftInfo.dbID)}>{title.Stop}</button> */}
                    </div>
                    <div className="d-flex pt-4 mb-3">
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
                        <div className="col-md-9 pr-0">
                            <div className="d-flex pt-1 pb-1 modal_info_header">
                                <div className="col-md-3 text-center font-weight-bold">{title.category}</div>
                                <div className="col-md-3 text-center font-weight-bold">{title.NFTID}</div>
                                <div className="col-md-3 text-center font-weight-bold">{title.NFTName}</div>
                                <div className="col-md-3 text-center font-weight-bold">{title.TradingCompletionTime}</div>
                            </div>
                            <div className="d-flex modal_info_body">
                                <div className="col-md-3 text-center pt-3 pb-3 font-weight-bold modal_info_body_border_right">{nftInfo.category}</div>
                                <div className="col-md-3 text-center pt-3 pb-3 font-weight-bold modal_info_body_border_right">{nftInfo.id}</div>
                                <div className="col-md-3 text-center pt-3 pb-3 font-weight-bold modal_info_body_border_right">{nftInfo.NFTName}</div>
                                <div className="col-md-3 text-center pt-3 pb-3 font-weight-bold">{nftInfo.completeTime}</div>
                            </div>
                            <div className="d-flex modal_info_body modad_info_color_f5f8ff">
                                <div className="col-md-6 pt-1 pb-1 text-center font-weight-bold">{title.TxID}</div>
                                <div className="col-md-6 pt-1 pb-1 text-center font-weight-bold">{title.MyTradingPrice}</div>
                            </div>
                            <div className="d-flex modal_info_body">
                                <div className="col-md-6 pt-3 pb-3 text-center font-weight-bold modal_info_body_border_right text_underLine">{nftInfo.TxID}</div>
                                <div className="col-md-6 pt-3 pb-3 text-center font-weight-bold" style={{color : '#083f92'}}>{nftInfo.price} &nbsp;
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
                                <div className="pt-2 pb-2 text-left col-md-12 font-weight-bold">{nftInfo.description}</div>
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
                </div>

            </div>
        </div>
    );
}

export default NFTHistoryDetail
