import React from "react";

export default function MobileNftCard({image, name, price, date}) {
    return (
        <div>
            <div className="d-flex justify-content-center">
                <img src={image} alt="" className="dashboard-item-image w-100"/>
            </div>
            <div className="NftCard-text-pane">
                <div className="d-flex justify-content-between">
                    <p>{name}</p>
                    <p className="text-right">{date}</p>
                </div>
                <p className="font-weight-bold" style={{color : '#083f92',marginTop : '5px'}}>{price}</p>
            </div>
        </div>
    )
}