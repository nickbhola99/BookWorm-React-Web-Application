import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'
//navbar component
export default function Navbar() {
    return(
        <div className="navbar">
            <div className="nav_item">
                <Link to="/">
                <FontAwesomeIcon icon={faBook} /> BookWorm
                </Link>
            </div>
        </div>
    )
}