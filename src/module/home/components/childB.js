/**
 * Created by za-sumeng on 2018/11/7.
 */
import React, { Component } from "react";
import ContextChild from './contextChild';

class ChildB extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		const { parentFun } = this.props;
		console.log(this);
		parentFun(false);
	}

	render() {
		const { name, childClass } = this.props;

		return (
			<div className={childClass}>Hello, I'm child B
				<div>{`The extend value is ${name}`}</div>
				<ContextChild/>
			</div>
		);
	}
}

export default ChildB;