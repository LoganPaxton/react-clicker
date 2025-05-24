import { createRoot } from 'react-dom/client'
import { ClickProvider } from './ClickContext.jsx'
import Clicker from '/src/Clicker.jsx'
import Codes from './Codes.jsx'
import Menu from './Menu.jsx'
import './App.css'
import { ContextHandler } from './ContextHandler.jsx'

const root = createRoot(document.getElementById("root"))

root.render(
  <main>
    <ContextHandler>
      <Clicker />
      <Codes />
      <Menu />
    </ContextHandler>
  </main>
)

