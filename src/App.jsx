
import { Navbar } from './Components'
import { Hero, Maquinaria, Recetas, Reportes, Personal, Inventario } from './sections'
import { Routes, Route } from 'react-router-dom'
import './App.css'



function App() {

  return (
    <main className='bg-b-dark '>
      <Navbar />
      
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/hero' element={<Hero />} />
        <Route path='/maquinaria' element={<Maquinaria />} />
        <Route path='/recetas' element={<Recetas />} />
        <Route path='/reportes' element={<Reportes />} />
        <Route path='/Personal' element={<Personal />} />
        <Route path='/inventario' element={<Inventario />} />

      </Routes>
    </main>

  )
}

export default App
