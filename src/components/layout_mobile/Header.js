

import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { AppContext } from "../../AppContext";
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { title } from "../../services/title";
import MenuIcon from "./menuIcon";
import "../../assets/css/pages/mobile/header.css"

const Mobile_Header = () => {
    const { wallet, setWalletAddress, connectedWalletType, setConnectedWalletType, notification, setNotification, globalSearch, setGlobalSearch } = useContext(AppContext);
    const history = useHistory()

    const onLogout = () => {
        setWalletAddress(null);
        setConnectedWalletType(null);
        // history.push("/")
    }

    const onGlobalSearch = (e) => {
        setGlobalSearch(e.target.value)
        history.push("/dashboard")
    }

    useEffect(() => {
        if(notification && notification.status === "success") {
            NotificationManager.success("", notification.title, 5000)
            setNotification({
                status: null,
                title: null
            })
        }
        if(notification && notification.status === "fail") {
            NotificationManager.error("", notification.title, 5000)
            setNotification({
                status: null,
                title: null
            })
        }
    }, [JSON.stringify(notification)])

    const onShowMenu = () => {
        document.getElementById("mySidenav").style.width = "140px";
    }

    const onCloseMenu = () => {
        document.getElementById("mySidenav").style.width = "0px";
    }

    return (
        <>
            <div className="w-100 pl-1 pr-1">
                <div className="d-flex pt-2 pb-2 justify-content-between align-items-center">
                    <Link to="/dashboard">
                        <img src="./image/logo.png" className="logo" alt="" />
                    </Link>
                    <div  onClick={onShowMenu}>
                        <MenuIcon/>
                    </div>
                </div>
                <div className="d-flex pt-2 publish mobile-input-container">
                    <i className="fa fa-search pt-2"></i>
                    <input type="text" className="form-control form-control-sm mobile-NFTGenerate-search-input w-100 pl-2" placeholder={title.SearchByName} onChange={onGlobalSearch} value={globalSearch}/>
                </div>
                <div id="mySidenav" className="sidenav">
                    <div className="row justify-content-between">
                        <div className="col-md-5">
                            {/* <p className="gotoLink_title">WalletInfo</p> */}
                            {
                                ((!wallet) && (!connectedWalletType)) ? <Link to={'/login'} className="gotoLink_title gotoLink_title_login" onClick={onCloseMenu}>
                                    {title.Login}
                                </Link> 
                                : <>
                                    <Link to={'/login'} className="gotoLink_title gotoLink_title_login" onClick={onLogout}>
                                        {title.Logout}
                                    </Link>
                                </>
                            }
                            <Link to="/NFTGenerateList" className="gotoLink mt-1" onClick={onCloseMenu}>
                                {title.NFTMintList}
                            </Link>
                            <Link to="/NFTSellList" className="gotoLink" onClick={onCloseMenu}>
                                {title.NFTSalesList}
                            </Link>
                            <Link to="/NFTBuyList" className="gotoLink" onClick={onCloseMenu}>
                                {title.NFTBuyCompletion}
                            </Link>
                            <Link to="/NFTHistory" className="gotoLink mb-1" onClick={onCloseMenu}>
                                {title.NFTHistory}
                            </Link>
                            <Link to="/Generate" className="gotoLink_title mb-3" onClick={onCloseMenu}>
                                {title.NFTMint}
                            </Link>
                            <Link to="/dashboard"  className="gotoLink_title mb-3" onClick={onCloseMenu}>
                                {title.NFTBuy}
                            </Link>
                        </div>
                        <button className="closebtn" onClick={onCloseMenu}>&times;</button>
                    </div>
                    {/* <NFTGenerateModal/> */}
                </div>
            </div>
            <NotificationContainer/>
        </>
    );
}
export default Mobile_Header
