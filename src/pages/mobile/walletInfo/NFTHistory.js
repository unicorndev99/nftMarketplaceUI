import React, { Component } from "react";
import {Link} from "react-router-dom";
import UserInfo from "../../../components/mobile/userinfo";
import "../../../assets/css/pages/mobile/publishList.css"
import Table from "../../../components/mobile/mobile_table";
import STable from "../../../components/mobile/mobile_standard_table";
import { AppContext } from "../../../AppContext";
import { getNFTsWithAccount } from "../../../services/serverHook";
import ReactLoading from 'react-loading';
import { title } from "../../../services/title";

class NFTHistory extends Component {
    static contextType = AppContext;
    constructor(props) {
        super(props);
        this.state = {
            datableDataHeader : [
                { name : `${title.TxID}`, field : 'TxID', sortable : false, width: '180px' },
                { name : `${title.content}`, field : 'content', sortable : false, width: '120px' },
                { name : `${title.category}`, field : 'category', sortable : false, width: '120px' },
                { name : `${title.NFTName}`, field : 'NFTName', sortable : false, width: '120px'},
                { name : `${title.NFTID}`, field : 'id', sortable : false, width: '120px' },
                { name : `${title.Type}`, field : 'type', sortable : true, width: '80px' },
                { name : `${title.TradingPrice}`, field : 'price', sortable : true, width: '150px' },
                { name : `${title.TradingCompletionTime}`, field : 'end_time', sortable : true, width: '180px' },
                { name : `${title.View}`, field : 'update_button',sortable : false, width: '80px' },
            ],
            tableData : [],
            OtableData : undefined,
            viewMethods : 'all',
            num : 5,
            currentViewMethod : 'All',
            loading : true
        }
    }

    componentDidMount() {
        const { wallet, connectedWalletType, loginDate } = this.context;
        getNFTsWithAccount(wallet, connectedWalletType).then(({historyData}) => {      
            let historyListData = [];
            historyData.map(({ createdAt, description, mediaIpfs, mediaType, name, tokenID, status, id, category, TxID, nftID, PriceTrading, walletType }) => {
                historyListData.push({
                    content : `https://ipfs.io/ipfs/${mediaIpfs}`,
                    content_modal : 'NFTHistoryDetail',
                    update_button : 'NFTHistoryDetail',
                    category : mediaType,
                    id : nftID,
                    NFTName : name,
                    end_time : new Date(createdAt).getFullYear() + "." + new Date(createdAt).getMonth() + "." + new Date(createdAt).getDate() + " " + new Date(createdAt).getHours() + ":" + new Date(createdAt).getMinutes() + ":" + new Date(createdAt).getSeconds(),
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
                tableData : historyListData,
                OtableData : historyListData,
                loading: false
            })
        })
    }

    onSearch(type) {
        let value = document.getElementById('search').value;
        let currentViewMethod = type ? type : this.state.currentViewMethod;
        let tableDatas = [];
        this.state.OtableData.map((item,index) => {
            if(currentViewMethod !== 'All') {
                if(item.category === currentViewMethod) {
                    if (item.NFTName.indexOf(value) !== -1 || item.id.toString().indexOf(value) !== -1 || item.TxID.toString().indexOf(value) || item.Type.indexOf(value)) {
                        tableDatas.push(item);
                    }
                }
            } else {
                if (item.NFTName.indexOf(value) !== -1 || item.id.toString().indexOf(value) !== -1 || item.TxID.toString().indexOf(value) || item.Type.indexOf(value)) {
                    tableDatas.push(item);
                }
            }
        });
        this.setState({tableData : tableDatas});
    }
    onChangeViewMethod(data) {
        this.setState({viewMethods : data})
        this.onSearch(data);
    }
    render() {
        const { wallet, connectedWalletType, loginDate, walletBalance } = this.context;
        return (
            <div className="pl-1 pr-1 pt-2">
                <UserInfo wallet={wallet} connectedWalletType={connectedWalletType} loginDate={loginDate} balance={walletBalance}/>
                {
                    this.state.loading ? <ReactLoading className="m-auto loadingBar" type={"bubbles"} color={"#9ee5f8"} height={100} width={150} />
                    : <>
                        <p className="mobile-sub-title">
                            {title.NFTHistory}
                        </p>
                        <div className="d-flex justify-content-between mt-2 mb-2">
                            <button className={this.state.viewMethods !== 'All' ? 'viewButton' : 'viewButton viewButtonActive'} onClick={this.onChangeViewMethod.bind(this,'All')}>{title.All}</button>
                            <button className={this.state.viewMethods !== 'Image' ? 'viewButton' : 'viewButton viewButtonActive'} onClick={this.onChangeViewMethod.bind(this,'Image')}>{title.Image}</button>
                            <button className={this.state.viewMethods !== 'Video' ? 'viewButton' : 'viewButton viewButtonActive'} onClick={this.onChangeViewMethod.bind(this,'Video')}>{title.Video}</button>
                        </div>
                        <div className="d-flex pt-2 mb-2">
                            <i className="fa fa-search mobile-search-icon"></i>
                            <input type="text" id="search" className="form-control form-control-sm mobile-search w-100 text-center" placeholder={title.NFTIDORNameSearch}onChange={this.onSearch.bind(this, false)}/>
                        </div>
                        <div className="table-responsive mt-2 mobile_tab" style={{minHeight : '500px'}}>
                            <STable data={this.state.tableData} num={this.state.num} header={this.state.datableDataHeader}/>
                        </div>
                    </>
                }
            </div>
        );
    }
}

export default NFTHistory
