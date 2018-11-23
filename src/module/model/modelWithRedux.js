/**
 * Created by za-sumeng on 2018/11/19.
 */
import React, { Component } from "react";
import { connect } from "react-redux";

class ModelWithRedux extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {}

    render() {
        const { isOpen, template } = this.props;
        return (
            isOpen && <div>{template}</div>
        );
    }
}

export default connect(
    state => {
        console.log(state);
        return {
            isOpen: state.openTheModel.isOpen
        }
    }
)(ModelWithRedux);