import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { AppContext } from "../../AppContext";
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { title } from "../../services/title";

const Header = () => {
    const { wallet, setWalletAddress, connectedWalletType, setConnectedWalletType, notification, setNotification, globalSearch, setGlobalSearch } = useContext(AppContext);
    const [currentPage, setCurrentPage] = useState("Login")
    const history = useHistory()

    const goto = (params) => {
        if(!(wallet && connectedWalletType)) setCurrentPage("Login")
        else {
            setCurrentPage(params)
        }
    }
    const logout = () => {
        setWalletAddress(null);
        setConnectedWalletType(null);
        // history.push("/")
    }

    const onGlobalSearch = (e) => {
        setGlobalSearch(e.target.value)
        history.push("/")
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
    return (
        <>
            <header className="header d-flex justify-content-center align-items-center">
                <div className="header-container">
                    <div className="d-flex align-items-center">
                        <Link to="/" onClick={() => goto('')}>
                            <img src="./image/logo.png" className="logo" alt="" />
                        </Link>
                        <div className="d-flex align-items-center input-container">
                            <i className="fa fa-search"></i>
                            <input type="text" className="form-control form-control-sm search_input w100 pl-1 font-bold" placeholder={title.SearchByName} onChange={onGlobalSearch} value={globalSearch}/>
                        </div>
                    </div>
                    <div className="d-flex align-items-center">
                        {
                            ((!wallet) && (!connectedWalletType)) ? <Link to={"/Login"} onClick={() => goto('Login')} className={currentPage === 'Login' ? 'header_button header_button_active' : 'header_button'} >
                                    {title.Login}
                                </Link>
                                : <>
                                    <Link to={"/"} onClick={() => logout()} className={'header_button'} >
                                    {title.Logout}
                                    </Link>
                                </>
                        }
                        <Link to={"/walletInfo"} onClick={() => goto('walletInfo')} className={currentPage === 'walletInfo' ? 'header_button header_button_active' : 'header_button'}>
                            {title.WalletInfo}
                        </Link>
                        <Link to={"/NFTGenerate"} onClick={() => goto('NFTGenerate')} className={currentPage === 'NFTGenerate' ? 'header_button header_button_active' : 'header_button'}>
                            {title.NFTMint}
                        </Link>
                        <Link to={"/"} onClick={() => goto('buylist')} className={currentPage === 'buylist' ? 'header_button header_button_active' : 'header_button'}>
                            {title.NFTBuy}
                        </Link>
                    </div>
                </div>
            </header>
            <NotificationContainer/>
        </>
    );
}
export default Header
