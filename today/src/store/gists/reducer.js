import { GET_GISTS_FAILURE, GET_GISTS_REQUEST, GET_GISTS_SUCCESS } from "./actions";

const initialState = {
    gists: [],
    request: 0,
    error: null,
};

const gistsRudecer = (state = initialState, action) => {
    switch (action.type) {
        case GET_GISTS_REQUEST:
            return {
                ...state, request: true, success: false, error: false
            };
        case GET_GISTS_SUCCESS:
            return {
                ...state, gists: action.payload, request: false, success: true, error: false
            };
        case GET_GISTS_FAILURE:
            return {
                ...state, gists: [action.payload], request: false, success: false, error: true
            }
        default:
            return state;
    }
}

export default gistsRudecer;