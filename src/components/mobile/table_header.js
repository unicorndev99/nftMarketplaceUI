import React, { useState } from "react";

const Header = ({ headers, onSorting }) => {
    const [sortingField, setSortingField] = useState("");
    const [sortingOrder, setSortingOrder] = useState("asc");

    const onSortingChange = (field) => {
        const order =
            field === sortingField && sortingOrder === "asc" ? "desc" : "asc";

        setSortingField(field);
        setSortingOrder(order);
        onSorting(field, order);
    };

    return (
        <thead >
        <tr>
            {headers.map(({ name, field, sortable, width }) => {
                const cl = sortable
                    ? sortingField === field && sortingOrder === "asc"
                        ? "up"
                        : sortingField === field && sortingOrder === "desc"
                            ? "down"
                            : "default"
                    : "";
                return (
                    <th

                        key={name}
                        onClick={() => (sortable ? onSortingChange(field) : null)}
                        className={cl}
                        style={{backgroundColor:'#f5f9ff',width : width}}
                    >
                        {name}
                        {/*{*/}
                        {/*  sortingField && sortingField === field && (*/}
                        {/*      <i className={sortingOrder === "asc" ? "fa fa-arrow-up ml-1" : "fa fa-arrow-down ml-1"}*/}
                        {/*      />*/}
                        {/*  )*/}
                        {/*}*/}
                        {/* {sortingField && sortingField === field && (
              <FontAwesomeIcon
                icon={sortingOrder === "asc" ? "down" : "up"}
              />
            )} */}
                    </th>
                );
            })}
        </tr>
        </thead>
    );
};

export default Header;
