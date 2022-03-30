const ProfileData = (props) =>{
    const profileData = props.profileData

    if (profileData[props.uid]) {
        return (
            <div className="yourProfileData">
                <div>Ваше имя:  {profileData.showName ? profileData[props.uid].name : "Некто"} </div>
                <div>Ваш email:  {profileData[props.uid].email} </div>
                <div>Ваш возраст:  {profileData[props.uid].age} </div>
            </div>
        )
    } else return <div>Данные обновляются</div>
}

export default ProfileData