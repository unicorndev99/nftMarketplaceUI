import React, { Component } from "react";
import TableHeader from "../TableHeader";
import PaginationComponent from "../Pagination";
class DataTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentDidMount() {
    }

    render() {
        return (
            <div>
                <table className="table">
                    <TableHeader
                        headers={columns}
                        onSorting={(field, order) => setSorting({ field, order })}
                    />
                    <tbody>
                    {data &&
                    dbData.map((field,index) => {
                        return (
                            <tr key={index}>
                                {columns.map((i) => {
                                    return <td>{field[i.name]}</td>;
                                })}
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
                <div className="row">
                    <PaginationComponent
                        total={totalItems}
                        itemsPerPage={ITEMS_PER_PAGE}
                        currentPage={currentPage}
                        onPageChange={(page) => setCurrentPage(page)}
                    />
                </div>
            </div>
        );
    }
}

export default DataTable
