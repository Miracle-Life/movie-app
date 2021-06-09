import React from "react";

export default class Filters extends React.Component {
    render() {
        const {
            filters: {sort_by},
            onChangeFilters,
            onChangePage
        } = this.props;
        return (
            <form className="mb-3">
                <div className="form-group">
                    <label htmlFor="sort_by">Сортировать по:</label>
                    <select className="form-control"
                            value={sort_by}
                            id='sort_by'
                            name='sort_by'
                            onChange={onChangeFilters}
                    >
                        <option value="popularity.desc">Популярные по убыванию</option>
                        <option value="popularity.asc">Популярные по возрастанию</option>
                        <option value="vote_average.desc">Рейтинг по убыванию</option>
                        <option value="vote_average.asc">Рейтинг по возрастанию</option>
                    </select>
                </div>
                <div className="btn-group">
                    <button type="button" className="btn btn-light"
                            disabled={this.props.page === 1}
                            onClick={onChangePage.bind(null, this.props.page - 1)
                            }
                    >Назад
                    </button>
                    <button type="button" className="btn btn-light"
                            onClick={onChangePage.bind(null, this.props.page + 1)}
                    >Вперед
                    </button>

                </div>
            </form>
        );
    }
}
