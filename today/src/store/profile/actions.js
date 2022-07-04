export const PROFILE_UPDATE = "PROFILE_UPDATE"
export const PROFILE_ACTION = "PROFILE_ACTION";
export const CHANGE_NAME = "PROFILE::CHANGE_NAME";

export const profileUpdate = (userUid, data) => ({
    type: PROFILE_UPDATE,
    userUid, data
})

export const profileAction = {
    type: PROFILE_ACTION
}

export const changeName = (value) => ({
    type: CHANGE_NAME,
    payload: value
})