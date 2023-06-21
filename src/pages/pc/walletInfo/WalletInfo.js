import React, { Component } from "react";
import "../../../assets/css/layout.css";
import "../../../assets/css/pages/walletInfo.css";
import Table from "../../../components/Table/Table";
import UserInfo from "../../../components/pc/userinfo";
import NFTMintUpdateDetail from "./modal/NFTMintUpdateDetail";
import NFTSaleUpdateDetail from "./modal/NFTSaleUpdateDetail";
import NFTBuyUpdateDetail from "./modal/NFTBuyUpdateDetail";
import NFTHistoryDetail from "./modal/NFTHistoryDetail";
import { AppContext } from "../../../AppContext";
import { getNFTsWithAccount } from "../../../services/serverHook";
import ReactLoading from 'react-loading';
import { title } from "../../../services/title";

class WalletInfo extends Component {
    static contextType = AppContext;
    constructor(props) {
        super(props);

        this.state = {
            tableData0Header : [
                { name : `${title.content}`, field : 'content', sortable : false },
                { name : `${title.category}`, field : 'category', sortable : false },
                { name : `${title.NFTID}`, field : 'id', sortable : false },
                { name : `${title.NFTName}`, field : 'NFTName', sortable : true },
                { name : `${title.MintTime}`, field : 'generate_time', sortable : true },
                { name : `${title.MintStatus}`, field : 'state', sortable : false },
                { name : `${title.Edit}`, field : 'update_button', sortable : false },
                { name : `${title.Sale}`, field : 'sale_button',sortable : false },
            ],
            tableData : [
                { content : 'image/image7.png', content_modal: 'NFTGenerateDetail', category : 'Image', id : '1116548', NFTName : 'abc', generate_time : '2023.01.01. 12:00:00', state : 'Minting',update_button : 'generateUpdate',sale_button : 'generateSale'},
                { content : 'image/image7.png', content_modal: 'NFTGenerateDetail', category : 'Image', id : '1116549', NFTName : 'Frog', generate_time : '2023.01.01. 12:00:00', state : 'Mint Completion',update_button : 'generateUpdate',sale_button : 'generateSale'},
                { content : 'image/image7.png', content_modal: 'NFTGenerateDetail', category : 'Image', id : '1116550', NFTName : 'bipawo', generate_time : '2023.01.01. 12:00:00', state : 'Mint Completion',update_button : 'generateUpdate',sale_button : 'generateSale'},
                { content : 'image/image7.png', content_modal: 'NFTGenerateDetail', category : 'Image', id : '1116551', NFTName : 'abc1', generate_time : '2023.01.01. 12:00:00', state : 'Mint Completion',update_button : 'generateUpdate',sale_button : 'generateSale'},
                { content : 'image/image7.png', content_modal: 'NFTGenerateDetail', category : 'Image', id : '1116552', NFTName : 'Frog1', generate_time : '2023.01.01. 12:00:00', state : 'Mint Completion',update_button : 'generateUpdate',sale_button : 'generateSale'},
                { content : 'image/image7.png', content_modal: 'NFTGenerateDetail', category : 'Image', id : '1116553', NFTName : 'bipawo1', generate_time : '2023.01.01. 12:00:00', state : 'Mint Completion',update_button : 'generateUpdate',sale_button : 'generateSale'},
            ],
            tableData1Header : [
                { name : `${title.content}`, field : 'content', sortable : false },
                { name : `${title.category}`, field : 'category', sortable : false },
                { name : `${title.NFTID}`, field : 'id', sortable : false },
                { name : `${title.NFTName}`, field : 'NFTName', sortable : true },
                { name : `${title.RegisterationTime}`, field : 'createTime', sortable : true },
                { name : `${title.SalePrice}`, field : 'price', sortable : true },
                { name : `${title.Edit}`, field : 'update_button', sortable : false},
            ],
            tableData1 : [
                { content : 'image/image7.png', content_modal : 'NFTSaleUpdateDetail', category : 'Image', id : '1116548', NFTName : 'abc', createTime : '2023.01.01. 12:00:00', price : '0.24557198 ETH',update_button : 'saleUpdate'},
                { content : 'image/image7.png', content_modal : 'NFTSaleUpdateDetail', category : 'Image', id : '1116548', NFTName : 'abc', createTime : '2023.01.01. 12:00:00', price : '0.24557198 ETH',update_button : 'saleUpdate'},
                { content : 'image/image7.png', content_modal : 'NFTSaleUpdateDetail', category : 'Image', id : '1116548', NFTName : 'abc', createTime : '2023.01.01. 12:00:00', price : '0.24557198 ETH',update_button : 'saleUpdate'},
                { content : 'image/image7.png', content_modal : 'NFTSaleUpdateDetail', category : 'Image', id : '1116548', NFTName : 'abc', createTime : '2023.01.01. 12:00:00', price : '0.24557198 ETH',update_button : 'saleUpdate'},
                { content : 'image/image7.png', content_modal : 'NFTSaleUpdateDetail', category : 'Image', id : '1116548', NFTName : 'abc', createTime : '2023.01.01. 12:00:00', price : '0.24557198 ETH',update_button : 'saleUpdate'},
                { content : 'image/image7.png', content_modal : 'NFTSaleUpdateDetail', category : 'Image', id : '1116548', NFTName : 'abc', createTime : '2023.01.01. 12:00:00', price : '0.24557198 ETH',update_button : 'saleUpdate'},
                { content : 'image/image7.png', content_modal : 'NFTSaleUpdateDetail', category : 'Image', id : '1116548', NFTName : 'abc', createTime : '2023.01.01. 12:00:00', price : '0.24557198 ETH',update_button : 'saleUpdate'},
            ],
            tableData2Header : [
                { name : `${title.content}`, field : 'content', sortable : false },
                { name : `${title.category}`, field : 'category', sortable : true },
                { name : `${title.NFTID}`, field : 'id', sortable : false },
                { name : `${title.NFTName}`, field : 'NFTName', sortable : true },
                { name : `${title.RegisterationTime}`, field : 'createTime', sortable : true },
                { name : `${title.BuyPrice}`, field : 'price', sortable : true },
                { name : `${title.BuyCompletionTime}`, field : 'completeTime', sortable : true },
                { name : `${title.Sale}`, field : 'sale_button', sortable : false },
            ],
            tableData2 : [
                { content : 'image/image7.png', content_modal : 'NFTBuyUpdateDetail',category : 'Image', id : '1116548', NFTName : 'abc', createTime : '2023.01.01. 12:00:00', price : '0.24557198 ETH', completeTime: '2023.01.01. 12:00:00',sale_button : 'buySale'},
                { content : 'image/image7.png', content_modal : 'NFTBuyUpdateDetail',category : 'Image', id : '1116548', NFTName : 'abc', createTime : '2023.01.01. 12:00:00', price : '0.24557198 ETH', completeTime: '2023.01.01. 12:00:00',sale_button : 'buySale'},
                { content : 'image/image7.png', content_modal : 'NFTBuyUpdateDetail',category : 'Image', id : '1116548', NFTName : 'abc', createTime : '2023.01.01. 12:00:00', price : '0.24557198 ETH', completeTime: '2023.01.01. 12:00:00',sale_button : 'buySale'},
                { content : 'image/image7.png', content_modal : 'NFTBuyUpdateDetail',category : 'Image', id : '1116548', NFTName : 'abc', createTime : '2023.01.01. 12:00:00', price : '0.24557198 ETH', completeTime: '2023.01.01. 12:00:00',sale_button : 'buySale'},
                { content : 'image/image7.png', content_modal : 'NFTBuyUpdateDetail',category : 'Image', id : '1116548', NFTName : 'abc', createTime : '2023.01.01. 12:00:00', price : '0.24557198 ETH', completeTime: '2023.01.01. 12:00:00',sale_button : 'buySale'},
                { content : 'image/image7.png', content_modal : 'NFTBuyUpdateDetail',category : 'Image', id : '1116548', NFTName : 'abc', createTime : '2023.01.01. 12:00:00', price : '0.24557198 ETH', completeTime: '2023.01.01. 12:00:00',sale_button : 'buySale'},
                { content : 'image/image7.png', content_modal : 'NFTBuyUpdateDetail',category : 'Image', id : '1116548', NFTName : 'abc', createTime : '2023.01.01. 12:00:00', price : '0.24557198 ETH', completeTime: '2023.01.01. 12:00:00',sale_button : 'buySale'},
            ],
            tableData3Header : [
                { name : `${title.TxID}`, field : 'TxID', sortable : false },
                { name : `${title.content}`, field : 'content', sortable : false },
                { name : `${title.category}`, field : 'category', sortable : true },
                { name : `${title.NFTName}`, field : 'NFTName', sortable : false },
                { name : `${title.NFTID}`, field : 'id', sortable : false },
                { name : `${title.Type}`, field : 'type', sortable : true },
                { name : `${title.PriceTrading}`, field : 'price', sortable : true },
                { name : `${title.completeTime}`, field : 'completeTime', sortable : true },
                { name : `${title.View}`, field : 'view_button', sortable : false },
            ],
            tableData3 : [
                { TxID : '0x32fs5dfds2234j234...',content : 'image/image7.png',content_modal : 'NFTHistoryDetail', category : 'Image', id : '1116548', NFTName : 'abc', type : 'buy', price : '0.24557198 ETH', completeTime: '2023.01.01. 12:00:00'},
                { TxID : '0x32fs5dfds2234j234...',content : 'image/image7.png',content_modal : 'NFTHistoryDetail', category : 'Video', id : '1116548', NFTName : 'Frog', type : 'sale', price : '0.24557198 ETH', completeTime: '2023.01.01. 12:00:00'},
                { TxID : '0x32fs5dfds2234j234...',content : 'image/image7.png',content_modal : 'NFTHistoryDetail', category : 'Image', id : '1116548', NFTName : 'bipawo', type : 'create', price : '0.24557198 ETH', completeTime: '2023.01.01. 12:00:00'},
                { TxID : '0x32fs5dfds2234j234...',content : 'image/image7.png',content_modal : 'NFTHistoryDetail', category : 'Image', id : '1116548', NFTName : 'CS', type : 'buy', price : '0.24557198 ETH', completeTime: '2023.01.01. 12:00:00'},
                { TxID : '0x32fs5dfds2234j234...',content : 'image/image7.png',content_modal : 'NFTHistoryDetail', category : 'Video', id : '1116548', NFTName : 'Frog', type : 'sale', price : '0.24557198 ETH', completeTime: '2023.01.01. 12:00:00'},
                { TxID : '0x32fs5dfds2234j234...',content : 'image/image7.png',content_modal : 'NFTHistoryDetail', category : 'Video', id : '1116548', NFTName : 'Frog', type : 'sale', price : '0.24557198 ETH', completeTime: '2023.01.01. 12:00:00'},

            ],
            OtableData : [],
            OtableData1 : [],
            OtableData2 : [],
            OtableData3 : [],
            currentPane : 'generateList',
            currentViewMethod : 'All',
            num : 5,
            loading : true,
            currentSelectedRowForModal : null
        }
    }
    componentDidMount() {
        document.title = title.WalletInfotitle;
        const { wallet, connectedWalletType, loginDate } = this.context;
        this.getAllNFTsData(wallet, connectedWalletType);  
    }

