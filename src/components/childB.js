/**
 * Created by za-sumeng on 2018/11/7.
 */
import React, { Component } from "react";

class ChildB extends Component {
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
			</div>
		);
	}
}

export default ChildB;