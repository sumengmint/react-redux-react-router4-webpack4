import React, { Component } from "react";
import { connect } from "react-redux";
import {selectSubreddit} from "../actions/asyncAciton";
import {openModel} from "../actions/modelAction";
import Debounce from "./debounce";
import Throttle from "./throttle";
import Model from './model';
import ModelWithRedux from './modelWithRedux';

class TabA extends Component {
    constructor(props) {
        super(props);
        this.modelObj = {};
    }

    componentDidMount() {
        const { selectSubreddit } = this.props;
        selectSubreddit('sumeng');
    }

    getModel(ref) {
        this.modelObj = ref;
    }

    openModel(callback) {
        this.modelObj.open(callback);
    }

    templateEvent() {
        console.log('clicked me');
    }

    openModelWithRedux(callback) {
        this.props.openModel();
    }

    render() {
        const template = () => {
            return (<div onClick={this.templateEvent.bind(this)}>This is a template, try to click me</div>)
        };
        const templateStr = template();

        return (
            <div className='tab-a-container'>
                <p>This is tab A， please input values：</p>
                <div>函数防抖
                    <Debounce/>
                </div>
                <div>函数节流
                    <Throttle/>
                </div>
                <div onClick={this.openModel.bind(this, () => {console.log('callback')})}>open the model</div>
                <Model model={this.getModel.bind(this)} template={templateStr}/>

                <div onClick={this.props.openModel}>open the modelWithRedux</div>
                <ModelWithRedux template={templateStr}/>
            </div>
        );
    }
}

export default connect(
    state => {
        console.log(state);
        return state
    },
    dispatch => ({
        selectSubreddit: arg => dispatch(selectSubreddit(arg)),
        openModel: () => dispatch(openModel())
    })
)(TabA);