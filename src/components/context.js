/**
 * Created by za-sumeng on 2018/11/20.
 */
import React, { Component } from 'react';
//import ThemeContext from '../constants/theme-context';
import ThemedButton from './themed-button';

export const ThemeContext = React.createContext(
    // themes.dark // default value

    {
        propsA: '123'
    }
);

// An intermediate component that uses the ThemedButton
function Toolbar(props) {
    return (
        <ThemedButton onClick={props.changeTheme}>
            Change Theme
        </ThemedButton>
    );
}

export class Context extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            propsA: 'test',
        };

        this.toggleTheme = () => {
            this.setState(state => ({
                propsA:
                    state.propsA === 'test'
                        ? 123
                        : 'test',
            }));
        };
    }

    render() {
        // The ThemedButton button inside the ThemeProvider
        // uses the theme from state while the one outside uses
        // the default dark theme
        console.log(11111111111);

        return (
            <div>
                <ThemeContext.Provider value={this.state}>
                    <Toolbar changeTheme={this.toggleTheme} />
                </ThemeContext.Provider>
                <div>
                    <ThemedButton />
                </div>
            </div>
        );
    }
}
