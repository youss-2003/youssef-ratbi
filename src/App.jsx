
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Accueil from './pages/Accueil'
import Error from './pages/Error'
import Contacts from './pages/Contacts'

function App() {
 
  return <>
  <Routes>
    <Route path="/" element={<Accueil></Accueil>} />
    <Route path="/contacts" element={<Contacts></Contacts>} />
    <Route path="/*" element={<Error></Error>} />
  </Routes>
  </>
}

export default App
