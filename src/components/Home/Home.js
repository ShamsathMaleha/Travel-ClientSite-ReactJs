import React from 'react';
import Destination from '../Destination/Destination';
import Services from '../Services/Services';
import BgVideo from './BgVideo/BgVideo';
import {globe} from 'react-icons-kit/feather/globe'
import './Home.css';
import { useHistory } from 'react-router-dom'
import Icon from 'react-icons-kit';
import Facilities from '../Facilities/Facilities';


const Home = () => {

    return (
        <div>
            <BgVideo>

            </BgVideo>

            <div className="top-section">
                <div className="text-center">
                <h1>Find your special tour today</h1>
                <h4>With Travel Tours</h4>
                <button  className="btn btn-warning text-white mt-3"> <span> <Icon icon={globe} /></span> View Tour</button>
                </div>
            </div>
           <div className="service-section">
           <Services></Services>
           <Destination></Destination>
           <Facilities></Facilities>
           </div>
        </div>
    );
};

export default Home;