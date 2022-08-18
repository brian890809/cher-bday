import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Card from './pages/card/card.page'
import Home from './pages/home/home.page'
import Container from '@mui/material/Container';
import React from 'react';
import theme from './theme/theme';
import {ThemeProvider} from '@mui/material/styles';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { bgColor: "#000000"}
  }
  componentDidMount = () => {
    setTimeout(() => this.setState({ bgColor: "#F5F5F5"}), 1500);
  }
  render() {
    return (
      <div className="App" style={{
        backgroundColor: this.state.bgColor
      }}>
      <div className="rectangle"/>
      <Container maxWidth='lg' disableGutters={true}>
        <ThemeProvider theme={theme}>
          <Router>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/card" element={<Card/>} />
            </Routes>
          </Router>
        </ThemeProvider>
      </Container>
      </div>
    );
  }
}

export default App;
