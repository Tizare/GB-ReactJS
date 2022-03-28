import { Button, TextField} from "@mui/material";
import { useState } from "react"
import firebase from "../services/firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/AuthProvider";
import { useDispatch } from "react-redux";
import { addNewUserWithFB, getProfileDataWithFB} from "../store/middleware";

const Registration = () => {
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const authLogin = useAuth();
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    const makeUser = () => {
        dispatch(addNewUserWithFB(email, password))
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        try {
           const auth = getAuth(firebase)
           await createUserWithEmailAndPassword(auth, email, password);
           await authLogin.signin({email, password}, ()=>{
            navigate(from, {replase: true})})
        } catch (e) {
            setError(e.message);
            console.log(e)
        }
        makeUser();
        dispatch(getProfileDataWithFB())
    }
        
    return(
        <div>
            <form className="registrationForm" onSubmit={handleSubmit}>
                <h2>Регистрация пользователя</h2>
                <TextField autoFocus  type="email" name="email"  label="Ваш email" variant="outlined" margin="normal" valid={email} onChange={handleEmail} />
                <TextField  type="password" name="password"  label="Введите пароль" variant="outlined" margin="normal" valid={password} onChange={handlePassword} />
                {error && <div className="errorMessage">{error}</div>}
                <Button type="submit">Зарегистрироваться</Button>
                <p>Если у Вас уже есть аккаунт, войдите в него.<br/> <Link className="navLink" to={"/login"}>Войти</Link></p>
            </form>
        </div>
    )
}

export default Registration;