import React from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading';

const Singlepart = ({part}) => {
    const {_id,img,name,description,minorder,quantity,price}= part;
    const navigate =useNavigate()
    console.log(_id);


    if(part.length<1){
        <Loading></Loading>
    }

    const singlePartHandle = (id) =>{
        console.log('id',id);
        navigate(`/purchase/${id}`)
    }

    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img className='w-50 h-40 rounded-xl' src={img}alt=""/>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p className='text-justify'>Description :{description}</p>
          <p>Available Quantity:{quantity}</p>
          <p>minimum Order :{minorder}</p>
          <p>price :${price}</p>
        </div>
        <button onClick={()=>singlePartHandle(_id)} className="btn btn-error">buy now</button>

        

      </div>
    );
};

export default Singlepart;