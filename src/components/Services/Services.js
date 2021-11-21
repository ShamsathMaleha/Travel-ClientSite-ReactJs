
import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './Services.css'
import Service from '../Service/Service'
import { Card, Col, Container, Row } from 'react-bootstrap';
import photo from '../images/sky.jpg'
import axios from 'axios';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        const uri = `https://frozen-wildwood-00967.herokuapp.com/services`
        axios.get(uri)
            .then(res => {
                console.log(res.data)
                setServices(res.data)
            })
    }, [])
    var settings = {
        dots: true,
        infinite: true,
        speed: 100,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
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
        <>
        <div className="text-center mb-5 tour-heading">
            <h5 >Take a Look at Our</h5>
            <h2>MOST POPULAR TOURS</h2>
            </div>
        <div className="sliders" id="services">
            <div className="second-section">
                <img src={photo} alt=""  />
            </div>
            
            
            <Container>
            <Slider {...settings}>
            {
                services.map(service => <Service
                    key={service._id}
                    service={service}
                />)
            }   
            </Slider>
            </Container>
        </div >
        </>
    );

};

export default Services;