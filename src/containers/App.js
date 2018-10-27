import React, {Component} from 'react';

class App extends Component {
	render() {
		return (
			<div>
				<div id="page-wrapper" className="page-wrapper" >{this.props.children}</div>
			</div>
		);
	}
}

export default App;
