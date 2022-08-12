import React from 'react';
import { IconButton as MuiIconButton} from '@mui/material'
import * as Icons from 'react-feather';

export default class IconButton extends React.Component {
    render() {
        const Icon = Icons[this.prop.children]
        return (
            <MuiIconButton>
                <Icon/>
            </MuiIconButton>
        )
    }
}
