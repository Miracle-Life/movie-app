import React from "react";
import PropTypes from "prop-types";
import UISelect from "../UIComponents/UISelect";

export default class PrimaryReleaseYear extends React.Component {
    static propTypes = {
        primary_release_year: PropTypes.string.isRequired,
        onChangeFilters: PropTypes.func.isRequired
    };

    static defaultProps = {
        options: [
            {
                label: "2021",
                value: "2021"
            },
            {
                label: "2020",
                value: "2020"
            },
            {
                label: "2019",
                value: "2019"
            },
            {
                label: "2018",
                value: "2018"
            },
            {
                label: "2017",
                value: "2017"
            },
            {
                label: "2016",
                value: "2016"
            },
            {
                label: "2015",
                value: "2015"
            }
        ]
    };

    // PureComponent
    shouldComponentUpdate(nextProps, nextState) {
        // console.log("this.props", this.props);
        // console.log("nextProps", nextProps);
        return !_.isEqual(nextProps, this.props);
    };

    render() {
        const {primary_release_year, onChangeFilters, options} = this.props;
        console.log("PrimaryReleaseYear render");
        return (
            <UISelect
                id="primary_release_year"
                name="primary_release_year"
                value={primary_release_year}
                onChange={onChangeFilters}
                labelText="Год релиза:"
            >
                {options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </UISelect>
        );
    }
}
