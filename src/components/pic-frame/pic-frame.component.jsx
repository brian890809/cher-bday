import React from 'react';
import Box from '@mui/material/Box';
import {frameStyles} from './pic-frame.styles';
import './pic-frame.styles.css'
import { css } from '@emotion/react'

export default class Image extends React.Component {
    render() {
        const rounded = this.props.rounded?"rounded":"square"
        const className = `imageFrameBase ${rounded}`
        return (
            <Box
                component="img"
                className={className}
                // css={() => frameStyles(rounded)}
                src={this.props.src}
                {...this.props}
            />

        )
    }
}
