import React, { useEffect,  useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from 'react-hook-form';
import useAuth from '../hooks/useAuth';
import { Col, Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom'
import './PlaceHolder.css'

const PlaceHolder = () => {
    
    const { user } = useAuth()
    const { id } = useParams()
    const [service, setService] = useState({})
    const history = useHistory()
    // const [status, set]
    useEffect(() => {
        // addToDb(aId)
        const url = `https://frozen-wildwood-00967.herokuapp.com/services/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setService(data)
                
            })
    }, [])
    
   

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const onSubmit = data => {
        
      
        data.status = 'pending'
        data.booking = service;
        // data.s_id= serviceDet_id

        fetch('https://frozen-wildwood-00967.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Order processed Successfully');
                    // clearTheCart();
                    reset();
                    history.push('/mytour')
                }
            })
    };
    return (
        <div>

           

            <div id="placeholder">
                <Container>
                    <Row className="justify-content-center">
                        <h2 className="text-center mb-4 mt-5">Place Your {service.title} Tour</h2>
                        <Col xs={5} sm={6} lg={4} className="text-center form-class pb-3">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input defaultValue={user.displayName} {...register('name', { required: true })} readOnly /> {/* register an input */}
                                {errors.name && <p className="text-white">Please Enter your name</p>}
                                <input defaultValue={user.email} {...register('email', { required: true })} readOnly />
                                {errors.email && <p className="text-white">Please Enter your email</p>}

                                <input placeholder="Phone" {...register('phone', { required: true })} /> {/* register an input */}
                                {errors.phone && <p className="text-white">Please Enter your phone</p>}

                                <input placeholder="Address" {...register('address', { required: true })} />
                                {/* {errors.s_id && <p className="text-white "><small>Please click in the box</small></p> */}
                                <input placeholder="YYYY-MM-DD" {...register('date', { pattern: /\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])/ })} />
                                {errors.place && <p className="text-white">Please Enter place</p>}


                                <input className="btn btn-outline-warning" type="submit" />
                            </form>
                        </Col>
                    </Row>
                </Container>

            </div>
        </div>
    );
};

export default PlaceHolder;