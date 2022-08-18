import React from 'react';
import {Image, IconButton} from './../../components'
import Grid from '@mui/material/Grid';

import img1 from "./../../img1.jpg";


const Card = () => {
    return (
        <div>
            <Grid container justifyContent="space-evenly" alignItems="center">
                <Grid item xs={1}>
                    <IconButton children="ChevronLeft" />
                </Grid>
                <Grid item xs={10}>
                    <Image src={img1} rounded />
                </Grid>
                <Grid item xs={1}>
                    <IconButton children="ChevronRight" />
                </Grid>
            </Grid>
            {/* <IconButton children="ChevronLeft"/> */}
        </div>
    )
}

export default Card;
