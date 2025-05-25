import { ContextHandler } from '../componets/contexts/ContextHandler.jsx'
import Clicker from '../componets/Clicker.jsx'
import Codes from '../componets/Codes.jsx'
import Menu from '../componets/Menu.jsx'
import NavBar from '../componets/NavBar.jsx'

export default function Main() {
    return (
        <main>
            <NavBar />
            <ContextHandler>
                <Clicker />
                <Codes />
                <Menu />
            </ContextHandler>
        </main>
    )
}