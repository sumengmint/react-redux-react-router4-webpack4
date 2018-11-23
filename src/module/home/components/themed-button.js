/**
 * Created by za-sumeng on 2018/11/20.
 */
import React, { Component } from 'react';
import {ThemeContext} from '../context';

class ThemedButton extends React.Component {
    render() {
        let props = this.props;
        let theme = this.context;
        console.log(theme);
        return (
            <div
                {...props}
            >{ theme.propsA }</div>
        );
    }
}
ThemedButton.contextType = ThemeContext;

export default ThemedButton;