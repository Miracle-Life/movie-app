import React, {Component} from "react";
import MovieItem from "./MovieItem";
import {API_URL, API_KEY_3} from "../../api/api";

export default class MovieList extends Component {
    constructor() {
        super();

        this.state = {
            movies: []
        };
    }

    // сокращаем код с помощью getMovies
    getMovies = filters => {
        const {sort_by} = filters;
        const link = `${API_URL}/discover/movie/?api_key=${API_KEY_3}&language=ru-RU&sort_by=${sort_by}`;
        fetch(link)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    movies: data.results
                });
            });
    }

    componentDidMount() {
        this.getMovies(this.props.filters);
    };

    componentDidUpdate(prevProps) {
        // console.log({props: this.props, prevProps});
        if (this.props.filters.sort_by !== prevProps.filters.sort_by) {
            // const {filters: {sort_by}} = prevProps;
            // const link = `${API_URL}/discover/movie/?api_key=${API_KEY_3}&language=ru-RU&sort_by=${sort_by}`;
            // fetch(link)
            //     .then(res => res.json())
            //     .then(data => {
            //         this.setState({
            //             movies: data.results
            //         });
            //     });
            this.getMovies(this.props.filters);
        }
    }

    render() {

        const {movies} = this.state;
        // console.log('filters', this.props.filters);
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
