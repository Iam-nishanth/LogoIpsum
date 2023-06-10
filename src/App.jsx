import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './pages/AboutPage'
import Contact from './pages/ContactPage'
// import Map from './components/pages/RMPage'
// import ContactPage from './components/pages/ContactPage'


function App() {

  return (
    <Router>
      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Router>

  )
}


export default App