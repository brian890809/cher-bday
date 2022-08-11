import React from 'react';
import { Box } from '@mui/material'
import {frameStyles} from './pic-frame.styles';
import './pic-frame.styles.css'
import { jsx, css } from '@emotion/react'

// import img1 from '../../../src/img1.jpg';

export default class Image extends React.Component {
    render() {
        const rounded = this.props.rounded?"rounded":"square"
        const className = `imageFrameBase ${rounded}`
        return (
            <Box
                component="img"
                className={className}
                // css={(theme) => frameStyles(theme, rounded)}
                src={this.props.src}
                {...this.props}
            />

        )
    }
}
