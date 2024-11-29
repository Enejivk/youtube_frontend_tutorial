import {Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Resume from './pages/Resume'
import Portfolio from './pages/Portfolio'


const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/resume' element={<Resume />} />
            <Route path='/portfolio' element={<Portfolio />} />
        </Routes>
    )
}

export default App
