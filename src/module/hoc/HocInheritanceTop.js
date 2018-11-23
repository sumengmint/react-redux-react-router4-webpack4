/**
 * Created by za-sumeng on 2018/11/23.
 */
import React, { Component } from "react";

export default WrappedComponent =>
    class HocInheritanceTop extends WrappedComponent {
        //继承了传入的组件
        test1() {
            return this.test2() + 8;
        }

        componentDidMount() {
            console.log('HocInheritanceTop');
            this.setState({ number: 3 });
        }

        render() {
            //使用super调用传入组件的render方法
            return super.render();
        }
    };