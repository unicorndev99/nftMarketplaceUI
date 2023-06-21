import React, { Component } from "react";
import { title } from "../../services/title";
import { Link } from "react-router-dom";

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentDidMount() {

    }

    render() {
        return (
            <footer className="d-flex footer text-white pt-lg-5 pb-5">
                <div className='col-md-4 mt-3'>
                    <div className="col-md-6 float-right">
                        <p className='text-[18px] font-bold'>Marketplace</p>
                        <p className='mt-3'>There are many NFTs..</p>
                    </div>

                </div>
                <div className='col-md-4 mt-3 pl-32'>
                    <p className='text-[18px] font-bold'>Quick Links</p>
                    <Link to={"/NFTGenerate"}><p className='mt-4'>{title.NFTMint}</p></Link><br />
                    <Link to={"/"}><p className='mt-1'>{title.NFTSalesList}</p></Link><br/>
                    <Link to={"/walletInfo"}><p className='mt-1'>{title.WalletInfo}</p></Link><br/>
                    <Link to={"/walletInfo"}><p className='mt-1'>{title.NFTSalesRegister}</p></Link><br/>
                </div>
                <div className='col-md-4 mt-3   pl-32'>
                    <p className='text-[18px] font-bold'>{title.Representative}</p>
                    <p className='mt-3'>{title.RepresentativeName}</p>
                    <p className='text-[18px] font-bold mt-3'>{title.BusinessNumber}</p>
                    <p className='mt-3'>107-97-7333</p>
                    <p className='text-[18px] font-bold mt-3'>FAX</p>
                    <p className='mt-3'>02-6499-4123</p>
                    <p className='text-[18px] font-bold mt-3'>{title.FooterAddress}</p>
                    <p className='mt-3'>{title.FooterAddressDetail}</p>
                </div>
            </footer>
        );
    }
}

export default Footer
