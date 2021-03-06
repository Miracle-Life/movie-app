import React from "react";
import PropTypes from 'prop-types';

export default class SortBy extends React.Component {
    static propTypes = {
        onChangeFilters: PropTypes.func.isRequired,
        sort_by: PropTypes.string.isRequired
    };

    static defaultProps = {
        options: [
            {
                label: 'Популярные по убыванию',
                value: "popularity.desc",
                image: "/lol.jpg"
            },
            {
                label: 'Популярные по возрастанию',
                value: 'popularity.asc'
            },
            {
                label: 'Рейтинг по убыванию',
                value: 'vote_average.desc'
            },
            {
                label: 'Рейтинг по возрастанию',
                value: 'vote_average.asc'
            }
        ]
    };

    render() {
        const {onChangeFilters, sort_by, options} = this.props;
        return (
            <div>
                <div className="form-group">
                    <label htmlFor="sort_by">Сортировать по:</label>
                    <select className="form-control"
                            value={sort_by}
                            id='sort_by'
                            name='sort_by'
                            onChange={onChangeFilters}
                    >
                        {options.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        )
    }
}
