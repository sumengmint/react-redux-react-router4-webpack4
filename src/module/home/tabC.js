import React, { Component } from "react";
import WithHeader from '../hoc/HOC';
import UseHocInheritance from '../hoc/useHocInheritance';

@WithHeader
class TabC extends Component {
    constructor( props ) {
        super( props );
    }

    testLoading() {
        setTimeout(() => {}, 3000);
    }

    render() {
        const renderTest = () => {
            return <div>test the loading</div>
        };

        return (
            <div test="1111">
                <UseHocInheritance/>
            </div>
        )
    }
}

export default TabC