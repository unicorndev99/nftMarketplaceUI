import React, { useContext, useEffect } from "react";
import { useHistory  } from "react-router-dom"
import "../../../assets/css/pages/login.css"
import { AppContext } from "../../../AppContext";
import { getWalletBalance } from "../../../services/contract";
import { title } from "../../../services/title";

const Login = (props) => {
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
                history.push("/walletInfo")
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
                    history.push("/walletInfo")
                } 
            }
        }
    }
    useEffect(() => {
        document.title = title.loginTitle;
    }, []);
    
    return (
        <div className="container-custom main-container">
            <div className="login">
                <h4 className="text-center font-weight-bold mb-4" style={{fontSize : '32px'}}>{title.Login}</h4>
                <p className="text-center mb-lg-5">{title.Pleaseselectonemethodtologin}</p>
                <div style={{display : 'grid'}}>
                    <div className="d-flex justify-center">
                        <button className="btn login_btn login_btn_one mb-4 d-flex" data-toggle="modal" data-target="" onClick={() => connectWallet("kaikas")}>
                            <img src="./image/kailogo.png" className="login_logo" alt="" />
                            <p className="m-0">{title.Loginbykaikas}</p>
                        </button>
                    </div>
                    <div className="d-flex justify-center">
                        <button className="btn login_btn login_btn_two d-flex"  data-toggle="modal" data-target="" onClick={() => connectWallet("metamask")}>
                            <div style={{backgroundColor : 'white',borderRadius : '50%'}} className="d-flex justify-content-center p-1 login_logo">
                                <img src="./image/metalogo.png" className=" mr-0" alt="" />
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
