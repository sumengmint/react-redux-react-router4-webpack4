/**
 * Created by za-sumeng on 2018/11/23.
 */
import React, { Component } from "react";

export default WrappedComponent =>
    class HOC extends Component {
        render() {
            return <div>
                <div className="demo-header">
                    我是标题
                </div>
                <WrappedComponent {...this.props}/>
            </div>
        }
    };