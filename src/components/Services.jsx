import React from 'react'
import img1 from '../assets/3.jpg';
import img2 from '../assets/4.jpg';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Services = () => {
  return (
    <div >
        <Carousel 
            infiniteLoop 
            autoPlay 
            showStatus={false} 
            showArrows={false}
            showThumbs={false}
            // showIndicators={false}
            interval={3000}
        >
            <div>
                <img src={ img1 } alt="item1" />
                <p className='legend'>Full Stack</p>
            </div>
            <div>
                <img src={ img2 } alt="item2" />
                <p className='legend'>Peer-to-Peer Services</p>
            </div>
        </Carousel>
    </div>
  )
}

export default Services