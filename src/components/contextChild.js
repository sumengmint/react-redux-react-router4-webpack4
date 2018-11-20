/**
 * Created by za-sumeng on 2018/11/20.
 */
import React, { Component } from "react";
import { TestContext } from './tabB';

class ContextChild extends Component {
    render() {
        const value = this.context;
        console.log(value);
        return (
            <div>Hello, I'm context child
                <div>{value.propsA}</div>
            </div>
        );
    }
}

ContextChild.contextType = TestContext;

export default ContextChild;