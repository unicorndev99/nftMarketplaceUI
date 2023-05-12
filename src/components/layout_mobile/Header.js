import React, { Component } from "react";
import {Link, withRouter} from "react-router-dom";

import MenuIcon from "./menuIcon";
import NFTGenerateModal from "../../pages/mobile/walletInfo/modal/NFTGenerateModal";
import "../../assets/css/pages/mobile/header.css"
import { AppContext } from "../../AppContext";
import { title } from "../../services/title";

class Mobile_Header extends Component {
    static contextType = AppContext;
    constructor(props) {
        super(props);
        this.state = {
            currentPage : 'Login',
            update : 1,
            isMobile : false,
        }
    }
    componentDidMount() {

    }

    componentWillUnmount() {
        this.onCloseMenu();
    }

    onShowMenu() {
        document.getElementById("mySidenav").style.width = "140px";
    }

    onCloseMenu() {
        document.getElementById("mySidenav").style.width = "0px";
    }

    onShowNFTGenerate() {
        this.onCloseMenu();
    }

    onLogout() {
        const { setWalletAddress, setConnectedWalletType } = this.context;
        setWalletAddress(null);
        setConnectedWalletType(null)
    }

    onGlobalSearch(e){
        const { setGlobalSearch } = this.context
        setGlobalSearch(e.target.value)
        this.props.history.push("/dashboard")
    }

    render() {
        const { wallet, connectedWalletType, globalSearch } = this.context;
        return (
            <div className="w-100 pl-1 pr-1">
                <div className="d-flex pt-2 pb-2 justify-content-between align-items-center">
                    <Link to="/dashboard">
                        <img src="./image/logo.png" className="logo" alt="" />
                    </Link>
                    <div  onClick={this.onShowMenu.bind(this)}>
                        <MenuIcon/>
                    </div>
                </div>
                <div className="d-flex pt-2 publish mobile-input-container">
                    <i className="fa fa-search pt-2"></i>
                    <input type="text" className="form-control form-control-sm mobile-NFTGenerate-search-input w-100 pl-2" placeholder={title.SearchByName} onChange={this.onGlobalSearch.bind(this)} value={globalSearch}/>
                </div>
                <div id="mySidenav" className="sidenav">
                    <div className="row justify-content-between">
                        <div className="col-md-5">
                            {/* <p className="gotoLink_title">WalletInfo</p> */}
                            {
                                ((!wallet) && (!connectedWalletType)) ? <Link to={'/login'} className="gotoLink_title gotoLink_title_login" onClick={this.onCloseMenu.bind(this)}>
                                    {title.Login}
                                </Link> 
                                : <>
                                    <Link to={'/login'} className="gotoLink_title gotoLink_title_login" onClick={this.onLogout.bind(this)}>
                                        {title.Logout}
                                    </Link>
                                </>
                            }
                            <Link to="/NFTGenerateList" className="gotoLink mt-1" onClick={this.onCloseMenu.bind(this)}>
                                {title.NFTMintList}
                            </Link>
                            <Link to="/NFTSellList" className="gotoLink" onClick={this.onCloseMenu.bind(this)}>
                                {title.NFTSalesList}
                            </Link>
                            <Link to="/NFTBuyList" className="gotoLink" onClick={this.onCloseMenu.bind(this)}>
                                {title.NFTBuyCompletion}
                            </Link>
                            <Link to="/NFTHistory" className="gotoLink mb-1" onClick={this.onCloseMenu.bind(this)}>
                                {title.NFTHistory}
                            </Link>
                            <Link to="/Generate" className="gotoLink_title mb-3" onClick={this.onCloseMenu.bind(this)}>
                                {title.NFTMint}
                            </Link>
                            <Link to="/dashboard"  className="gotoLink_title mb-3" onClick={this.onCloseMenu.bind(this)}>
                                {title.NFTBuy}
                            </Link>
                        </div>
                        <button className="closebtn" onClick={this.onCloseMenu.bind(this)}>&times;</button>
                    </div>
                    {/* <NFTGenerateModal/> */}
                </div>
            </div>

        );
    }
}

export default withRouter(Mobile_Header)
