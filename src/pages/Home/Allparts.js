import React, { useEffect, useState } from 'react';
import PrimaryButton from '../../Shared/PrimaryButton';
import Singlepart from './Singlepart';

const Allparts = () => {
    const [parts, setParts] = useState([]);

  // TODO:show all parts
  useEffect(() => {
    fetch("http://localhost:5000/part")
      .then((res) => res.json())
      .then((data) => setParts(data));
  }, []);
    return (
        <div className=' my-4'>
            <div className='text-center '>
            <h2 className='text-xl font-bold uppercase text-primary'>Ferrari Parts</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
                {
                    parts.map(part=><Singlepart
                    key={part._id}
                    part={part}
                    ></Singlepart>)
                } 
            </div>
        </div>
    );
};

export default Allparts;