import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Myorder = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    console.log(user);
    const navigate = useNavigate();
  
  
    //   TODO: load user order
    useEffect(() => {
      if (user) {
        fetch(`https://boiling-island-20591.herokuapp.com/orders?userEmail=${user.email}`,
        {
          method: "GET",
          headers: {
            'authorization': `Bearer ${localStorage.getItem("accessToken")}`
          }
        }
        )
          .then((res) => {
            console.log("res", res);
            if (res.status === 401 || res.status === 403) {
              signOut(auth);
              localStorage.removeItem("accessToken");
              navigate("/");
            }
            return res.json();
          })
          .then((data) => {
            setOrders(data);
          });
      }
    }, [user]);
    return (
        <div>
      <h2>my orders:{orders.length}</h2>
      <div class="overflow-x-auto">
        <table class="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>userName</th>
              <th>order</th>
              <th>orderQuantity</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{order.userName}</td>
                <td>{order.order}</td>
                <td>{order.orderQuantity}</td>
               
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default Myorder;