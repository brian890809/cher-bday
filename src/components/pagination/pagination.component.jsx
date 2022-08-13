import React from 'react';
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography"
import * as Icons from 'react-feather';

export default class Pagination extends React.Component {
    render() {
        const {next, child, ...props } = this.props;
        const Icon = (next===true) ? Icons["ArrowRight"]:Icons["ArrowLeft"];
        const title = <Typography>{child}</Typography>
        return (
            <Button>
                {next===true?<>{title}<Icon/></>:<><Icon/>{title}</>}
            </Button>
        )
    }
}