import React from 'react';
import './Destination.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Col, Container, Row } from 'react-bootstrap';

const Destination = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 100,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div >
        <div className="des-heading" id="destination">
            <h5>Find a Tour by</h5>
        <h1>DESTINATION</h1>
        </div>
        <div className="destiation-section mx-5 ">
            
             <Container>
                 <Row>
                     <Col className="mb-5">
            <Slider {...settings}>
            <div className="des-title">
                <h5>SAINT MARTIN</h5>
                <img  src="https://media.istockphoto.com/photos/philisburg-sint-maarten-picture-id475981016?b=1&k=20&m=475981016&s=170667a&w=0&h=VpzhsttKmmtCRIn69Mw4x1US1_ULXznNLC6IavNzChU="alt=""  />
            </div>
          
            <div  className="des-title ">
                <h5 >COX BAZAR</h5>
                <img src="https://media.istockphoto.com/photos/art-of-the-sky-at-coxs-bazar-bangladesh-picture-id1277941178?b=1&k=20&m=1277941178&s=170667a&w=0&h=sfChfwPOiicf5VYDA4vqhlpPdAZgL22wB_XPe0rtLEc=" alt=""  />
            </div>
            <div  className="des-title">
                <h5>BANDARBAN</h5>
                <img src="https://media.istockphoto.com/photos/lone-big-green-tree-top-of-the-mountain-in-bandarban-bangladesh-picture-id1336151983?b=1&k=20&m=1336151983&s=170667a&w=0&h=lrPnMJhC8NqeFsl50Ak9QiHv4iN4YTGUjnzF8i64asE=" alt=""  />
            </div>
            <div  className="des-title">
                <h5>SRIMANGAL</h5>
                <img src="https://media.istockphoto.com/photos/a-little-beautiful-river-in-bandarban-hill-tracts-river-between-picture-id1308607808?b=1&k=20&m=1308607808&s=170667a&w=0&h=XnQy-MGFfF-KuYJk2AT5DJ2_ucPSTQKmKNyH1FM_Q4I=" alt=""  />
            </div>
            <div  className="des-title">
                <h5>RANGAMATI</h5>
                <img src="https://images.unsplash.com/photo-1615552713642-73c367c8915c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJhbmdsYWRlc2glMjBuYXR1cmUlMjBoaWxsc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt=""  />
            </div>
            <div  className="des-title">
                <h5>SHUNDARBAN</h5>
                <img src="https://media.istockphoto.com/photos/royal-bengal-tiger-jumping-through-long-green-grass-picture-id171146544?b=1&k=20&m=171146544&s=170667a&w=0&h=XR9eG13jwggRrcRssswA0xH0QNp9p5WYQx5iSJKf9Rw=" alt=""  />
            </div>
            </Slider>
            </Col>
            </Row>
            </Container>
        </div>
        </div>
    );
};

export default Destination;