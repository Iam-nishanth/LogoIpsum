import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './pages/AboutPage'
// import Map from './components/pages/RMPage'
// import ContactPage from './components/pages/ContactPage'


function App() {

  return (
    <Router>
      <Routes>
        <Route path='/about' element={<About />} />
      </Routes>
    </Router>

  )
}


export default App