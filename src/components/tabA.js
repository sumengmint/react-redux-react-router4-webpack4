import React, { Component } from "react";
import { connect } from "react-redux";
import {selectSubreddit} from "../actions/asyncAciton";
import Debounce from "./debounce";
import Throttle from "./throttle";

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
            <div className='tab-a-container'>
                <p>This is tab A， please input values：</p>
                <div>函数防抖
                    <Debounce/>
                </div>
                <div>函数节流
                    <Throttle/>
                </div>
            </div>
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