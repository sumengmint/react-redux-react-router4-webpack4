/**
 * Created by za-sumeng on 2018/11/22.
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Tab extends Component {
    constructor(props) {
        super(props);

        const currProps = this.props;
        let activeIndex = 0;

        if('activeIndex' in currProps) {
            activeIndex = currProps.activeIndex;
        }
        else if('defaultActiveIndex' in currProps) {
            activeIndex = currProps.defaultActiveIndex;
        }

        this.state = {
            activeIndex,
            prevIndex: activeIndex
        }
    }

    componentDidMount() {
        const dom = ReactDOM.findDOMNode(this);
        console.log(dom);
    }

    componentWillReceiveProps(nextprops) {
        console.log('nextprops');
    }

    render() {
        return <div>my tab test</div>
    }
}

export default Tab;