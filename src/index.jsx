import { createRoot } from 'react-dom/client'
import Clicker from '/src/Clicker.jsx'
import Codes from './Codes.jsx'
import './App.css'
import { ClickProvider } from './ClickContext.jsx'

const root = createRoot(document.getElementById("root"))

root.render(
  <main>
    <ClickProvider>
      <Clicker />
      <Codes />
    </ClickProvider>
  </main>
)

