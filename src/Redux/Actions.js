export const increaseCount = (dispatch) => {
	dispatch({
		type: 'INC_COUNT'
	});
};

export const decreaseCount = (dispatch) => {
	dispatch({
		type: 'DEC_COUNT'
	});
};
