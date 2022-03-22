import { Button, TextField} from "@mui/material";
import { useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/AuthProvider";

const Login = () => {
    let navigate = useNavigate();
    let location = useLocation();
    const auth = useAuth()
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();

    let from = location.state?.from?.pathname || "/";

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError();
        try{
            await auth.signin({email, password}, ()=>{
                navigate(from, {replase: true});
    
            });
        } catch (e) {
            setError(e);
            console.error(e)
        }
        
    }

    return(
        <div>
            <form className="registrationForm" onSubmit={handleSubmit}>
                <h2>Войти в профиль:</h2>
                <TextField autoFocus  type="email" name="email"  label="Введите Ваш email" variant="outlined" margin="normal" value={email} onChange={handleEmail} />
                <TextField  type="password" name="password" label="Введите Ваш пароль" variant="outlined" margin="normal" value={password} onChange={handlePassword} />
                {error && <div>{error}</div>}
                <Button type="submit">Войти</Button>
                <p>Если у Вас нет аккаунт, вернитесь на страницу регистрации.<br/> <Link className="navLink" to={"/registration"}>Вернуться</Link></p>
            </form>
        </div>
    )
}

export default Login;