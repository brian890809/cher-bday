import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Card from './pages/card/card.page'
import Home from './pages/home/home.page'
import LoveLetter from './pages/love-letter/love-letter.page'
import React from 'react';
import theme from './theme/theme';
import {ThemeProvider} from '@mui/material/styles';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <ThemeProvider theme={theme}>
          <Router>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/card" element={<Card/>} />
              <Route path='/love-letter' element={<LoveLetter/>}/>
            </Routes>
          </Router>
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
