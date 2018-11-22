import React, { Component } from "react";

const MyContainer = WrappedComponent =>
    class extends Component {
        render() {
            const newProps = {
                text: true
            };

            //TODO
            return <WrappedComponent {...this.props} {...newProps}>{newProps.text}</WrappedComponent>;
        }
    };

@MyContainer
class TabC extends Component {
    constructor( props ) {
        super( props );
    }

    render() {
        return (
            <div></div>
        )
    }
}

export default TabC