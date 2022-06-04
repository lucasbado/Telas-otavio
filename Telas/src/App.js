import Adm from './Pag/Adm.js'
import Home from './Pag/Home.js'

import {BrowserRouter, Routes,Route} from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="adm" element={<Adm/>}/>
    </Routes>
  </BrowserRouter>
  )
}