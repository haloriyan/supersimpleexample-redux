import React, { Component } from 'react';

// Urusan redux
import { connect } from 'react-redux';
import { increaseCount, decreaseCount } from '../Redux/Actions';

class Body extends Component {
	render() {
		return (
			<div>
				<div>
					<button onClick={this.props.handlePlus}>+</button>
					<button onClick={this.props.handleMinus}>-</button>
				</div>
			</div>
		);
	}
}

// buat ngambil data dari store
const mapStateToProps = (state) => {
	return {
		count: state.count
	};
};

// buat ngirim data ke store
const mapDispatchToProps = (dispatch) => {
	return {
		handlePlus: () => increaseCount(dispatch),
		handleMinus: () => decreaseCount(dispatch)
	};
};

// yang biasanya jadi gini
// export default Body

// ubah jadi begini
export default connect(mapStateToProps, mapDispatchToProps)(Body);
