import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, useParams } from "react-router-dom";
import auth from "../../firebase.init";

const Purchase = () => {
  const [user] = useAuthState(auth);
  const { id } = useParams();
  const [part, setpart] = useState([]);
  const [on,setOn] =useState(false)
  const { _id, name, quantity, img, description, price, minorder } = part;
  const navigate = useNavigate();

  // TODO:fetch all parts by id
  useEffect(() => {
    const url = `http://localhost:5000/part/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setpart(data));
  }, [id]);


  const handleQuantityChange=event=>{
      if(parseInt(event.target.value)>=parseInt(part?.minorder)){
          setOn(false)
      }
      else{
          setOn(true)
      }
  }

  const handleOrder =(event)=>{
      event.preventDefault();
      const phone =event.target.phone.value;
      const address =event.target.address.value;
      const orderQuantity =event.target.orderQuantity.value;
      
      const order ={
          orderId:part?._id,
          order:part?.name,
          userName:user?.displayName,
        userEmail: user?.email,
        payment:'false',
        phone,address,orderQuantity,

      }
      fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(order)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);


        /*(74.3)*/
        if(data.insertId){ 
          /*dynamic vabe bole dite pari ei date a tmr appointment*/ 
          console.log(data.insertId);
        }
        else{
          console.log(data.insertId);
        }

      });

  }

  const singlePartPurchaseHandle = (id) => {
    console.log("id", id);
    navigate(`/purchasePage`);
  };
  return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl ">
      <figure className="px-10 pt-10">
        <img className="w-50 h-50 rounded-xl" src={img} alt="" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>Description :{description}</p>
        <p>Available Quantity:{quantity}</p>
        <p>minimum Order :{minorder}</p>
        <p>price :${price}</p>
        <div className="card-body items-center text-center">
          <h2>user information</h2>
          <p>user name{user.displayName}</p>
          <p>user mail{user.email}</p>
        </div>
      </div>

      {/* odrder */}
      <form
            onSubmit={handleOrder}
            className="grid grid-cols-1 gap-4 justify-items-center mt-2"
          >
            <input
              type="name"
              name="name"
              disabled
              value={user?.displayName || ""}
              placeholder="your name"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="email"
              name="email"
              disabled
              value={user?.email || ""}
              placeholder="your email"
              className="input input-bordered w-full max-w-xs"
            />
            <input
                
              type="number"
              name="orderQuantity"
              onChange={handleQuantityChange}
              placeholder="your order"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="phone"
              name="phone"
              placeholder="your phone no"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="address"
              name="address"
              placeholder="your address"
              className="input input-bordered w-full max-w-xs"
            />
              <input
                disabled={on}
              type="submit"
              value="order"
              className="btn btn-success w-full max-w-xs"
            //   onClick={singlePartPurchaseHandle}
            />
          </form>
      {/* <button onClick={()=>singlePartPurchaseHandle(_id)} >gdjkg</button> */}
    </div>
  );
};

export default Purchase;
