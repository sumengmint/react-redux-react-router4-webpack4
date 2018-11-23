/**
 * Created by za-sumeng on 2018/11/19.
 */
import React, { Component } from "react";

class Model extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }

    componentDidMount() {
        this.props.model(this);
    }

    open(callback) {
        this.setState({ isOpen: true }, () => {
            if(callback && typeof(callback) === 'function') {
                callback();
            }
        });
    }

    render() {
        const { isOpen } = this.state;
        const { template } = this.props;
        return (
            isOpen && <div>{template}</div>
        );
    }
}

export default Model;