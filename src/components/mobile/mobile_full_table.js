import React, { useState, useMemo } from "react";
import TableHeader from "./table_header";
import "../../assets/css/datatable/index.css"
import NFTUpdateModal from "../../pages/mobile/walletInfo/modal/NFTUpdateModal"

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
            <table className="table mobile-full-table">
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
                                    return (<td className="cursor-pointer" data-toggle="modal" data-target={'#' + field[i.field]}><i className="fa fa-edit edit_button"></i></td>)
                                } else if (i.field === 'sale_button') {
                                    return (<td className="cursor-pointer" data-toggle="modal" data-target={'#' + field[i.field]}><i className="fa fa-tag edit_button"></i></td>)
                                } else if (i.field === 'content') {
                                    return (
                                        <td className="cursor-pointer">
                                            <div className="d-flex justify-content-center"  data-toggle="modal" data-target={'#' + field['content_modal']}>
                                                <img src={field[i.field]} alt="" className="content_img"/>
                                            </div>
                                        </td>
                                    )
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
