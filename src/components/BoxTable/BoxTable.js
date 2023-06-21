import React, { useState, useMemo } from "react";
import TableHeader from "./BoxTableHeader";
import "../../assets/css/Boxtable/boxtable.css";
import NftCard from "../NftCard";
import {Link} from "react-router-dom";

export default function Table({ data, num,header, state, search }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [sorting, setSorting] = useState({ field: "", order: "" });
  const [totalItems, setTotalItems] = useState(0);

  const ITEMS_PER_PAGE = num;
  const dbData = useMemo(() => {
    let filterData = data;
    if(search) {
      filterData = data.filter((list) => list.NFTName.indexOf(search) !== -1)
    }
    let computedData = filterData;

    setTotalItems(computedData.length);

    //Sorting comments
    if (sorting.field) {
      const reversed = sorting.order === "asc" ? 1 : -1;
      if(sorting.field === "price") {
        computedData = computedData.sort(
          (a, b) => reversed * (a[sorting.field] - b[sorting.field])
        );
      } else {
        computedData = computedData.sort(
          (a, b) => reversed * a[sorting.field].localeCompare(b[sorting.field])
        );
      }
    }

    //Current Page slice
    return computedData.slice(
      (currentPage - 1) * ITEMS_PER_PAGE,
      (currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE
    );
  }, [data, currentPage, sorting, search]);

  return (
    <div className="boxtable">
        <TableHeader
        headers={header}
        onSorting={(field, order) => setSorting({ field, order })}
        />
        <div>
        {data &&
            dbData.map((field,index) => {
                if (state === true) {
                    return (
                      <>
                        <Link to={{ pathname: '/buylistDetail', nftInfo: field}} key={index} className="col-md-3 NftCard">
                            <NftCard  image={field.image} name={field.name} price={field.price} date={field.date} mediaType={field.mediaType}/>
                        </Link>
                        <Link to={{ pathname: '/buylistDetail', nftInfo: field}} key={index} className="col-md-3 NftCard">
                            <NftCard  image={field.image} name={field.name} price={field.price} date={field.date} mediaType={field.mediaType}/>
                        </Link>
                      </>
                    );
                } else {
                    return (
                        <div key={index} className="col-md-3 NftCard" data-toggle="modal" data-target="#LoginConfirm">
                            <NftCard  image={field.image} name={field.name} price={field.price} date={field.date} mediaType={field.mediaType}/>
                        </div>
                    );
                }

            })}
        </div>
    </div>
  );
}
