import React from "react";
import { Grid } from "@mui/material"
import './dots.styles.css'

class Dots extends React.Component {
	render() {
		var amount = this.props.amount?this.props.amount:3;
		return (
			<Grid container spacing={3}>
				{
					Array(amount).fill().map(() => (
						<Grid item xs={12}>
							<div className="dot" />
						</Grid>
					))
				}
			</Grid>
		)
	}
}

export default Dots
