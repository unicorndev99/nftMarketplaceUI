import React, { useState } from "react";
import { Route, Switch, Redirect, BrowserRouter as Router, useHistory,} from "react-router-dom";
import Header from "./components/layout_pc/Header";
import Mobile_Header from "./components/layout_mobile/Header";
import Footer from "./components/layout_pc/Footer";

/* Layout CSS */
import "./assets/css/layout.css"
import "./assets/css/font-awesome.min.css"
/* Components PC Pages --------------------------------------------*/
import Home from "./pages/pc/dashboard/Home";
import Login from "./pages/pc/Login/login";
import ErrorPage from "./pages/error";
import WalletInfo from "./pages/pc/walletInfo/WalletInfo";
import GenerateUpdate from "./pages/pc/walletInfo/generate/update";
import GenerateSale from "./pages/pc/walletInfo/generate/sale";
import SaleUpdate from "./pages/pc/walletInfo/sale/update";
import BuySale from "./pages/pc/walletInfo/buy/sale";
import CheckPortraitService from "./@core/services/checkPortrait";
import Buylist from "./pages/pc/buylist/buylist";
import BuylistDetail from "./pages/pc/buylist/detail";
import NFTGenerate from "./pages/pc/NFTGenerate/index";

/* Components Mobile Pages -----------------------------------------*/
import Mobile_Login from "./pages/mobile/Login/login";
import Mobile_Dashboard from "./pages/mobile/dashboard";
import DashboardDetail from "./pages/mobile/dashboard/detail";

//MintList
import NFTGenerateList from "./pages/mobile/walletInfo/NFTGenerateList";
import NFTGenerateListDetail from "./pages/mobile/walletInfo/NFTGenerateListDetail";
import NFTGenerateListUpdate from "./pages/mobile/walletInfo/NFTGenerateListUpdate";
import NFTGenerateListSale from "./pages/mobile/walletInfo/NFTGenerateListSale";

//SalesList
import NFTSellList from "./pages/mobile/walletInfo/NFTSellList";
import NFTSellListDetail from "./pages/mobile/walletInfo/NFTSellListDetail";
import NFTSellListUpdate from "./pages/mobile/walletInfo/NFTSellListUpdate";

//BuyList
import NFTBuyList from "./pages/mobile/walletInfo/NFTBuyList";
import NFTBuyListDetail from "./pages/mobile/walletInfo/NFTBuyListDetail";
import NFTHistoryDetail from "./pages/mobile/walletInfo/NFTHistoryDetail";

//History
import NFTHistory from "./pages/mobile/walletInfo/NFTHistory";

//NFT Mint
import Generate from "./pages/mobile/walletInfo/NFTGenerate";
import $ from 'jquery'
import { AppContext } from './AppContext';
import ErrorBoundary from './ErrorBoundary';
import SomeThingErrorPage from "./pages/someThingError";

/* Mobile check --------------------------------------------------*/
let isMobile = null;
function checkPortrait() {
    if (checkMobile()) {
        isMobile = true;
        CheckPortraitService.savePortrait(true);
    } else {
        isMobile = false;
        CheckPortraitService.savePortrait(false);
    }
}

function checkMobile() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
        return true;
    }

    if (/android/i.test(userAgent)) {
        return true;
    }
    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return true;
    }

    if($(window).width() < 800)
        return true
    return false;
}

checkPortrait();

