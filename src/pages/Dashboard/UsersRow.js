import React from "react";
import { toast } from "react-toastify";

const UsersRow = ({ user, index, refetch }) => {
  const { email,role } = user;
  const makeAdmin=()=>{
    fetch(`https://boiling-island-20591.herokuapp.com/user/admin/${email}`,
    {
      method:'PUT',
      headers:{
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    }) 
    .then(res=>{
      if(res.status===403){
        toast.error('failed to make admin')
      }
     return res.json()
    })
    .then(data=>{
      if(data.modifiedCount>0){
        refetch() 
        toast.success(`make admin successfully `)
       
      }

    })
  }
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{email}</td>

      <td>
      {role !== 'admin' && <button onClick={makeAdmin} class="btn btn-xs">Make admin</button>}
      </td>   
    </tr>
  );
};

export default UsersRow;
