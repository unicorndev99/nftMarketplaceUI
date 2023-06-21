import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { saveNFTUpdates } from "../../../../services/serverHook";
import { AppContext } from "../../../../AppContext";
import { title } from "../../../../services/title";

class GenerateUpdate extends Component {
    static contextType = AppContext;
    constructor(props) {
        super(props);
        const nftInfo = props.location.nftInfo
        this.state = {
            category : nftInfo.categoryOfMintpage ? nftInfo.categoryOfMintpage : "category1",
            name : nftInfo.NFTName,
            description : nftInfo.description,
            mediaIpfs: nftInfo.content,
            mediaType: nftInfo.category,
            dbID: nftInfo.dbID
        }
    }
    componentDidMount() {

    }

    onNameChange = async (e) => {
        this.setState({
            name : e.target.value
        })
    }

    onDescriptionChange = async (e) => {
        this.setState({
            description : e.target.value
        })
    }

    onCategoryChange = async (e) => {
        this.setState({
            category : e.target.value
        })
    }

    onSaveUpdates = async () => {
        const { setNotification } = this.context;
        saveNFTUpdates(this.state.dbID, this.state.name, this.state.category, this.state.description).then(res => {
            if(res) {
                setNotification({
                    status: "success",
                    title: title.saveSuccess
                })
                this.props.history.push("/walletInfo");
            } else {
                setNotification({
                    status: "fail",
                    title: title.saveFail
                })
                this.props.history.push("/walletInfo");
            }
        })
    }

    render() {
        const { wallet, connectedWalletType, setNotification } = this.context;

        if(!(wallet && connectedWalletType)) return <Redirect to="/login" />
        return (
            <div className="w-100">
                <div className="d-flex justify-content-center pt-lg-5 pb-5">
                    <div className="col-md-4 pt-lg-4 pl-0 pr-0">
                        <div className="d-flex justify-content-between pb-4 mb-4" style={{borderBottom : '1px solid lightgrey'}}>
                            <p className="font-weight-bold modal-header-text">
                                {title.EditNFT}
                            </p>
                            <div>
                                <Link to={'/walletInfo'} className="btn btn-default modal_button modal_button_close float-right">{title.Close}</Link>
                                <button type="button" className="btn btn-default modal_button modal_button_primary float-right" onClick={this.onSaveUpdates}>{title.Edit}</button>
                            </div>
                        </div>
                        <div className="NFTUpdateModalImageDiv pt-4 pb-3">
                            <div className="d-flex justify-content-center">
                                <div className="pc-update-img">
                                    {
                                        this.state.mediaType === "Image" && <img src={this.state.mediaIpfs}/>
                                    }
                                    {
                                        this.state.mediaType === "Video" && <video controls> 
                                            <source type="video/mp4" src={this.state.mediaIpfs} /> 
                                        </video>
                                    }
                                </div>
                            </div>

                            {/* <p className="text-center font-weight-bold mb-1 mt-1">Filename.png</p> */}
                            <p className="text-center font-weight-bold">{title.ImpossibleToEditContent}</p>
                        </div>
                        <div className="pt-4">
                            <p className="mb-2 font-weight-bold">category</p>
                            <select name="" id="" className="form-control form-control-sm form-control-input" onChange={this.onCategoryChange} value={this.state.mediaType} disabled>
                                <option value="Image">{title.Image}</option>
                                <option value="Video">{title.Video}</option>
                            </select>
                            <p className="mb-2 mt-3 font-weight-bold">{title.Name}</p>
                            <input placeholder="Input Name" className="form-control form-control-sm form-control-input" onChange={this.onNameChange} value={this.state.name}/>
                            <p className="mb-2 mt-3 font-weight-bold">{title.Description}</p>
                            <textarea placeholder="Input description" rows="5" className="form-control form-control-sm form-control-input" onChange={this.onDescriptionChange} value={this.state.description}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default GenerateUpdate
