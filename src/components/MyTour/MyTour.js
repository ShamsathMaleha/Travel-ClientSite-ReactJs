import React, { useEffect, useReducer, useState }  from 'react';
import './MyTour.css';
import { Table } from 'react-bootstrap';
import { Icon } from 'react-icons-kit'
import { trash } from 'react-icons-kit/feather/trash'
import useAuth from '../hooks/useAuth';
import Spinners from '../Shared/Spinners/Spinners';

const MyTour = () => {
    const { user,setUser,loading,setLoading } = useAuth()
    
    const [myOrder, setMyOrder] = useState([])
    
    useEffect(() => {
        //  setLoading(true)
        fetch('https://frozen-wildwood-00967.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => {
              
                const userEmail = user.email;
                const order = data.filter(mo => mo.email === userEmail)
                setMyOrder(order)
                console.log(order)
                
            })
            .finally(()=>{
                setLoading(false)
            })
    }, [myOrder])


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
        <h1 className=" text-center mt-5">My <span className="text-">Tour</span> </h1>
        <div className="h-100 table-section text-center p-5">
        {!loading ? 
            <Table className=" w-50 mb-5" hover>
            {myOrder.length > 0 ?
                <>
                    <thead>
                        <tr>
                            <th>Destination</th>
                            <th>Duration</th>
                            <th>Date</th>
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
                                        <td>{or.date}</td>
                                        <td>{or.status} </td>
                                        <td><button onClick={()=>handleDeleteUser(or._id)} className="btn btn-outline-danger"><Icon size={15} icon={trash} /></button></td>
                                    </tr>
                                </>)
                            }

</tbody>
                    </>
                    :
                    'Please select a tour place first'
                }
            </Table>
            :<Spinners></Spinners>
        }
            </div>
            {/* <div className="h-100"></div> */}
        </div>

    );
};

export default MyTour;