


export default function Header() {

    return (
        <header>
            {/* Navigation */}
            <a id="logo" href="#">
                <img id="logo" src="./images/modern-sunglasses-logo-vector-9786496.jpg" alt="img" />
            </a>
            <nav>
                <div>
                    <a href="#">Market</a>
                </div>

                {/* Logged-in users */}
                <div className="user">
                    <a href="#">Sell</a>
                    <a href="#">Logout</a>
                </div>

                {/* Guest users */}
                <div className="guest">
                    <a href="#">Login</a>
                    <a href="#">Register</a>
                </div>
            </nav>
        </header>
    )
}