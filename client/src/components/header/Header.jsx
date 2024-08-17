
import { Link } from 'react-router-dom'
import { useAuthContext } from '../../contexts/AuthContext.jsx'


export default function Header() {
    const { isAuthenticated, email } = useAuthContext();
    return (
        <header>
            <Link id="logo" to="/">
                <img id="logo" src="./images/modern-sunglasses-logo-vector-9786496.jpg" alt="img" />
            </Link>
            <nav>
                <div>
                    <Link to="/sunglasses">Sunglasses</Link>
                </div>
                {isAuthenticated
                    ? (
                        <div className="user">
                            <Link to="/sunglasses/create">Create Sunglasses</Link>
                            <Link to="/logout">Logout Here</Link>
                        </div>
                    )
                    : (
                        <div className="guest">
                            <Link to="/login">Login</Link>
                            <Link to="/register">Register</Link>
                        </div>
                    )
                }
            </nav>
        </header>
    )
}