import { Link } from "react-router-dom"

const Navbar = () => {
    return(
        <nav>
            <Link to ='/'>Home </Link>
            <Link to ='/login'>Login </Link>
            <Link to ='/signin'>Sign in </Link>
            <Link to ='/wallet'>Wallet </Link>
            <hr />
        </nav>

    )
}

export default Navbar;