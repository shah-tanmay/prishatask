export const initialState = {
	details: [],
};

const reducer = (state, action) => {
	switch (action.type) {
		case "SET_DETAILS":
			return { ...state, details: action.details };
		default:
			return state;
	}
};

export default reducer;
