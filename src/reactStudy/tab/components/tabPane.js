/**
 * Created by za-sumeng on 2018/11/22.
 */
import React, { Component } from 'react';

class TabPane extends Component {
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

    render() {
        return <div>my tab test</div>
    }
}

export default TabPane;