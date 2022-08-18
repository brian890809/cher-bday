import React from 'react';
import { Typography } from '@mui/material';
import './home.page.css';
import { WovenImageList } from '../../components';
import img4 from "./../../img4.jpg";
import img3 from "./../../img3.jpg";
import img5 from "./../../img5.jpg";
import img6 from "./../../img6.JPG";
import img7 from "./../../img7.jpg";
import img8 from "./../../img8.jpg";

const imageList = [img7, img3, img8, img6, img5, img4]

const Home = () => {
    return (
        <>
                <div className="section">
                    <div className="happy-cher-day">
                        <Typography align="center" children="HAPPY CHER DAY!" variant="h2" sx={{ fontWeight: 'bold' }}></Typography>
                    </div>
                    <WovenImageList cols={3} gap={8} imageList={imageList} className="imgGrid" />
                </div>
            {/* <div className="section">
            
        </div> */}
        </>
    )
}

export default Home
