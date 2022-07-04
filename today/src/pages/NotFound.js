import { Link } from "react-router-dom"

const NotFound = ()=>{
    return <div>
        <h2>Данная страница затерялась в анналах истории, вернитесь, пожалуйста, на главную</h2>
        <Link to="/home" className="navLink">Тык</Link>
    </div>
}

export default NotFound