import React, { useState, useMemo } from "react";
import TableHeader from "./table_header";
import "../../assets/css/datatable/index.css"
import NFTUpdateModal from "../../pages/mobile/walletInfo/modal/NFTUpdateModal"
import {Link} from "react-router-dom";
import { title } from "../../services/title";

export default function Table({ data, num,header }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [sorting, setSorting] = useState({ field: "", order: "" });
    const [totalItems, setTotalItems] = useState(0);

    const ITEMS_PER_PAGE = num;

    const dbData = useMemo(() => {
        let computedData = data;

        setTotalItems(computedData.length);

        //Sorting comments
        if (sorting.field) {
            const reversed = sorting.order === "asc" ? 1 : -1;
            computedData = computedData.sort(
                (a, b) => reversed * a[sorting.field].localeCompare(b[sorting.field])
            );
        }

        //Current Page slice
        return computedData.slice(
            (currentPage - 1) * ITEMS_PER_PAGE,
            (currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE
        );
    }, [data, currentPage, sorting]);

    return (
        <div>
            <table className="table mobile_standard_table" >
                <TableHeader
                    headers={header}
                    onSorting={(field, order) => setSorting({ field, order })}
                />
                <tbody>
                {data &&
                dbData.map((field,index) => {
                    return (
                        <tr key={index}>
                            {header.map((i) => {
                                if (i.field === 'update_button') {
                                    return (<td className="cursor-pointer"><Link to={{ pathname: field[i.field], nftInfo: field}}><i className="fa fa-edit edit_button edit_button_active"></i></Link></td>)
                                } else if (i.field === 'sale_button') {
                                    return (<td className="cursor-pointer"><Link to={{ pathname: field[i.field], nftInfo: field}}><i className="fa fa-tag edit_button edit_button_active"></i></Link></td>)
                                } else if (i.field === 'content') {
                                    return (
                                        <td className="cursor-pointer">
                                            <div className="d-flex justify-content-center">
                                                <Link to={{ pathname: field['content_modal'], nftInfo: field}}>
                                                {
                                                    field['category'] === "Image" ? <img src={field[i.field]} alt="" className="content_img"/>
                                                        : <img src="./image/videoImage.png" alt="" className="content_img"/>
                                                    
                                                }
                                                </Link>
                                            </div>
                                        </td>
                                    )
                                } else if (i.field === 'price') {
                                    return (
                                        <td style={{color : '#064092'}}>
                                            {field[i.field]}
                                        </td>
                                    )
                                } else if (i.field === 'seller' || i.field === 'buyer') {
                                    return (
                                        <td className="text_underLine">
                                            {field[i.field]}
                                        </td>
                                    )
                                } else if (i.field === 'state') {
                                    if (field[i.field] === 'minted') {
                                        return (
                                            <td style={{color : 'green'}}>
                                                {field[i.field]}
                                            </td>
                                        )
                                    } else {
                                        return (
                                            <td style={{color : '#064092'}}>
                                                {field[i.field]}
                                            </td>
                                        )
                                    }
                                } else if (i.field === 'type') {
                                    if (field[i.field] === 'bought') {
                                        return (
                                            <td style={{color : 'darkred'}}>
                                                {title.boughtTitle}
                                            </td>
                                        )
                                    } else if (field[i.field] === 'minted') {
                                        return (
                                            <td style={{color : 'green'}}>
                                                {title.mintedTitle}
                                            </td>
                                        )
                                    } else {
                                        return (
                                            <td style={{color : '#064092'}}>
                                                {title.soldTitle}
                                            </td>
                                        )
                                    }
        
                                } else if (i.field === 'view_button') {
                                    return (<td><i className="fa fa-edit edit_button"></i></td>)
                                } else {
                                    return (<td>{field[i.field]}</td>);
                                }
                            })}
                        </tr>
                    );
                })}
                </tbody>
            </table>
            <NFTUpdateModal/>

        </div>
    );
}
