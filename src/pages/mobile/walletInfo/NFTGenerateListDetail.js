import React, { Component } from "react";
import {Link} from "react-router-dom";

import STable from "../../../components/mobile/mobile_standard_table";
import FullTable from "../../../components/mobile/mobile_full_table";
import { title } from "../../../services/title";

class NFTGenerateListDetail extends Component {
    constructor(props) {
        super(props);
        const nftInfo = props.location.nftInfo
        this.state = nftInfo
    }
    componentDidMount() {

    }

    render() {
        return (
            <div className="pt-4 pl-1 pr-1 mt-7">
                <div className="d-flex justify-content-around pb-3 mb-2 pl-3 pr-3 mt-3">
                    <Link to={{ pathname: "/NFTGenerateListUpdate", nftInfo: this.state}} className="btn btn-default btn-mobile-default modal_button_primary float-right">{title.Edit}</Link>
                    <Link to={{ pathname: "/NFTGenerateListSale", nftInfo: this.state}} className="btn btn-default btn-mobile-default modal_Link_primary float-right">{title.Sale}</Link>
                    <Link to={'/NFTGenerateList'} className="btn btn-default btn-mobile-default modal_button_close float-right">{title.Close}</Link>
                </div>
                <div className="d-flex justify-content-center pt-2 pb-2 mb-3">
                    <div className="mobile-NFTGenerate-detail-img">
                        {
                            this.state.category === "Image" && <img src={this.state.content}/>
                        }
                        {
                            this.state.category === "Video" && <video controls> 
                                <source type="video/mp4" src={this.state.content} /> 
                            </video>
                        }
                    </div>
                </div>
                <div className="mt-4 mb-4">
                    <div className="coloredTd w-100">
                        <div className="w-25 pl-0 pr-0 text-center">{title.category}</div>
                        <div className="w-25 pl-0 pr-0 text-center">{title.NFTID}</div>
                        <div className="w-15 pl-0 pr-0 text-center">{title.NFTName}</div>
                        <div className="w-35 pl-0 pr-0 text-center">{title.CreationDate}</div>
                    </div>
                    <div className="unColoredTd">
                        <div className="w-25 pl-0 pr-0 text-center">{this.state.category}</div>
                        <div className="w-25 pl-0 pr-0 text-center">{this.state.id}</div>
                        <div className="w-15 pl-0 pr-0 text-center">{this.state.NFTName}</div>
                        <div className="w-35 pl-0 pr-0 text-center">{this.state.generate_time}</div>
                    </div>
                    <div className="coloredTd w-100">
                        <div className="w-75 pl-0 pr-0 text-center">{title.OwnerAddress}</div>
                        <div className="w-25 pl-0 pr-0 text-center">{title.Status}</div>
                    </div>
                    <div className="unColoredTd w-100">
                        <div className="w-75 pl-0 pr-0 text-center text_underLine">{this.state.mintedWalletAddress}</div>
                        <div className="w-25 pl-0 pr-0 text-center" style={{color : "#083f92"}}>{this.state.state}</div>
                    </div>
                    <div className="coloredTd">
                        <div className="col-md-12 text-center">{title.Description}</div>
                    </div>
                    <div className="unColoredTd">
                        <div className="col-md-12">{this.state.description}</div>
                    </div>
                </div>
                {/* <p className="font-bold mb-3 pl-1">{title.History}</p>
                <div className="table-responsive mt-2 mobile_tab">
                    <STable data={this.state.historyTableData} num={this.state.num} header={this.state.historyTableHeader}/>
                </div> */}
            </div>
        );
    }
}

export default NFTGenerateListDetail
