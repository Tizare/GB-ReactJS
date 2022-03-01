import { CHANGE_NAME, PROFILE_ACTION } from "./actions";

const initialState = {
    showName: true,
    name: "странник",
}

const profileReducer = (state=initialState, action)=>{
    switch (action.type) {
        case PROFILE_ACTION:
            return {...state, showName:!state.showName};

        case CHANGE_NAME:
            return {...state, name: action.payload}
        default: return state;
    }
}

export default profileReducer;