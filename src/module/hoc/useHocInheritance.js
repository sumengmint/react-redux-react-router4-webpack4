/**
 * Created by za-sumeng on 2018/11/23.
 */
import React, { Component } from "react";
import HocInheritance from './HocInheritance';
import HocInheritanceTop from './HocInheritanceTop';

@HocInheritanceTop
@HocInheritance
class UseHocInheritance extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            number: 1
        }
    }

    test2() {
        return 4;
    }

    componentDidMount() {
        console.log('useHocInheritance');
    }

    render() {
        return (
            <div>
                <div>{ this.state.number }</div>
                <div>{ this.test1() }</div>
                这是原始组件
            </div>
        )
    }
}

export default UseHocInheritance