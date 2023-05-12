import React, { Component } from "react";
import Table from "../../../../components/mobile/mobile_table";
import STable from "../../../../components/mobile/mobile_standard_table";
import FullTable from "../../../../components/mobile/mobile_full_table";
import NFTUpdateModal from "./NFTUpdateModal";
import { title } from "../../../../services/title";

class NFTGenerateDetailModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datableDataHeader : [
                { name : `${title.category}`, field : 'category', sortable : false},
                { name : `${title.NFTID}`, field : 'id', sortable : false},
                { name : `${title.NFTName}`, field : 'NFTName', sortable : false},
                { name : 'CreationDate', field : 'generate_time', sortable : false},
            ],
            tableData : [
                {category : 'Image', id : '1116548', NFTName : 'abc', generate_time : '2023.01.01'},
                {category : 'Image', id : '1116548', NFTName : 'abc', generate_time : '2023.01.01'},
            ],
            historyTableHeader : [
                { name : `${title.SalePrice}`, field : 'price', sortable : false,width : '150px' },
                { name : `${title.Buyer}`, field : 'buyer', sortable : false,width : '180px' },
                { name : `${title.Seller}`, field : 'seller', sortable : false,width : '180px' },
                { name : `${title.SaleCompleteTime}`, field : 'endTime', sortable : false,width : '180px' },
            ],
            historyTableData : [
                { price : '0.1245667688 ETH', buyer : '0X388C818CA889251b393131c08a736a292', seller : '0X388C818CA889251b393131c08a736a292', endTime : '2023.04.04. 12:00:00'},
                { price : '0.1245667688 ETH', buyer : '0X388C818CA889251b393131c08a736a292', seller : '0X388C818CA889251b393131c08a736a292', endTime : '2023.04.04. 12:00:00'},
                { price : '0.1245667688 ETH', buyer : '0X388C818CA889251b393131c08a736a292', seller : '0X388C818CA889251b393131c08a736a292', endTime : '2023.04.04. 12:00:00'},
            ],
            num : 5
        }
    }
    componentDidMount() {

    }

    render() {
        return (
            <div className="modal fade" id="NFTGenerateDetailModal" role="dialog">
                <div className="modal-dialog modal-sm">
                    <div className="modal-content p-4 mt-7">
                        <div className="d-flex justify-content-around pb-2  mb-2">
                            <button type="button" className="btn btn-default modal_button modal_button_primary float-right" data-dismiss="modal"  data-toggle="modal" data-target='#NFTUpdateModal'>{title.Edit}</button>
                            <button type="button" className="btn btn-default modal_button modal_button_primary float-right">sale</button>
                            <button type="button" className="btn btn-default modal_button modal_button_close float-right" data-dismiss="modal">{title.Close}</button>
                        </div>
                        <div className="d-flex justify-content-center pt-2 pb-2">
                            <div className="NFTGenerateDetailModalImg">
                                <img src="image/image7.png" className="" alt=""/>
                            </div>
                        </div>
                        <div className="mt-2 mb-2">
                            <FullTable data={this.state.tableData} num={this.state.num} header={this.state.datableDataHeader}/>
                        </div>
                        <p className="font-weight-bold" style={{fontWeight : 'bold'}}>{title.History}</p>
                        <div className="table-responsive mt-2 mobile_tab">
                            <STable data={this.state.historyTableData} num={this.state.num} header={this.state.historyTableHeader}/>
                        </div>
                    </div>
                    <NFTUpdateModal/>
                </div>
            </div>
        );
    }
}

export default NFTGenerateDetailModal
