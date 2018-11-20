import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPostsIfNeeded } from "../actions/asyncAciton";
import ChildB from './childB';
import ContextChild from './contextChild';

export const TestContext = React.createContext({
    propsA: '123'
});

class TabB extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            //parentDefault: false,
            propsA: 'test 123'
        };
        console.log( this.state );
        console.log( this.props );
    }



    parentFun( parentDefault ) {
        this.setState( { parentDefault } );
    }

    // componentDidMount() {
    //     const { fetchPostsIfNeeded } = this.props;
    //     //fetchPostsIfNeeded( 'reactjs' ).then( () => console.log( store.getState() ) );
    // }

    render() {
        console.log(this.state);
        return (
            <div>This is tab B
                {/*<ChildB name="pengtianhao" childClass="testclass" parentFun={this.parentFun.bind( this )}/>*/}
                {/*<div>{`The terminate is ${this.state.parentDefault}`}</div>*/}
                <TestContext.Provider value={this.state}>
                    <ContextChild/>
                </TestContext.Provider>
            </div>
        );
    }
}

export default connect(
    state => {
        return {
            postsBySubreddit: state.postsBySubreddit,
            selectedsubreddit: state.selectedsubreddit
        }
    },
    dispatch => ({
        fetchPostsIfNeeded: ( subreddit ) => dispatch( fetchPostsIfNeeded( subreddit ) )
    })
)( TabB );