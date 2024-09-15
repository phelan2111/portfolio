import { Component } from 'react';
import View from './view';
type Props = {
	data?: unknown;
};
type State = {
	time?: number;
};
export default class Model extends Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {};
	}

	componentDidMount(): void {
		console.log('componentDidMount', this.state);
	}

	render() {
		return <View />;
	}
}
