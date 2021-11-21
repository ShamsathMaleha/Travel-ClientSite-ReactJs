import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Sticky from 'react-sticky-el';
import useAuth from '../hooks/useAuth';
import './UserCard.css'

const UserCard = ({children}) => {
    const { user } = useAuth()
    return (
        <div className="user-cart text-center">
            
                {
                    user.email ?
                        // <div >
                        <Card className="user-details w-50">
                            <div className="user-card" >
                               
                                    
                            <div className="img-section text-center">
                                <img src={user.photoURL} alt="" />
                            </div>
                            <Card.Body >
                                <Card.Title>{user?.email}</Card.Title>
                                <Card.Text>
                                 
                                       <Col>
                                       <Link className="btn btn-warning" to="/mytour">My Tour</Link>
                                       </Col>

                                </Card.Text>
                                <Card.Text>
                                <Col>
                                       <Link className="btn btn-success " to="/manageAllTour">Manage All Tour</Link>
                                       </Col>
                                </Card.Text>
                                <Card.Text>
                                <Link className="btn btn-info" to="/addNewService">Add New Service</Link>

                                </Card.Text>
                                <Card.Text>
                                    {children}

                                </Card.Text>

                            </Card.Body>
                           
                           
                            </div>
                            </Card>
                        // </div>
                        :
                        ''
                }
           
        </div>
    );
};

export default UserCard;