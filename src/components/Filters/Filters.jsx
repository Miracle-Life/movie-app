import React from "react";
import SortBy from "./SortBy";
import Pagination from "./Pagination";

export default class Filters extends React.Component {
    render() {
        const {
            filters: {sort_by},
            onChangeFilters,
            onChangePage
        } = this.props;
        return (
            <form className="mb-3">
                <SortBy sort_by={sort_by}
                        onChangeFilters={onChangeFilters}
                />
                <Pagination
                    onChangePage={onChangePage}
                    page={this.props.page}
                />
            </form>
        );
    }
}
