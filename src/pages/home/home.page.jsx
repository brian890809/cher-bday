import React from 'react';
import Typography from '@mui/material/Typography';
import './home.page.css';
import { WovenImageList, Dots, Button } from '../../components';
import img4 from "./../../img4.jpg";
import img3 from "./../../img3.jpg";
import img5 from "./../../img5.jpg";
import img6 from "./../../img6.JPG";
import img7 from "./../../img7.jpg";
import img8 from "./../../img8.jpg";


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bgColor: "#000000",
            imageList: [img7, img3, img8, img6, img5, img4],
            display: true
        }
    }
    componentDidMount = () => setTimeout(() => {
            let root = document.getElementById('root')
            root.style.backgroundColor = "#F5F5F5"
            this.setState({
            display: false,
        })}, 1200);
    
    render() {
        return (
        <>
            {this.state.display ? <div className="rectangle" /> : null}
            <div div className="section" >
                <div className="happy-cher-day">
                    <Typography align="center" children="HAPPY CHER DAY!" variant="h2" sx={{ fontWeight: 'bold' }}></Typography>
                </div>
                <WovenImageList cols={3} gap={8} imageList={this.state.imageList} className="imgGrid"/>
                <Dots amount={3}/>
                <Typography align="center" className="blob" variant="body1">Let's walk through the memory lane that belongs to just you and me</Typography>
                <Button href="/card">proceed</Button>
            </div>
        </>  
        )
    }
}
export default Home;
