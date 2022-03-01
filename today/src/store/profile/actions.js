export const PROFILE_ACTION = "PROFILE_ACTION";
export const CHANGE_NAME = "PROFILE::CHANGE_NAME";


export const profileAction = {
    type: PROFILE_ACTION
}

export const changeName = (value) => ({
    type: CHANGE_NAME,
    payload: value
})