    getAllNFTsData(wallet, connectedWalletType) {
        getNFTsWithAccount(wallet, connectedWalletType).then(({nftData, historyData}) => {      
            let mintData = [], saleData = [], buyData = [], historyListData = [];
            nftData.map(({ createdAt, updatedAt, description, mediaIpfs, mediaType, name, tokenID, mintStatus, id, category, mintedWalletAddress, salePrice, mintedWalletType }) => {
                if(mintStatus === "minted") {
                    mintData.push({
                        content : `https://ipfs.io/ipfs/${mediaIpfs}`,
                        content_modal : 'NFTGenerateDetail',
                        category : mediaType,
                        id : tokenID,
                        NFTName : name,
                        generate_time : new Date(createdAt).getFullYear() + "." + new Date(createdAt).getMonth() + "." + new Date(createdAt).getDate() + " " + new Date(createdAt).getHours() + ":" + new Date(createdAt).getMinutes() + ":" + new Date(createdAt).getSeconds(),
                        state : mintStatus,
                        update_button : 'generateUpdate',
                        sale_button : 'generateSale',
                        dbID : id,
                        categoryOfMintpage : category,
                        description,
                        mintedWalletAddress,
                        mintStatus,
                        mintedWalletType
                    })
                } 
                if(mintStatus === "forsale") {
                    saleData.push({
                        content : `https://ipfs.io/ipfs/${mediaIpfs}`,
                        content_modal : 'NFTSaleUpdateDetail',
                        category : mediaType,
                        id : tokenID,
                        NFTName : name,
                        createTime : new Date(updatedAt).getFullYear() + "." + new Date(updatedAt).getMonth() + "." + new Date(updatedAt).getDate() + " " + new Date(updatedAt).getHours() + ":" + new Date(updatedAt).getMinutes() + ":" + new Date(updatedAt).getSeconds(),
                        state : mintStatus,
                        price : salePrice,
                        update_button : 'saleUpdate',
                        sale_button : 'generateSale',
                        dbID : id,
                        categoryOfMintpage : category,
                        description,
                        mintedWalletAddress,
                        mintStatus,
                        mintedWalletType
                    })
                } 
                if(mintStatus === "bought") {
                    buyData.push({
                        content : `https://ipfs.io/ipfs/${mediaIpfs}`,
                        content_modal : 'NFTBuyUpdateDetail',
                        category : mediaType,
                        id : tokenID,
                        NFTName : name,
                        createTime : new Date(createdAt).getFullYear() + "." + new Date(createdAt).getMonth() + "." + new Date(createdAt).getDate() + " " + new Date(createdAt).getHours() + ":" + new Date(createdAt).getMinutes() + ":" + new Date(createdAt).getSeconds(),
                        state : mintStatus,
                        price : salePrice,
                        completeTime : new Date(updatedAt).getFullYear() + "." + new Date(updatedAt).getMonth() + "." + new Date(updatedAt).getDate() + " " + new Date(updatedAt).getHours() + ":" + new Date(updatedAt).getMinutes() + ":" + new Date(updatedAt).getSeconds(),
                        sale_button : 'buySale',
                        dbID : id,
                        categoryOfMintpage : category,
                        description,
                        mintedWalletAddress,
                        mintStatus,
                        mintedWalletType
                    })
                } 
            })
            historyData.map(({ createdAt, description, mediaIpfs, mediaType, name, tokenID, status, id, category, TxID, nftID, PriceTrading, walletType }) => {
                historyListData.push({
                    content : `https://ipfs.io/ipfs/${mediaIpfs}`,
                    content_modal : 'NFTHistoryDetail',
                    category : mediaType,
                    id : nftID,
                    NFTName : name,
                    completeTime : new Date(createdAt).getFullYear() + "." + new Date(createdAt).getMonth() + "." + new Date(createdAt).getDate() + " " + new Date(createdAt).getHours() + ":" + new Date(createdAt).getMinutes() + ":" + new Date(createdAt).getSeconds(),
                    type : status,
                    dbID : id,
                    price : PriceTrading,
                    categoryOfMintpage : category,
                    description,
                    TxID,
                    walletType
                })
            })
            this.setState({ 
                tableData : mintData,
                OtableData : mintData,
                tableData1 : saleData,
                OtableData1 : saleData,
                tableData2 : buyData,
                OtableData2 : buyData,
                tableData3 : historyListData,
                OtableData3 : historyListData,
                loading: false
            })
        })
    }

