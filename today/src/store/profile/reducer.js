import { CHANGE_NAME, PROFILE_ACTION, PROFILE_CREATE } from "./actions";

const initialState = {
    showName: true,
    name: "странник",
    email: "",
    age: "многие лета",
    password: '',

}

const profileReducer = (state=initialState, action)=>{
    switch (action.type) {
        case PROFILE_CREATE:
            return {...state, email: action.email, password: action.password}
        case PROFILE_ACTION:
            return {...state, showName:!state.showName};

        case CHANGE_NAME:
            return {...state, name: action.payload}
        default: return state;
    }
}

export default profileReducer;