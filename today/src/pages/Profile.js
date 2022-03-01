import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { useCallback, useState } from "react";
import { changeName, profileAction } from "../store/profile/actions";
import { FormControlLabel, FormGroup, Checkbox, TextField, Button} from "@mui/material"
import Send from '@mui/icons-material/Send';
import { getName } from "../store/selectors";


const Profile = ()=>{
    const {showName, name} = useSelector(getName, shallowEqual);
    const [value, setValue] = useState('');
    const dispatch = useDispatch();
    
    const toogleShowName = useCallback( ()=>{
        dispatch(profileAction)
    }, [dispatch]
    )
    const getNewName = (event)=>{
        setValue(event.target.value)
    }
    const addName = ()=>{
        dispatch(changeName(value))
    }

    return (
        <div className="yourProfile">
            <div className="setName">
                <TextField id="standard-basic" label="Ваше имя" variant="standard" valid={value} onChange={getNewName}/>
                <Button variant="outlined" endIcon={<Send/>} onClick={addName}>Отправить</Button>
            </div>
            <h2>Твой профайл</h2>
            <div> {showName ? name : "Некто"} </div>
            <div>
                <FormGroup>
                    <FormControlLabel control={<Checkbox checked={showName} onChange={toogleShowName} />} label="Показать имя пользователя" />
                </FormGroup>
            </div>

        </div>
        )
}

export default Profile