function App() {
    const [loginDate, setLoginDate] = useState(null);
    const [wallet, setWalletAddress] = useState(null);
    const [connectedWalletType, setConnectedWalletType] = useState(null);
    const [walletBalance, setWalletBalance] = useState(0);
    const [globalSearch, setGlobalSearch] = useState("");
    const [notification, setNotification] = useState({
        status: null,
        title: null
    });

    const AppContextValues = {
        loginDate,
        setLoginDate,
        wallet,
        setWalletAddress,
        connectedWalletType,
        setConnectedWalletType,
        walletBalance,
        setWalletBalance,
        notification,
        setNotification,
        globalSearch,
        setGlobalSearch
    };
    
    return (
            <div className="App">
                <AppContext.Provider value={AppContextValues}>
                    <Router>
                        <ErrorBoundary FallbackComponent={SomeThingErrorPage}>
                        {
                            isMobile ? <>
                                <Mobile_Header/>
                                <Switch>
                                    <Route path="/dashboard" exact render={(props) => <Mobile_Dashboard {...props} />} />
                                    <Route path="/login" exact render={(props) => <Mobile_Login {...props} />} />
                                    <Route path="/dashboardDetail" exact render={(props) => !wallet ? <Redirect to="/login" /> : <DashboardDetail {...props} />} />

                                    {/*MintList --------------------------------------*/}
                                    <Route path="/NFTGenerateList" exact render={(props) => !wallet ? <Redirect to="/login" /> : <NFTGenerateList {...props} />} />
                                    <Route path="/NFTGenerateListDetail" exact render={(props) => !wallet ? <Redirect to="/login" /> : <NFTGenerateListDetail {...props} />} />
                                    <Route path="/NFTGenerateListUpdate" exact render={(props) => !wallet ? <Redirect to="/login" /> : <NFTGenerateListUpdate {...props} />} />
                                    <Route path="/NFTGenerateListSale" exact render={(props) => !wallet ? <Redirect to="/login" /> : <NFTGenerateListSale {...props} />} />

                                    {/*SalesList --------------------------------------*/}
                                    <Route path="/NFTSellList" exact render={(props) => !wallet ? <Redirect to="/login" /> : <NFTSellList {...props} />} />
                                    <Route path="/NFTSellListDetail" exact render={(props) => !wallet ? <Redirect to="/login" /> : <NFTSellListDetail {...props} />} />
                                    <Route path="/NFTSellListUpdate" exact render={(props) => !wallet ? <Redirect to="/login" /> : <NFTSellListUpdate {...props} />} />

                                    {/*buyList --------------------------------------*/}
                                    <Route path="/NFTBuyList" exact render={(props) => !wallet ? <Redirect to="/login" /> : <NFTBuyList {...props} />} />
                                    <Route path="/NFTBuyListDetail" exact render={(props) => !wallet ? <Redirect to="/login" /> : <NFTBuyListDetail {...props} />} />

                                    {/*History --------------------------------------*/}
                                    <Route path="/NFTHistory" exact render={(props) => !wallet ? <Redirect to="/login" /> : <NFTHistory {...props} />} />
                                    <Route path="/NFTHistoryDetail" exact render={(props) => !wallet ? <Redirect to="/login" /> : <NFTHistoryDetail {...props} />} />

                                    {/*NFT Mint*/}
                                    <Route path="/Generate" exact render={(props) => !wallet ? <Redirect to="/login" /> : <Generate {...props} />} />

                                    <Route path="/error" exact render={(props) => <ErrorPage {...props} />} />
                                    <Route path="/errorSomething" exact render={(props) => <SomeThingErrorPage {...props} />} />
                                    <Redirect to="/login" />
                                </Switch>
                            </>
                            : <>
                                <Header/>
                                <Switch>
                                    <Route path="/" exact render={(props) => <Home {...props} />} />
                                    <Route path="/login" exact render={(props) => <Login {...props} />} />
                                    <Route path="/walletInfo" exact render={(props) => wallet ? <WalletInfo {...props} /> : <Redirect to="/login" />} />
                                    <Route path="/generateUpdate" exact render={(props) => wallet ? <GenerateUpdate {...props} /> : <Redirect to="/login" />} />
                                    <Route path="/generateSale" exact render={(props) => wallet ? <GenerateSale {...props} /> : <Redirect to="/login" />} />
                                    <Route path="/saleUpdate" exact render={(props) => wallet ? <SaleUpdate {...props} /> : <Redirect to="/login" />} />
                                    <Route path="/buySale" exact render={(props) => wallet ? <BuySale {...props} /> : <Redirect to="/login" />} />
                                    <Route path="/buylist" exact render={(props) => wallet ? <Buylist {...props} /> : <Redirect to="/login" />} />
                                    <Route path="/buylistDetail" exact render={(props) => wallet ? <BuylistDetail {...props} /> : <Redirect to="/login" />} />
                                    <Route path="/NFTGenerate" exact render={(props) => wallet ? <NFTGenerate {...props} /> : <Redirect to="/login" />} />
                                    <Route path="/error" exact render={(props) => <ErrorPage {...props} />} />
                                    <Route path="/errorSomething" exact render={(props) => <SomeThingErrorPage {...props} />} />
                                    <Redirect to="/login" />
                                </Switch>
                                <Footer/>
                            </>
                        }
                        </ErrorBoundary>
                        
                    </Router>
                </AppContext.Provider>
            </div>
    );
}

export default App;


