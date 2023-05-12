import React from "react";
import { title } from "../../services/title";

const UserInfo = ({ wallet, connectedWalletType, loginDate, balance}) => {
    const loginTime = new Date(loginDate)

    return (
        <div className="user-info-pane pt-4 pb-4">
            <div className="user-info-pane-body">
                <div className="d-flex align-items-center justify-content-end">
                    <div className="user-info-pane-left float-right d-flex align-items-center">
                        <div className="user-info-pane-left-logo">
                            <img src="image/user-info-logo.png" alt="" />
                        </div>
                        <div className="ml-4">
                            <div className="d-flex mb-1">
                                <p className="user-info-label-width">{title.RegisterDate}</p>
                                <p className="user-info-label-exp">{`${loginTime.getFullYear()}.${loginTime.getMonth()}.${loginTime.getDate()} ${loginTime.getHours()}:${loginTime.getMinutes()}:${loginTime.getSeconds()}`}</p>
                                {/* <p className="user-info-label-width">Login time</p>
                                <p className="user-info-label-exp">{`${loginTime.getFullYear()}.${loginTime.getMonth()}.${loginTime.getDate()} ${loginTime.getHours()}:${loginTime.getMinutes()}:${loginTime.getSeconds()}`}</p> */}
                            </div>
                            <div className="d-flex mb-1">
                                <p className="user-info-label-width">{title.Address}</p>
                                <p className="user-info-label-exp">{wallet}</p>
                            </div>
                            <div className="d-flex">
                                <p className="user-info-label-width">{title.Balance}</p>
                                <p className="user-info-label-exp">{balance}&nbsp;
                                {
                                    connectedWalletType === "kaikas" && "KLAY"
                                }
                                {
                                    connectedWalletType === "metamask" && "ETH"
                                }
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="./image/pages/walletInfo/x.png" className="mr-6 user-info-method-logo-cross ml-2" alt="x.png"/>
                {
                    connectedWalletType === 'kaikas' ?
                        <div className="d-flex align-items-center">
                            <img src="./image/pages/walletInfo/kaikas.png" className="ml-3 user-info-method-logo mr-3" alt="kaikas.png" />
                            <p className="user-info-method-title">{title.Kaikas}</p>
                        </div>
                        :
                        <div className="d-flex align-items-center">
                            <img src="./image/pages/walletInfo/meta.png" className="ml-3 user-info-method-logo mr-3" alt="kaikas.png" />
                            <p className="user-info-method-meta-title">{title.Metamask}</p>
                        </div>
                }
            </div>
        </div>
    );
}

export default UserInfo
