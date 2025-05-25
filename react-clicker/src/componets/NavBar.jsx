import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <nav id="NavBar">
            <Link id="link" to="/">Home</Link>
            <Link id="link" to="/upgrades">Upgrade List</Link>
        </nav>
    )
}