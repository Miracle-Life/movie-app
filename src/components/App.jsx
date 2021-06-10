import React from "react";
import Filters from "./Filters/Filters";
import MoviesList from "./Movies/MoviesList";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filters: {
                sort_by: "popularity.desc",
                primary_release_year: "2021",
                with_genres: []
            },
            page: 1,
            total_pages: ""
        }
    }

    onChangeFilters = (event) => {
        const {name,value}=event.target
        this.setState(prevState => ({
            filters: {
                ...prevState.filters,
                [name]: value
            },
            page: 1
        }));
        // console.log(event.target.name, event.target.value);
    };

    onChangePagination = ({page, total_pages = this.state.total_pages}) => {
        this.setState({
            page,
            total_pages
        });
    };


    render() {
        const {filters, page, total_pages} = this.state;
        return (
            <div className="container">
                <div className="row mt-4">
                    <div className="col-4">
                        <div className="card" style={{width: "100%"}}>
                            <div className="card-body">
                                <h3>Фильтры:</h3>
                                <Filters
                                    page={page}
                                    total_pages={total_pages}
                                    filters={filters}
                                    onChangeFilters={this.onChangeFilters}
                                    onChangePagination={this.onChangePagination}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-8">
                        <MoviesList
                            page={page}
                            onChangePagination={this.onChangePagination}
                            filters={filters}/>
                    </div>
                </div>
            </div>
        );
    }
}
