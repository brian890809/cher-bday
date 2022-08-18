import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Image from './../pic-frame/pic-frame.component'

export default class WovenImageList extends React.Component {
    render() {
        var imageList = this.props.imageList;
        return (
            <ImageList variant="woven" cols={this.props.cols} gap={this.props.gap}>
                {imageList.map((imageItem) => (
                    <ImageListItem>
                        <Image rounded src={imageItem}/>
                    </ImageListItem>
                ))}
            </ImageList>
        )
    }
}
