import { Link } from "react-router-dom"

const NotFound = ()=>{
    return <div>
        <div>Данная страница затерялась в анналах истории, вернитесь, пожалуйста, на главную</div>
        <Link to="/home">Тык</Link>
    </div>
}

export default NotFound