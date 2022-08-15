import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Card from './pages/card/card.page'
import Home from './pages/home/home.page'

function App() {
  return (
    <div className="App">
      
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/card" element={<Card/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
