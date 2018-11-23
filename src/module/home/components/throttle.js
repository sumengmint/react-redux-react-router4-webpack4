/**
 * Created by za-sumeng on 2018/11/15.
 */
import React, { Component } from "react";

class Throttle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            thisValue: ''
        };

        this.callThrottle = this.throttleHandler(this.ajax, 1000);
    }

    ajax(content) {
        console.log('ajax request time' + new Date() + ':' + content);
    }

    throttle(data) {
        this.setState({
            thisValue: data
        }, () => {
            this.callThrottle(data);
        });
    }

    throttleHandler(callback, delay) {
        let last, deferTimer;

        return (args) => {
            let now = +new Date();
            if (last && now < last + delay) {
                clearTimeout(deferTimer);
                deferTimer = setTimeout(function () {
                    last = now;
                    callback(args);
                }, delay)
            }
            else {
                last = now;
                callback(args)
            }
        }
    }

    componentDidMount() {

    }

    render() {
        const { thisValue } = this.state;
        return (
            <input placeholder="请输入" type="text" value={ thisValue } onChange={ (e) => this.throttle(e.target.value) } />
        );
    }
}

export default Throttle;