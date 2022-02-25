import store from "../store"
import { useDispatch, useSelector } from "react-redux"
import { useCallback } from "react";
import { profileAction } from "../store/profile/action";
import { FormControlLabel, FormGroup, Checkbox} from "@mui/material"

const Profile = ()=>{
    const {showName, name, surname} = useSelector(state=>state);
    const dispatch = useDispatch();
    const toogleShowName = useCallback( ()=>{
        dispatch(profileAction)
    }, [dispatch]
    )

    return (
        <div className="yourProfile">
            <h2>Твой профайл</h2>
            <div> {showName ? name : "Некто"} {showName ? surname : ""} </div>
            <div>
                <FormGroup>
                    <FormControlLabel control={<Checkbox checked={showName} onChange={toogleShowName} />} label="Показать имя пользователя" />
                </FormGroup>
            </div>
        </div>
        )
}

export default Profile