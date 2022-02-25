import { PROFILE_ACTION } from "./action";

const initialState = {
    showName: true,
    name: "Alex",
    surname: "Pilozharov"
}

const profileReducer = (state=initialState, action)=>{
    switch (action.type) {
        case PROFILE_ACTION:
            return {...state, showName:!state.showName}
            default: return state;
    }
}

export default profileReducer;