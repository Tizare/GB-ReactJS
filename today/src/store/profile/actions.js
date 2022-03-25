export const PROFILE_CREATE = "PROFILE_CREATE"
export const PROFILE_ACTION = "PROFILE_ACTION";
export const CHANGE_NAME = "PROFILE::CHANGE_NAME";

export const profileCreate = (email, password) => ({
    type: PROFILE_CREATE,
    email, password
})

export const profileAction = {
    type: PROFILE_ACTION
}

export const changeName = (value) => ({
    type: CHANGE_NAME,
    payload: value
})