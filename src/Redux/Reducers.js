// init default data
const defaultReducer = {
	count: 0
};

const rootReducer = (state = defaultReducer, action) => {
	switch (action.type) {
		case 'INC_COUNT':
			// increment count
			return {
				...state,
				count: state.count + 1
			};
		case 'DEC_COUNT':
			// decrement count
			return {
				...state,
				count: state.count - 1
			};
		default:
			return state;
	}
};

export default rootReducer;
