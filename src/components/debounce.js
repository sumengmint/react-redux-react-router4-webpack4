/**
 * Created by za-sumeng on 2018/11/15.
 */
import React, { Component } from "react";

class Debounce extends Component {
    constructor(props) {
        super(props);
        this.state = {
            thisValue: ''
        };
    }

    ajax(content) {
        console.log('ajax request' + content);
    }

    debounce(data) {
        this.setState({
            thisValue: data
        }, () => {
            return this.debounceHandler(this.ajax, 500)(data);
        });
    }

    debounceHandler(callback, delay) {
        return (args) => {
            clearTimeout(callback.timer);
            callback.timer = setTimeout(() => {
                callback(args);
            }, delay);
        }
    }

    componentDidMount() {

    }

    render() {
        const { thisValue } = this.state;
        return (
            <input placeholder="请输入" type="text" value={ thisValue } onChange={ (e) => this.debounce(e.target.value) } />
        );
    }
}

export default Debounce;