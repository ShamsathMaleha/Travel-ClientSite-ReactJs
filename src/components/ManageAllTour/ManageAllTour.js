import React, { useEffect, useReducer, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Icon } from 'react-icons-kit'
import { trash } from 'react-icons-kit/feather/trash';
import {ic_done_all} from 'react-icons-kit/md/ic_done_all';

import useAuth from '../hooks/useAuth';
import Spinners from '../Shared/Spinners/Spinners';
import './ManageAllTour.css'

const ManageAllTour = () => {
    const { user,loading,setLoading } = useAuth()
    const [myOrder, setMyOrder] = useState([])
    
    

    useEffect(() => {
       
        fetch('https://frozen-wildwood-00967.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => {
               
                
                setMyOrder(data)
               
            })
            .finally(()=>{
                setLoading(false)
            })
    }, [myOrder])
  

    const handleStatus = (id, e) => {

        const proceed = window.confirm('Are you sure ?')
        if (proceed) {



            const orderStatus = 'confirm';
            const orderData = {
                status: orderStatus
            }

            fetch(`https://frozen-wildwood-00967.herokuapp.com/orders/${id}`, {
                method: 'PATCH',
                headers: { 'content-Type': 'application/json' },
                body: JSON.stringify(orderData)
            })
                .then(res => res.json())
                .then(data => {
                    if (true) {

                        alert('update successfully')
                        setMyOrder(data)
                        setLoading(false)
                    }
                })
            e.preventDefault()
        }
    }

   
   
    const handleDeleteUser = id =>{

        const proceed = window.confirm('are you sure, you want to delete?');
        if(proceed){
            const url = `https://frozen-wildwood-00967.herokuapp.com/orders/${id}`
            fetch (url,{
                method:'DELETE',
               
            })
            .then(res=>res.json())
            .then(data =>{
                if(data.deletedCount>0){
                    alert('deleted successfully');
                    const remainingUsers= myOrder.filter(users=>users._id !== id);
                    setMyOrder(remainingUsers)
    
                }
            })
        }
    }
    return (
        <div className="h-100">
        <h1 className=" text-center mt-5">Manage All Tour</h1>
        <div className="h-100 table-section text-center p-5">
            {!myOrder.length ? <Spinners></Spinners>:
                <Table className=" w-50 mb-5" hover>
                {myOrder.length > 0 ?
                    <>
                        <thead>
                            <tr>
                                <th>Destination</th>
                                <th>Duration</th>
                                <th>Email</th>
                                <th colSpan="3">Date</th>
                                <th>Status</th>
                                <th colSpan="2">Action</th>
                            </tr>
                        </thead>
                        <tbody>

                        {
                                    myOrder.map(or => <>
                                        <tr>
                                            <td>{or.booking.title} </td>
                                            <td>{or.booking.offer} </td>
                                            <td>{or.email} </td>
                                            <td colSpan="3">{or.date}</td>
                                            <td>{or.status}</td>
                                            
                                            <td><button onClick={()=>handleDeleteUser(or._id)} className="btn btn-outline-danger"><Icon size={15} icon={trash} /></button></td>
                                            <td>
                                                <form onSubmit={(e) => handleStatus(or._id, e)}>
                                                    <input hidden type="text" value="confirm" />
                                                    <button type="submit" className="btn btn-outline-success"><Icon size={15} icon={ic_done_all} /></button>

                                                </form>
                                            </td>
                                        </tr>
                                    </>)
                                }

</tbody>
                        </>
                        :
                        'Select Your Tour Place First'
                    }
                </Table>
            }
            </div>
            {/* <div className="h-100"></div> */}
        </div>

    );
};

export default ManageAllTour;


 