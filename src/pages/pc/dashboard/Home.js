import React, { Component } from "react";
import BoxTable from "../../../components/BoxTable/BoxTable";
import "../../../assets/css/pages/buylist.css";
import SearchBox from "../../../components/layout_pc/searchBox";
import Watermark from '@uiw/react-watermark';
import { getSaleNFTs } from "../../../services/serverHook";
import { AppContext } from "../../../AppContext";
import { title } from "../../../services/title";

class Home extends Component {
    static contextType = AppContext;
    constructor(props) {
        super(props);

        this.state = {
            tableData : [
            ],
            datableDataHeader : [
                { name : `${title.NFTName}`, field : 'name', sortable : true },
                { name : `${title.TradingPrice}`, field : 'price', sortable : true },
                { name : `${title.RegisterSalesTime}`, field : 'date', sortable : true },
            ],
            ImageTableData : [],
            VideoTableData : [],
            OImageTableData : [],
            OVideoTableData : [],
            OtableData : [],
            isAuthenticated : false,
            viewMethods : 'All'
        }
        this.onFilterByName = this.onFilterByName.bind(this)
    }
    componentDidMount() {
        document.title = title.NFTBuyTitle;
        getSaleNFTs(this.state.viewMethods).then(data => {
            let imageData = [], videoData = [];
            const saleData = data.map((nftData) => {
                const { createdAt, updatedAt, description, mediaIpfs, mediaType, name, tokenID, mintStatus, id, category, mintedWalletAddress, salePrice, mintedWalletType } = nftData

                if(nftData.mediaType === "Image") {
                    imageData.push({
                        image :  `https://ipfs.io/ipfs/${mediaIpfs}`,
                        mediaType,
                        name,
                        price: salePrice.toString(),
                        date : new Date(updatedAt).getFullYear() + "." + new Date(updatedAt).getMonth() + "." + new Date(updatedAt).getDate(),

                        content : `https://ipfs.io/ipfs/${mediaIpfs}`,
                        content_modal : 'NFTSaleUpdateDetail',
                        category : mediaType,
                        id : tokenID,
                        NFTName : name,
                        createTime : new Date(updatedAt).getFullYear() + "." + new Date(updatedAt).getMonth() + "." + new Date(updatedAt).getDate() + " " + new Date(updatedAt).getHours() + ":" + new Date(updatedAt).getMinutes() + ":" + new Date(updatedAt).getSeconds(),
                        state : mintStatus,
                        update_button : 'saleUpdate',
                        sale_button : 'generateSale',
                        dbID : id,
                        categoryOfMintpage : category,
                        description,
                        mintedWalletAddress,
                        mintStatus,
                        mintedWalletType
                    })
                } else if(nftData.mediaType === "Video") {
                    videoData.push({
                        image :  `https://ipfs.io/ipfs/${mediaIpfs}`,
                        mediaType,
                        name,
                        price: salePrice.toString(),
                        date : new Date(updatedAt).getFullYear() + "." + new Date(updatedAt).getMonth() + "." + new Date(updatedAt).getDate(),

                        content : `https://ipfs.io/ipfs/${mediaIpfs}`,
                        content_modal : 'NFTSaleUpdateDetail',
                        category : mediaType,
                        id : tokenID,
                        NFTName : name,
                        createTime : new Date(updatedAt).getFullYear() + "." + new Date(updatedAt).getMonth() + "." + new Date(updatedAt).getDate() + " " + new Date(updatedAt).getHours() + ":" + new Date(updatedAt).getMinutes() + ":" + new Date(updatedAt).getSeconds(),
                        state : mintStatus,
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
            })
            this.setState({
                tableData : [...imageData, ...videoData],
                ImageTableData : imageData,
                VideoTableData : videoData,
                OtableData : [...imageData, ...videoData],
                OImageTableData : imageData,
                OVideoTableData : videoData
            })
        })
    }

    onChangeViewMethod(data) {
        this.setState({viewMethods : data});
    }

    onLogin() {
        this.props.history.push("/login");
    }

    componentWillUnmount(){
        //Put your Code in here
        const { setGlobalSearch } = this.context;
        setGlobalSearch("")
    }

    onFilterByName(value){
        let filteredImage = this.state.OImageTableData.filter((item, index) => item.NFTName.indexOf(value) !== -1)
        let filteredVideo = this.state.OVideoTableData.filter((item, index) => item.NFTName.indexOf(value) !== -1)
        this.setState({
            tableData : [...filteredImage, ...filteredVideo],
            ImageTableData : filteredImage,
            VideoTableData : filteredVideo,
        })
    }

    render() {
        const { wallet, connectedWalletType, globalSearch } = this.context;
        let islogged = (wallet && connectedWalletType) ? true : false
        return (
            <Watermark
            content={['NFT','', '', '', '','', 'MarketPlace']}
            rotate={0}
            gapX={1600}
            width={1600}
            gapY={1500}
            height={900}
            fontSize={320}
            offsetTop={1050}
            offsetLeft={100}
            >
                <SearchBox onSearchName={this.onFilterByName}/>
                <div className="d-flex justify-content-center pt-20 pb-8">
                    <div className="d-flex justify-content-around" style={{width : "650px"}}>
                        <p className={ this.state.viewMethods !== 'All' ? 'dashboard-title' : 'dashboard-title dashboard-title-active'} onClick={this.onChangeViewMethod.bind(this,'All')}>{title.All}</p>
                        <p className={ this.state.viewMethods !== 'Image' ? 'dashboard-title' : 'dashboard-title dashboard-title-active'} onClick={this.onChangeViewMethod.bind(this,'Image')}>{title.Image}</p>
                        <p className={ this.state.viewMethods !== 'Video' ? 'dashboard-title' : 'dashboard-title dashboard-title-active'} onClick={this.onChangeViewMethod.bind(this,'Video')}>{title.Video}</p>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <div className="NftCard-pane">
                        <BoxTable header={this.state.datableDataHeader} num={100000} data={this.state.viewMethods === "All" ? this.state.tableData :  this.state.viewMethods === "Video" ? this.state.VideoTableData : this.state.ImageTableData } state={islogged} search={globalSearch}/>
                    </div>
                </div>
                <div className="modal fade" id="LoginConfirm" role="dialog">
                    <div className="modal-dialog modal-dialog-centered" style={{width : '400px'}}>
                        <div className="modal-content p-3 pb-4 pl-5 pr-5 pt-4 modal_backgroundColor">
                            <div className="d-flex justify-content-center mt-2">
                                <i className="fa fa-exclamation mainicon"></i>
                            </div>
                            <p className="text-white text-center mt-3" style={{fontSize : '18px'}}>{title.Loginisnecessary}</p>
                            <button className="btn buyButton mt-4" onClick={this.onLogin.bind(this)}  data-dismiss="modal">{title.Login}</button>
                        </div>
                    </div>
                </div>
            </Watermark>

        );
    }
}

export default Home
