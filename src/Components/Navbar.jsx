import { Link } from 'react-router-dom'
import '../Styles/Components/navbar.css'


const Navbar = () => {
    return (
        <ul className="menu">
            <li>
                <Link className="link" to="/">Home</Link>
            </li>
            <li>
                <Link className="link" to="/momsin">Conheça a Trilha MOMsIN</Link>
            </li>
            <li>
                <Link className="link" to="/parentsin">Conheça a parentsIN</Link>
            </li>
            <li>
                <Link className="link" to="/vagas">Vagas</Link>
            </li>
            <li>
                <Link className="link" to="/cursos">Cursos</Link>
            </li>
            <li>
                <Link className="link" to="/eventos">Eventos</Link>
            </li>
        </ul>

    )

}

export default Navbar