import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './AddNewTour.css'
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';


const AddNewTour = () => {

const history = useHistory()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const onSubmit = data => {
        
        fetch('https://frozen-wildwood-00967.herokuapp.com/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Tour Added Successfully');
                    // clearTheCart();
                    reset();
                    history.push('/#services')
                }
            })
    };

    
    return (
        <div>

           

            <div>
                <Container>
                    <Row className="justify-content-center">
                        <h2 className="text-center mb-4 mt-5">Add Your New Tour</h2>
                        <Col xs={5} sm={6} lg={4} className="text-center form-class pb-3">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input placeholder="Enter Package Name" {...register('title', { required: true })}  /> {/* register an input */}
                                {errors.name && <p className="text-white">Please Enter your name</p>}
                                <input placeholder="Enter Description" {...register('description', { required: true })}  />
                                {errors.description && <p className="text-white">Please Enter Your Description</p>}

                                <input placeholder="Enter Pcakage " {...register('offer', { required: true })} /> {/* register an input */}
                                {errors.offer && <p className="text-white">Please Enter Your Pacakge offer</p>}

                                <input placeholder="Enter Package Amount" {...register('price', { required: true })} />
                                {errors.price && <p className="text-white">Please Enter Amount</p>}

                                <input placeholder="URL" {...register('img',{ pattern: /(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/ } )} />
                                {errors.img && <p className="text-white">Please Enter Image Url Link</p>}


                                <input className="btn btn-outline-warning" type="submit" />
                            </form>
                        </Col>
                    </Row>
                </Container>

            </div>
        </div>
    );
};

export default AddNewTour;