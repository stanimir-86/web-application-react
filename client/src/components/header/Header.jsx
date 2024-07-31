import { Link } from 'react-router-dom'


export default function Header() {

    return (
        <header>
            {/* Navigation */}
            <Link id="logo" to="/">
                <img id="logo" src="./images/modern-sunglasses-logo-vector-9786496.jpg" alt="img" />
            </Link>
            <nav>
                <div>
                    <Link to="/dashboard">Market</Link>
                </div>

                {/* Logged-in users */}
                <div className="user">
                    <Link to="/create">Sell</Link>
                    <Link to="/logout">Logout</Link>
                </div>

                {/* Guest users */}
                <div className="guest">
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </div>
            </nav>
        </header>
    )
}