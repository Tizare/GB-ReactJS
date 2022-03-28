import { getAuth } from "firebase/auth";
import { shallowEqual, useSelector } from "react-redux"
import { getName } from "../store/selectors"

const ProfileData = () =>{
    const profileData = useSelector(getName, shallowEqual);
    const auth = getAuth();
    const userUID = auth.currentUser.uid;

    if (profileData[userUID]) {
        return (
            <div className="yourProfileData">
                <div>Ваше имя:  {profileData.showName ? profileData[userUID].name : "Некто"} </div>
                <div>Ваш email:  {profileData[userUID].email} </div>
                <div>Ваш возраст:  {profileData[userUID].age} </div>
            </div>
        )
    } else return <div>Данные обновляются</div>
}

export default ProfileData