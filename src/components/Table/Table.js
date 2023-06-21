import React, { useState, useMemo } from "react";
import PaginationComponent from "../Pagination";
import TableHeader from "../TableHeader";
import "../../assets/css/datatable/index.css"
import {Link} from "react-router-dom";
import { title } from "../../services/title";


export default function Table({ data, num, header, setInfoInModal }) {
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

  const setInfoToModal = async (info) => {
    setInfoInModal(info)
  }

  return (
    <div>
      <div className="d-flex justify-content-center mb-1">
        <PaginationComponent
            total={totalItems}
            itemsPerPage={ITEMS_PER_PAGE}
            currentPage={currentPage}
            onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    <table className="table">
        <TableHeader
        headers={header}
        onSorting={(field, order) => setSorting({ field, order })}
        />
        <tbody>
        {data &&
            dbData.map((field,index) => {
            return (
                <tr key={index}>
                    {header.map((i, headerIndex) => {
                        if (i.field === 'update_button') {
                            return (<td className="cursor-pointer" key={headerIndex}><Link to={{ pathname: field[i.field], nftInfo: field}}><i className="fa fa-edit edit_button"></i></Link></td>)
                        } else if (i.field === 'sale_button') {
                            return (<td className="cursor-pointer" key={headerIndex}><Link to={{ pathname: field[i.field], nftInfo: field}}><i className="fa fa-tag edit_button"></i></Link></td>)
                        } else if (i.field === 'content') {
                            return (
                                <td className="cursor-pointer" key={headerIndex}>
                                    <div className="d-flex justify-content-center"  data-toggle="modal" data-target={'#' + field['content_modal']} onClick={() => setInfoToModal(field)}>
                                        {
                                            field['category'] === "Image" ? <img src={field[i.field]} alt="" className="content_img"/>
                                                : <img src="./image/videoImage.png" alt="" className="content_img"/>
                                            
                                        }
                                        
                                    </div>
                                </td>
                            )
                        } else if (i.field === 'view_button') {
                          return (<td key={headerIndex}><i  data-toggle="modal" data-target={'#' + field['content_modal']} onClick={() => setInfoToModal(field)} className="fa fa-edit edit_button"></i></td>)
                        } else if (i.field === 'state') {
                            if (field[i.field] === 'minted') {
                                return (
                                    <td style={{color : 'green'}} key={headerIndex}>
                                        {field[i.field]}
                                    </td>
                                )
                            } else {
                                return (
                                    <td style={{color : '#064092'}} key={headerIndex}>
                                        {field[i.field]}
                                    </td>
                                )
                            }
                        } else if (i.field === 'price') {
                            return (
                                <td style={{color : '#064092'}} key={headerIndex}>
                                    {field[i.field]}
                                </td>
                            )
                        } else if (i.field === 'TxID') {
                            return (
                                <td className="text_underLine" key={headerIndex}>
                                    {field[i.field]}
                                </td>
                            )
                        } else if (i.field === 'type') {
                            if (field[i.field] === 'bought') {
                                return (
                                    <td style={{color : 'darkred'}} key={headerIndex}>
                                        {title.boughtTitle}
                                    </td>
                                )
                            } else if (field[i.field] === 'minted') {
                                return (
                                    <td style={{color : 'green'}} key={headerIndex}>
                                        {title.mintedTitle}
                                    </td>
                                )
                            } else {
                                return (
                                    <td style={{color : '#064092'}} key={headerIndex}>
                                        {title.soldTitle}
                                    </td>
                                )
                            }

                        }  else {
                            return (<td key={headerIndex}>{field[i.field]}</td>);
                        }
                    })}
                </tr>
            );
            })}
        </tbody>
    </table>

    </div>
  );
}
