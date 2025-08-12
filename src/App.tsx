import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import { Home } from './components/home';
import { About } from './components/about';
import { Rules } from './components/rules';
import { Cards } from './components/cards';

function App() {
  return (
    <>
      <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/rules" element={<Rules />} />
            <Route path="/cards" element={<Cards />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
