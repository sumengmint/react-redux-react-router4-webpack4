import React, { Component } from "react";
import { connect } from "react-redux";
import {fetchPostsIfNeeded} from "../actions/asyncAciton";

class TabB extends Component {
    constructor(props) {
        super(props);
        console.log(this.state);
    }

    componentDidMount() {
        const { fetchPostsIfNeeded } = this.props;
        fetchPostsIfNeeded('reactjs').then(() => console.log(store.getState()));
    }

    render() {
        return (
            <p>This is tab B</p>
        );
    }
}

export default connect(
    state => {
        console.log('00');
        return state
    },
    dispatch => ({
        fetchPostsIfNeeded: (subreddit) => dispatch(fetchPostsIfNeeded(subreddit))
    })
)(TabB);