    onclickTab(params) {
        this.setState({currentPane : params});
        document.getElementById('search').value = '';
        this.onSearch();
    }

    onChageViewMethod(params) {
        this.setState({currentViewMethod : params});
        this.onSearch(params);
    }


    onSearch(type) {
        if (this.state.currentPane === 'generateList') {
            this.renderSearch(this.state.OtableData, type)
        } else if (this.state.currentPane === 'NFTSaleList') {
            this.renderSearch(this.state.OtableData1, type)
        } else if (this.state.currentPane === 'NFTBuyList') {
            this.renderSearch(this.state.OtableData2, type)
        } else if (this.state.currentPane === 'NFTHistory') {
            this.renderSearch(this.state.OtableData3, type)
        }
    }

    renderSearch(data, type) {
        let value = document.getElementById('search').value;
        // if (value === '') {
        //     this.setState({tableData : this.state.OtableData});
        //     this.setState({tableData1 : this.state.OtableData1});
        //     this.setState({tableData2 : this.state.OtableData2});
        //     this.setState({tableData3 : this.state.OtableData3});
        //     return;
        // }
        let currentViewMethod = type ? type : this.state.currentViewMethod;
        let tableDatas = [];
        data.map((item,index) => {
            if(currentViewMethod !== 'All') {
                if(item.category === currentViewMethod) {
                    if (item.NFTName.indexOf(value) !== -1 || item.id.toString().indexOf(value) !== -1) {
                        tableDatas.push(item);
                    }
                }
            } else {
                if (item.NFTName.indexOf(value) !== -1 || item.id.toString().indexOf(value) !== -1) {
                    tableDatas.push(item);
                }
            }
        });
        if (this.state.currentPane === 'generateList') {
            this.setState({tableData : tableDatas});
        } else if (this.state.currentPane === 'NFTSaleList') {
            this.setState({tableData1 : tableDatas});
        } else if (this.state.currentPane === 'NFTBuyList') {
            this.setState({tableData2 : tableDatas});
        } else if (this.state.currentPane === 'NFTHistory') {
            this.setState({tableData3 : tableDatas});
        }
    }

