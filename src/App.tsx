
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Layout from './components/Layout'
import Homepage from './components/Homepage'
import GlowingText from './components/GlowingText.tsx'
import Contact from './components/Contact'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Homepage/>}></Route>
          <Route path='contact' element={<Contact/>}></Route>
          <Route path='glow' element={<GlowingText/>}></Route>
          <Route path='*' element={<>ERROR</>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
