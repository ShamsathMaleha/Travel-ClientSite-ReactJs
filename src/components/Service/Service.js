import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './Service.css';
import {ic_watch_later_twotone} from 'react-icons-kit/md/ic_watch_later_twotone'
import Icon from 'react-icons-kit';
import {ic_star_outline} from 'react-icons-kit/md/ic_star_outline'
import {money} from 'react-icons-kit/fa/money'
const Service = (props) => {

const {_id, img,offer,description,title,price} = props.service
const des = description.slice(0, 70)
const history =useHistory()
const handlePlace =()=>{
  const uri = `/placeholder/${_id}`;
  history.push(uri)
}  
    return (
        <div>
            
    <Col>
      <Card className="mx-5 mt-5 cards services">
        <Card.Img variant="top"  src={img} />
        <Card.Body>
          <Card.Title className="text-center">{title} </Card.Title>
          <Card.Text className="text-center">
        <span className="texts-colors"><Icon icon={ic_watch_later_twotone} /></span> {offer}
          </Card.Text>
          <Card.Text className="">
            {des}...
          </Card.Text>
          
          <Card.Text className="texts-colors d-flex justify-content-around text-start">
          <div>
          <Icon icon={ic_star_outline} />
          <Icon icon={ic_star_outline} />
          <Icon icon={ic_star_outline} />
          <Icon icon={ic_star_outline} />
          </div>
          <h5><Icon icon={money} size={25} /> {price} </h5>
        
          </Card.Text>
          <Card.Text className="text-center ">
          <button onClick={handlePlace} className="btn btn-outline-warning ">Book Now</button>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
 
        </div>
    );
};

export default Service;