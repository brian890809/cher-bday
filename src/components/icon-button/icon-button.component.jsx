import React from 'react';
import { IconButton as MuiIconButton} from '@mui/material'
import * as Icons from 'react-feather';

export default class IconButton extends React.Component {
    render() {
        const {children, ...props } = this.props;
        const Icon = Icons[children]
        return (
            <MuiIconButton {...props}>
                <Icon/>
            </MuiIconButton>
        )
    }
}
