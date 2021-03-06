import React from "react";
import MovieItem from "./MovieItem";
import {API_KEY_3, API_URL} from "../../api/api";
import _ from "lodash";
import queryString from "query-string";

export default class MovieList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: []
        };
    }

    // сокращаем код с помощью getMovies
    getMovies = (filters, page) => {
        // const {sort_by} = filters;
        // const link = `${API_URL}/discover/movie/?api_key=${API_KEY_3}&language=ru-RU&sort_by=${sort_by}&page=${page}`;

        const {sort_by, primary_release_year, with_genres} = filters;
        const queryStringParams = {
            api_key: API_KEY_3,
            language: "ru-RU",
            sort_by: sort_by,
            page: page,
            primary_release_year: primary_release_year
        };

        if (with_genres.length > 0)
            queryStringParams.with_genres = with_genres.join(",");

        // const getQueryStringParams = object => {
        //   let string = "";
        //   for (let key in object) {
        //     string = string + `&${key}=${object[key]}`;
        //   }
        //   return "?" + string.substring(1, string.length);
        // };

        // getQueryStringParams(queryString);
        const link = `${API_URL}/discover/movie?${queryString.stringify(
            queryStringParams
        )}`;
        fetch(link)
            .then(res => res.json())
            .then(data => {
                this.props.onChangePagination({
                    page: data.page,
                    total_pages: data.total_pages
                });
                this.setState({
                    movies: data.results
                });
            });
    }

    componentDidMount() {
        this.getMovies(this.props.filters, this.props.page);
    };

    componentDidUpdate(prevProps) {

        if (
            !_.isEqual(this.props.filters, prevProps.filters)
        ) {
            this.props.onChangePagination({page: 1});
            this.getMovies(this.props.filters, 1);
        }
        if (this.props.page !== prevProps.page) {
            this.getMovies(this.props.filters, this.props.page);
        }
    }

    render() {

        const {movies} = this.state;
        // console.log('render');
        return (
            <div className="row">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} className="col-6 mb-4">
                            <MovieItem item={movie}/>
                        </div>
                    );
                })}
            </div>
        );
    }
}
