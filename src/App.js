// import logo from './logo.svg';
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";
import img4 from "./img4.jpg";

import './App.css';
import { Typography, Grid } from '@mui/material';

function App() {
  return (
    <div className="App">
      <div className="rectangle"></div>

      {/* <header className="App-header"> */}
      {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
        Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
        >
        Learn React
      </a> */}
      {/* </header> */}
      <div className="happy-cher-day">
        <Typography children="Happy" variant="h2"></Typography>
        <Typography children="Cher" variant="h2"></Typography>
        <Typography children="Day !" variant="h2"></Typography>
      </div>
      <Grid container spacing={0} className="gridContainer" columns={36}>
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
      </Grid>
    </div>
  );
}

export default App;
