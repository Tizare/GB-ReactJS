import { Button, TextField} from "@mui/material";
import { useState } from "react"
import firebase from "../services/firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";

const Registration = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError();
        try {
           const auth = getAuth(firebase)
           await createUserWithEmailAndPassword(auth, email, password); 
        } catch {
            console.log(error)
            setError(error.message);
        }
    }

    return(
        <div>
            <form className="registrationForm" onSubmit={handleSubmit}>
                <h2>Регистрация пользователя</h2>
                <TextField autoFocus  type="email" name="email"  label="Ваш email" variant="outlined" margin="normal" value={email} onChange={handleEmail} />
                <TextField  type="password" name="password"  label="Введите пароль" variant="outlined" margin="normal" value={password} onChange={handlePassword} />
                {error && <div>{error}</div>}
                <Button type="submit">Зарегистрироваться</Button>
                <p>Если у Вас уже есть аккаунт, войдите в него.<br/> <Link className="navLink" to={"/login"}>Войти</Link></p>
            </form>
        </div>
    )
}

export default Registration;