import React, { Component } from 'react';
import { connect } from 'react-redux';

class AppLoading extends Component {
	static propTypes = {
	};

	render() {
		return (
			<div>Loading...</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		language: state.language,
	};
}

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(AppLoading);
