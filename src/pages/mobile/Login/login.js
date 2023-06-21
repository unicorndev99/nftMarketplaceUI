import React, { useContext } from "react";
import { useHistory } from "react-router-dom"
import "../../../assets/css/pages/login.css";
import "../../../assets/css/pages/mobile/login.css";
import { AppContext } from "../../../AppContext"
import { getWalletBalance } from "../../../services/contract";
import { title } from "../../../services/title";

const Login = () => {
    const { loginDate, setLoginDate, wallet, setWalletAddress, connectedWalletType, setConnectedWalletType, setWalletBalance } = useContext(AppContext);
    const history = useHistory()

    const connectWallet = async (walletType) => {
        if(walletType === "metamask") {
            if(!(window.ethereum && window.ethereum.isMetaMask)) {
                window.open('https://metamask.io/download/', '_blank')
            } else {
                const accounts = await window.ethereum.request({          
                    method: "eth_requestAccounts",        
                });
                const balance = await getWalletBalance(accounts[0], walletType)
                setConnectedWalletType(walletType)
                setWalletAddress(accounts[0])
                setWalletBalance(balance);
                setLoginDate(Date.now())
                history.push("/NFTGenerateList")
            }
        } else if(walletType === "kaikas") {
            if(!(window.klaytn && window.klaytn.isKaikas)) {
                window.open('https://chrome.google.com/webstore/detail/kaikas/jblndlipeogpafnldhgmapagcccfchpi?hl=en', '_blank')
            } else {
                if (typeof window.klaytn !== 'undefined') {
                    const accounts = await window.klaytn.enable();
                    const balance = await getWalletBalance(accounts[0], walletType)
                    setConnectedWalletType(walletType)
                    setWalletAddress(accounts[0])
                    setWalletBalance(balance);
                    setLoginDate(Date.now())
                    history.push("/NFTGenerateList")
                }  
            }
        }
    }
    
    return (
        <div className="container-custom main-container pt-5">
            <div className="login pl-0 pr-0 border_none box-shadow-none">
                <h4 className="text-center font-weight-bold mb-3" style={{fontSize : '21px'}}>{title.Login}</h4>
                <p className="text-center mb-3" style={{fontSize : '13px'}}>{title.PleaseSelectOneWallet}</p>
                <div style={{display : 'grid'}}>
                    <div className="d-flex justify-center mb-2">
                        <button className="btn mobile_login_btn login_btn_one mb-2 d-flex align-items-center" onClick={() => connectWallet("kaikas")} disabled={(window.klaytn && window.klaytn.isKaikas) ? false : true}>
                            <img src="./image/kailogo.png" className="mobile_login_logo" alt="" />
                            <p className="m-0">{title.Loginbykaikas}</p>
                        </button>
                    </div>
                    <div className="d-flex justify-center">
                        <button className="btn mobile_login_btn login_btn_two d-flex align-items-center" onClick={() => connectWallet("metamask")} disabled={(window.ethereum && window.ethereum.isMetaMask) ? false : true}>
                            <div style={{backgroundColor : 'white',borderRadius : '5px',padding : '2px'}} className="d-flex justify-content-center mobile_login_logo">
                                <img src="./image/metalogo.png" className="mr-0" alt="" />
                            </div>
                            <p className="m-0">{title.Loginbymetamask}</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
