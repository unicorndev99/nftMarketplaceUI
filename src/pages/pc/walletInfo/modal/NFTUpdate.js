import React, { Component } from "react";
class NFTUpdate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            historyData : [
                { price : '0.123845658544 ETH', buyer : 'WWWWSWWDDWESFWWWWDAD', saler : 'WWWWSWWDDWESFWWWWDAD', completeTime : '2023.01.01. 12:23:14'},
                { price : '0.123845658544 ETH', buyer : 'WWWWSWWDDWESFWWWWDAD', saler : 'WWWWSWWDDWESFWWWWDAD', completeTime : '2023.01.01. 12:23:14'}
            ]
        }
    }
    componentDidMount() {

    }

    render() {
        return (
            <div className="modal fade" id="NFTUpdateModal" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content p-4 mt-7">
                        <div className="d-flex justify-content-between pb-3  mb-3" style={{borderBottom : '1px solid lightgrey'}}>
                            <p className="font-weight-bold modal-header-text">
                                Edit NFT
                            </p>
                            <div>
                                <button type="button" className="btn btn-default modal_button modal_button_close float-right" data-dismiss="modal">{title.Close}</button>
                                <button type="button" className="btn btn-default modal_button modal_button_primary float-right">{title.Edit}</button>
                            </div>
                        </div>
                        <div className="NFTUpdateModalImageDiv pt-3 pb-3">
                            <div className="d-flex justify-content-center">
                                <img src="image/image7.png" className="NFTupdateModalImg" alt=""/>
                            </div>
                            <p className="text-center font-weight-bold mb-1 mt-1">Filename.png</p>
                            <p className="text-center font-weight-bold">Impossible to edit content</p>
                        </div>
                        <div className="pt-4">
                            <p className="mb-2 font-weight-bold">category</p>
                            <select name="" id="" className="form-control form-control-sm form-control-input pl-2">
                                <option value="">category1</option>
                                <option value="">category2</option>
                                <option value="">category3</option>
                            </select>
                            <p className="mb-2 mt-3 font-weight-bold">{title.Name}</p>
                            <input placeholder="Input Name" className="form-control form-control-sm form-control-input pl-2" />
                            <p className="mb-2 mt-3 font-weight-bold">{title.Description}</p>
                            <textarea placeholder="Input description" rows="5" className="form-control form-control-sm form-control-input pl-2" />
                            {/*<input type="text" className="form-control form-control-sm form-control-input"/>*/}
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default NFTUpdate
