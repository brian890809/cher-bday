import React from 'react';
import { Box } from '@mui/material'
import {frameStyles} from './pic-frame.styles';
import './pic-frame.styles.css'

// import img1 from '../../../src/img1.jpg';

export default class Image extends React.Component {
    render() {
        const rounded = this.props.rounded?"rounded":"square"
        const className = `imageFrameBase ${rounded}`
        return (
            <Box
                className={className}
                css={(theme) => frameStyles(theme, rounded)}
                component="img"
                src={this.props.imgSrc}
            />

        )
    }
}