    render() {
        const { wallet, connectedWalletType, loginDate, walletBalance } = this.context;
        const ButtonGroup = () => {
            return(
                <div className="d-flex mb-1">
                    <button className={this.state.currentViewMethod === 'All' ? 'btn btn-add btn-add-active mr-2' : 'btn btn-add mr-2'} onClick={this.onChageViewMethod.bind(this,'All')}>{title.All}</button>
                    <button className={this.state.currentViewMethod === 'Image' ? 'btn btn-add btn-add-active mr-2' : 'btn btn-add mr-2'} onClick={this.onChageViewMethod.bind(this,'Image')}>{title.Image}</button>
                    <button className={this.state.currentViewMethod === 'Video' ? 'btn btn-add btn-add-active mr-2' : 'btn btn-add mr-2'} onClick={this.onChageViewMethod.bind(this,'Video')}>{title.Video}</button>
                </div>
            )
        };
        return (
            <div className="w-100" style={{minHeight : '800px'}}>
                <UserInfo wallet={wallet} connectedWalletType={connectedWalletType} loginDate={loginDate} balance={walletBalance}/>
                {
                    this.state.loading ? <ReactLoading className="m-auto loadingBar" type={"bubbles"} color={"#9ee5f8"} height={100} width={150} />
                    :   <div className="d-flex justify-content-center pt-5 pb-5">
                            <div className="wallet-info-pane">
                                <ul className="nav nav-tabs justify-content-between">
                                    <div className="d-flex">
                                        <p>{this.state.loading}</p>
                                        <li className={this.state.currentPane === 'generateList' ? 'nav-tabs-pane nav-tabs_active cursor-pointer' : 'nav-tabs-pane cursor-pointer'} onClick={this.onclickTab.bind(this, 'generateList')}><a className="tab-panel" data-toggle="tab">{title.NFTMintList}</a></li>
                                        <li className={this.state.currentPane === 'NFTSaleList' ? 'nav-tabs-pane nav-tabs_active cursor-pointer' : 'nav-tabs-pane cursor-pointer'} onClick={this.onclickTab.bind(this, 'NFTSaleList')}><a className="tab-panel " data-toggle="tab">{title.NFTSalesList}</a></li>
                                        <li className={this.state.currentPane === 'NFTBuyList' ? 'nav-tabs-pane nav-tabs_active cursor-pointer' : 'nav-tabs-pane cursor-pointer'} onClick={this.onclickTab.bind(this, 'NFTBuyList')}><a className="tab-panel " data-toggle="tab">{title.NFTBuyCompletion}</a></li>
                                        <li className={this.state.currentPane === 'NFTHistory' ? 'nav-tabs-pane nav-tabs_active cursor-pointer' : 'nav-tabs-pane cursor-pointer'} onClick={this.onclickTab.bind(this, 'NFTHistory')}><a className="tab-panel " data-toggle="tab">{this.NFTHistory}</a></li>
                                    </div>
                                    <div className="d-flex align-items-center mb-1">
                                        <i className="fa fa-search search-input-header"></i>
                                        <input type="text" className="form-control form-control-sm search-input-body font-bold" id="search" placeholder={title.NFTIDORNameSearch} onChange={this.onSearch.bind(this, false)}/>
                                    </div>
                            </ul>
                                <div className="tab-content pt-4">
                                    <div id="home" className="tab-pane active">
                                        <ButtonGroup/>
                                        <div className="table-responsive">
                                            {
                                                this.state.currentPane === 'generateList' ?
                                                    <Table data={this.state.tableData} num={this.state.num} header={this.state.tableData0Header} setInfoInModal={(info) => this.setState({
                                                        currentSelectedRowForModal : info
                                                    })} />
                                                    :
                                                this.state.currentPane === 'NFTSaleList' ?
                                                    <Table data={this.state.tableData1} num={this.state.num} header={this.state.tableData1Header} setInfoInModal={(info) => this.setState({
                                                        currentSelectedRowForModal : info
                                                    })} />
                                                    :
                                                this.state.currentPane === 'NFTBuyList' ?
                                                    <Table data={this.state.tableData2} num={this.state.num} header={this.state.tableData2Header} setInfoInModal={(info) => this.setState({
                                                        currentSelectedRowForModal : info
                                                    })} />
                                                    :
                                                    <Table data={this.state.tableData3} num={this.state.num} header={this.state.tableData3Header} setInfoInModal={(info) => this.setState({
                                                        currentSelectedRowForModal : info
                                                    })} />

                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                }   
                
                <NFTMintUpdateDetail Info={this.state.currentSelectedRowForModal} />
                <NFTSaleUpdateDetail Info={this.state.currentSelectedRowForModal} getRefreshData={(wallet, walletType) => this.getAllNFTsData(wallet, walletType)}/>
                <NFTBuyUpdateDetail Info={this.state.currentSelectedRowForModal} getRefreshData={(wallet, walletType) => this.getAllNFTsData(wallet, walletType)}/>
                <NFTHistoryDetail Info={this.state.currentSelectedRowForModal}/>
            </div>
        );
    }
}

export default WalletInfo
