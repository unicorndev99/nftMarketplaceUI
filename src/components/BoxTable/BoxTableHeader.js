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
      <div className="boxtable-header">
        {headers.map(({ name, field, sortable }) => {
            const cl = sortable
            ? sortingField === field && sortingOrder === "asc"
              ? "up"
              : sortingField === field && sortingOrder === "desc"
              ? "down"
              : "default"
            : "";
            return (
          <div
            key={name}
            onClick={() => (sortable ? onSortingChange(field) : null)}
            className={cl}
          >
            {name}
          </div>
        );
        })}
      </div>
  );
};

export default Header;
