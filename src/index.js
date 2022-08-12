import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { IconButton } from '@mui/material'
import * as Icons from 'react-feather';

// import IconButton from './components/icon-button/icon-button.component'

// import Image from './components/pic-frame/pic-frame.component';
// import WovenImageList from './components/image-list/image-list.component';
// import img1 from "./img1.jpg";
// import img2 from "./img2.jpg";
// import img3 from "./img3.jpg";
// import img4 from "./img4.jpg";

// const imageList = [img2, img1, img3, img4, img2, img3].map(img => {
//   return ({imgSrc: img})
// });
const Icon = Icons["ChevronRight"]
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <IconButton children={<Icon/>}/>
    {/* <Image src={img1} rounded/> */}
    {/* <WovenImageList cols={3} gap={8} imageList={imageList}/> */}
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
