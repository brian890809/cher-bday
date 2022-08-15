import './App.css';
import { Typography, Grid } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Card from './pages/card/card.page'

function App() {
  return (
    <div className="App">
      
    <Router>
      <Routes>
        <Route path="/" element={<Card/>} />
        <Route path="/card" element={<Card/>} />
      </Routes>
    </Router>
      <div className="rectangle"></div>
      <div className="happy-cher-day">
        <Typography children="Happy" variant="h2"></Typography>
        <Typography children="Cher" variant="h2"></Typography>
        <Typography children="Day !" variant="h2"></Typography>
      </div>
      {/* <Grid container spacing={0} className="gridContainer" columns={36}>
        <Grid item xs={23}>
          <img src={img1} className="horizontal"/>
        </Grid>
        <Grid item xs={13}>
          <img src={img2} className="vertical"/>
        </Grid>
        <Grid item xs={13}>
          <img src={img3} className="vertical"/>
        </Grid>
        <Grid item xs={23}>
          <img src={img4} className="horizontal"/>
        </Grid>
      </Grid> */}
    </div>
  );
}

export default App;
