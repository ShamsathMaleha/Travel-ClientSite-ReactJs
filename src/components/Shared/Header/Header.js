import React from 'react';
import { Card, Col, Container, Nav, Navbar} from 'react-bootstrap';
import './Header.css';
import { Icon } from 'react-icons-kit'
import { userPlus } from 'react-icons-kit/feather/userPlus';
import {userMinus} from 'react-icons-kit/feather/userMinus'
import { HashLink } from 'react-router-hash-link';
import logo from '../../images/logo-1.png'
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { useState } from 'react';
import {reorder} from 'react-icons-kit/fa/reorder'



const Header = () => {
  const {user}= useAuth();
  const [show,setShow]=useState(false);


  
  const toggles = ()=>{
      setShow(!show)
  }
    return (
        <div className="header-section">
            <Navbar  collapseOnSelect expand="lg" sticky="top" variant="dark" >
  <Container>
  <Navbar.Brand to="#home"><img src={logo} className="logo-image" alt=""/> <span className="fs-2 fw-thinner">Traventure</span> </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">   
    <Nav className="mx-auto text-white ">
      <Nav.Link as={HashLink}  to="/"> <span className="text-white fs-5 fw-bold text-hovers">Home</span> </Nav.Link>
      <Nav.Link as={HashLink} to="/#services"><span className="text-white fs-5 fw-bold">Tour</span></Nav.Link>
      <Nav.Link as={HashLink} to="/#destination"><span className="text-white fs-5 fw-bold">Destination</span></Nav.Link>

     
    
      </Nav>
      <Nav>
        
  
    {user.email?
          <Nav.Link><button className="btn" onClick={toggles}><Icon size={20} icon= {reorder} /></button></Nav.Link>
          :<Nav.Link as={HashLink} to="/login"><span className="text-white fs-5 fw-bold"> Login <Icon size={20} icon= {userPlus} /></span></Nav.Link>
       
       
       
        }
        {show && <> <UserCard > 
</UserCard>

        </>
        }



    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

const UserCard = ()=>{
  const { user,logOut } = useAuth()
  const history = useHistory()


  const handleLogout = ()=>{
    logOut();
    history.push('/')
}
  return (
    <div className="user-cart text-center">
            
                {
                    user.email ?
                        // <div >
                        <Card className="user-details w-50">
                            <div className="user-card" >
                               
                                    
                            <div className="img-section text-center ">
                                <img src={user.photoURL} alt="" />
                            </div>
                            <Card.Body >
                                <Card.Title className="emails-text">{user?.email}</Card.Title>
                                <Card.Text>
                                 
                                       <Col  className="text-hovers">
                                       <Link  to="/mytour">My Tour</Link>
                                       </Col>

                                </Card.Text>
                                <hr />
                                <Card.Text>
                                <Col className="text-hovers">
                                       <Link className=" " to="/manageAllTour">Manage All Tour</Link>
                                       </Col>
                                </Card.Text>
                                <hr />
                                <Card.Text>
                                <Col className="text-hovers">                              
                                
                                  <Link className="" to="/addNewTour">Add New Service</Link>

                                </Col>

                                </Card.Text>
                                <hr />
                                <Card.Text className="text-hovers">
                                <Link  onClick={handleLogout} ><span className=" fs-5 fw-bold">Logout <Icon size={20} icon= {userMinus} /></span></Link>

                                </Card.Text>

                            </Card.Body>
                           
                           
                            </div>
                            </Card>
                        // </div>
                        :
                        ''
                }
           
        </div>
  )

}
export default Header;