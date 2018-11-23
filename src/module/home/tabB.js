import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPostsIfNeeded } from "../../actions/asyncAciton";
import ChildB from './components/childB';
import ContextChild from './components/contextChild';

export const TestContext = React.createContext({
    propsA: '123'
});

@connect(state => {
        return {
            postsBySubreddit: state.postsBySubreddit,
            selectedsubreddit: state.selectedsubreddit
        }
    }, dispatch => ({
        fetchPostsIfNeeded: subreddit => dispatch( fetchPostsIfNeeded( subreddit ) )
    })
)
class TabB extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            //parentDefault: false,
            propsA: 'test 123',
            posts: []
        };
        console.log( this.state );
        console.log( this.props );
    }

    parentFun( parentDefault ) {
        this.setState( { parentDefault } );
    }

    componentDidMount() {
        this.renderFromFetch();
    }

    renderFromFetch() {
        const { fetchPostsIfNeeded } = this.props;
        fetchPostsIfNeeded( 'reactjs' )
            .then( (result = {}) => {
                console.log(result);
                const { posts = [] } = result;
                this.setState({ posts });
            } );
    }

    render() {
        const { posts } = this.state;

        return (
            <div>This is tab B
                {/*<ChildB name="pengtianhao" childClass="testclass" parentFun={this.parentFun.bind( this )}/>*/}
                {/*<div>{`The terminate is ${this.state.parentDefault}`}</div>*/}
                <div>
                    {
                        posts.map((item, idx) => {
                            return <div key={idx}>
                                <div>{item.title}</div>
                                <a href={item.url}>{item.url}</a>
                            </div>
                        })
                    }
                </div>
                <TestContext.Provider value={this.state}>
                    <ContextChild/>
                </TestContext.Provider>
            </div>
        );
    }
}

export default TabB;