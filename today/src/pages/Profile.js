import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { useCallback, useEffect, useState } from "react";
import { profileAction } from "../store/profile/actions";
import { FormControlLabel, FormGroup, Checkbox, TextField, Button} from "@mui/material"
import Send from '@mui/icons-material/Send';
import { getName } from "../store/selectors";
import { getAuth } from "firebase/auth";
import { addNewUserNameWithFB, addNewUserAgeWithFB, getProfileDataWithFB } from "../store/middleware";
import ProfileData from "../components/ProfileData";


const Profile = ()=>{
    const profileData = useSelector(getName, shallowEqual);
    const [value, setValue] = useState('');
    const [ageValue, setAgeValue] = useState('');
    const dispatch = useDispatch();
    const auth = getAuth();
    const userUID = auth.currentUser.uid
    
    const toogleShowName = useCallback( ()=>{
        dispatch(profileAction)
    }, [dispatch]
    )
    const getNewName = (event)=>{
        setValue(event.target.value)
    }
    const getNewAge = (event)=>{
        setAgeValue(event.target.value)
    }
    const addName = ()=>{
        if (value!==""){
            dispatch(addNewUserNameWithFB(userUID, value))
            setValue('')
        }
    }
    const addAge = ()=>{
        if (ageValue!==""){
            dispatch(addNewUserAgeWithFB(userUID, ageValue))
            setAgeValue('')
        }
    }

    useEffect(()=>{
        dispatch(getProfileDataWithFB(userUID));
    }, [])

    return (
        <div className="yourProfile">
            <div className="setName">
                <div>
                    <TextField label="Ваше имя" variant="standard" value={value} onChange={getNewName}/>
                    <Button variant="outlined" endIcon={<Send/>} onClick={addName}>Отправить</Button>
                </div><div>
                    <TextField label="Ваш возраст" variant="standard" value={ageValue} onChange={getNewAge}/>
                    <Button variant="outlined" endIcon={<Send/>} onClick={addAge}>Отправить</Button>
                </div>
            </div>
            <h2>Твой профайл</h2>
            <ProfileData/>
            <div>
                <FormGroup>
                    <FormControlLabel control={<Checkbox checked={profileData.showName} onChange={toogleShowName} />} label="Показать имя пользователя" />
                </FormGroup>
            </div>

        </div>
    )
}

export default Profile