import React from "react";
import classNames from "classnames";

export default class Pagination extends React.Component {
    nextPage = () => {
        this.props.onChangePagination({
            page: this.props.page + 1,
            total_pages: this.props.total_pages
        });
    };

    prevPage = page => event => {
        this.props.onChangePagination({
            page: this.props.page - 1,
            total_pages: this.props.total_pages
        });
    };

    render() {
        const {page, total_pages} = this.props;
        return (
            <nav>
                <div>
                            <span>
                       Страница: {page} из {total_pages}
                           </span>
                </div>
                <ul className="pagination ">
                    <li className={classNames("page-item outline-dark", {disabled: page === 1})}>
                        <a href="#" className="page-link" onClick={this.prevPage(page)} tabIndex="-1">Previous</a>
                    </li>
                    <li className={classNames("page-item outline-dark", {disabled: page === 1})}><a
                        className="page-link" href="#" onClick={this.prevPage(page)}>{page - 1}</a></li>
                    <li className="page-item active" aria-current="page">
                        <a className="page-link" href="#">{page}</a>
                    </li>
                    <li className="page-item"><a className="page-link" onClick={this.nextPage} href="#">{page + 1}</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link " onClick={this.nextPage} href="#">Next</a>
                    </li>
                </ul>
            </nav>

            // <div>
            //     <div className='align-content-center'>
            //         <span >
            //             Страница:{page} из {total_pages}
            //         </span>
            //     </div>
            // <nav className="d-flex align-items-center">
            //  <div>  <ul className="pagination mb-0 mr-3">
            //         <li
            //             className={classNames("page-item", {
            //                 disabled: page === 1
            //             })}
            //         >
            // <span className="page-link" onClick={this.prevPage(page)}>
            //    Назад
            // </span>
            //         </li>
            //         <li className="page-item">
            // <span className="page-link" onClick={this.nextPage}>
            //   Вперед
            // </span>
            //         </li>
            //     </ul></div>
            //
            // </nav>
            //
            //
            // </div>
        );
    }
}
