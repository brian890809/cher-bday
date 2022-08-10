import { Button as MuiButton } from "@mui/material";
import React from "react";

class Button extends React.Component {
    render() {
        return <MuiButton variant="contained" {...this.props}/>;
    }
}

export default Button
