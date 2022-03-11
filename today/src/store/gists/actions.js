import { API_URL_Public } from "../../components/constants";

export const GET_GISTS = "GISTS::GET_GITST";
export const GET_GISTS_REQUEST = "GISTS::GET_GISTS_REQUEST";
export const GET_GISTS_SUCCESS = "GISTS::GET_GISTS_SUCCESS";
export const GET_GISTS_FAILURE = "GISTS::GET_GISTS_FAILURE";

export const getGists = () =>({
    type: GET_GISTS,
})

export const getGistsRequest = () =>({
    type: GET_GISTS_REQUEST,
})

export const getGistsSuccess = (data) =>({
    type: GET_GISTS_SUCCESS,
    payload: data,
})

export const getGistsFailure = (err) =>({
    type: GET_GISTS_FAILURE,
    payload: err,
})

export const getAllGists = () => async(dispatch) => {
    dispatch(getGistsRequest());
    try {
        const res = await fetch(API_URL_Public);
        if (!res.ok) {
            throw new Error(`Запрос выдал следующий статус: ${res.status}`);
        }
        const result = await res.json();
        dispatch(getGistsSuccess(result));
    } catch (err) {
        dispatch(getGistsFailure(err.message))
    }
};
