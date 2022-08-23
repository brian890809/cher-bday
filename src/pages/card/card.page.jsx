import React from 'react';
import {Image, IconButton, Pagination} from './../../components'
import Typography from '@mui/material/Typography';
import './card.styles.css'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {pageStyle} from './card.styles'
import { css } from '@emotion/react'

import { data } from './images-descript-bg'
class Card extends React.Component  {
    constructor(props) {
        super(props);
    }
    imageCarousel = (imgObj) => {
        return(
        <>
            <div className="carouselImg">
                <Image src={imgObj.src} sx={{maxWidth: '80vh', maxHeight: '70vh', margin: 'auto',}} rounded/>
            </div>
            <Typography variant="subtitle1" children={imgObj.children} align="center"/>
        </>
    )}
    changeBG = (prevIndex, nextIndex) => {
        let cardElement = document.getElementById("card");
        cardElement.style.background = data[nextIndex].bgColor;
    }
    settings = {
        arrows: "false",
        className: 'slider-settings',
        fade: true,
        dots: true,
        slidesToShow: 1,
        adaptiveHeight: true,
        beforeChange: this.changeBG,
    }
    render() {
        return (
            <div id="card">
                <Slider {...this.settings}>
                    {data.map(imgObj =>this.imageCarousel(imgObj))}
                </Slider>
                <Pagination sx={{color: 'black'}} className="pagination prev" children="Home" href="/"/>
                <Pagination sx={{color: 'black'}} className="pagination next" next children="Love Letter" href="/love-letter"/>
                {/* <IconButton children="ChevronLeft"/> */}
            </div>
        )
    }
}

export default Card;
