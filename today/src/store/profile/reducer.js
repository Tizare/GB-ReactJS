import { CHANGE_NAME, PROFILE_ACTION, PROFILE_UPDATE } from "./actions";

const initialState = {
    showName: true,
}

const profileReducer = (state=initialState, action)=>{
    switch (action.type) {
        case PROFILE_UPDATE:
            return {...state,  [action.userUid]: action.data}
        case PROFILE_ACTION:
            return {...state, showName:!state.showName};

        case CHANGE_NAME:
            return {...state, name: action.payload}
        default: return state;
    }
}

export default profileReducer;