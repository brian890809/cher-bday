import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {Pagination} from './../../components'
import './love-letter.styles.css';
import { data } from './love-letter.data'

export default class LoveLetter extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {return(
        <div className="love-letter">
            <Container maxWidth='md'>
                <Typography variant="h3" className="title" children={data.title}/>
                <Typography variant="body1" className="body" children={data.body} />
                <Typography variant="body1" className="body" children={data.body2} />
                <Typography variant="body1" className="body" children={data.body3} />
                <Typography align="right" variant="body1" className="body" children={data.signature} />
                <Typography align="center" variant="h4" className="title" children={data.motto} />
            </Container>
            <Pagination sx={{color: 'black'}} className="pagination prev" children="Cards" href="/card"/>
        </div>
    )}
}
