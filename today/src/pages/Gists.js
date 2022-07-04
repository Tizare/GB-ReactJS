import { CircularProgress } from "@mui/material";
import { useCallback, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getAllGists } from "../store/gists/actions";
import { getGists, getGistsError, getGistsLoading } from "../store/selectors";

export const GistsList = () => {
    const dispatch = useDispatch();
    const {gists} = useSelector(getGists, shallowEqual);
    const error = useSelector(getGistsError, shallowEqual);
    const loading = useSelector(getGistsLoading, shallowEqual);

    const requestGists = () => {
        dispatch(getAllGists())
    };

    useEffect( () => {
        requestGists();
    }, []);

    const renderGist = useCallback(
        (gist) => <li key={gist.id}>{gist.description || "No description"}</li>, []
    );

    if (loading) {
        return <CircularProgress />;
    }

    return (
        <>
        <h2>Информация:</h2>
        <div>
            {error && (
            <div>
                <h3>Произошла ошибка</h3>
                <div>{gists}</div>
                <button onClick={requestGists}>Повторить запрос</button>
            </div>)}
            <ul>{gists.map(renderGist)}</ul>
        </div>
        </>
    )
    
};