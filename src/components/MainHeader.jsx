
import { Link } from "react-router-dom";

function Header() {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container">

                <Link className="navbar-brand" to="/">
                    Film App
                </Link>

            </div>
        </nav>
    );
}

export default Header;