import React, { Component } from "react";
import { connect } from "react-redux";
import {selectSubreddit} from "../actions/asyncAciton";

class TabA extends Component {
    constructor(props) {
        super(props);
        console.log(this.state);
    }

    componentDidMount() {
        const { selectSubreddit } = this.props;
        selectSubreddit('sumeng');
    }

    render() {
        return (
            <p>This is tab A</p>
        );
    }
}

export default connect(
    state => {
        console.log(state);
        return state
    },
    dispatch => ({
        selectSubreddit: arg => dispatch(selectSubreddit(arg))
    })
)(TabA);