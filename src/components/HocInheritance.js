/**
 * Created by za-sumeng on 2018/11/23.
 */
import React, { Component } from "react";

export default WrappedComponent =>
    class HocInheritance extends WrappedComponent {
        //继承了传入的组件
        test1() {
            return this.test2() + 5;
        }

        componentDidMount() {
            console.log('HocInheritance');
            this.setState({ number: 2 });
        }

        render() {
            //使用super调用传入组件的render方法
            return super.render();
        }
    };