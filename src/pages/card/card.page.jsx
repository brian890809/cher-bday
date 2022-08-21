import React from 'react';
import {Image, IconButton, Pagination} from './../../components'
import Grid from '@mui/material/Grid';
import './card.styles.css'
import Carousel from 'react-material-ui-carousel'
import {pageStyle} from './card.styles'
import { css } from '@emotion/react'
import img1 from "./assets/img1.jpg";

const Card = () => {
    const imageList = [{img1}, img1, img1]

    return (
        <div className="card">
            <Carousel autoPlay={false} navButtonsAlwaysVisible={true} height={500}
            NextIcon={<IconButton color="primary" children="ChevronRight" />}
            PrevIcon={<IconButton children="ChevronLeft" />}
            navButtonsProps={{          // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
                style: {
                    backgroundColor: "transparent",
                    borderRadius: 0
                }
            }}
            classes="carousel"
            sx={{maxWidth: '300px', height: '100%'}} 
            >
                <div>
                    <Image src={img1} rounded/>
                    <h3>hello</h3>
                </div>
                <Image src={img1} rounded/>
                <Image src={img1} rounded/>
            </Carousel>
            {/* <Grid container justifyContent="space-evenly" alignItems="center">
                <Grid item xs={1}>
                    <IconButton children="ChevronLeft" />
                </Grid>
                <Grid item xs={10}>
                    <Image src={img1} rounded />
                </Grid>
                <Grid item xs={1}>
                    <IconButton children="ChevronRight" />
                </Grid>
            </Grid> */}
            <Pagination className="pagination prev" children="Home" href="/"/>
            <Pagination className="pagination next" next children="Love Letter" href="/love-letter"/>
            {/* <IconButton children="ChevronLeft"/> */}
        </div>
    )
}

export default Card;
