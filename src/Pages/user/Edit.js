import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function Edit() {

  // const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");

  const token = "547851eb9be373e90f27840d6a4ae3840cfdf5e29b18bc160d2f8243f4f83db8";

  const navigate = useNavigate()

  const {id} = useParams();

  useEffect(() => {
    axios.get(`https://gorest.co.in/public/v2/users/${id}?access-token=${token}`)
    .then((res) => {
      setName(res.data.name);
      setEmail(res.data.email);
      setGender(res.data.gender);
      setStatus(res.data.status);
    });
  }, []);

  const data= {
    // id: id,
    name: name,
    email: email,
    gender: gender,
    status: status
  }

  function Update(e){
    e.preventDefault();
    axios.put(`https://gorest.co.in/public/v2/users/${id}?access-token=${token}`, data)
    .then(navigate("/"));
  }
  

  return (
    <div className='w-screen h-full flex flex-col justify-center items-center mt-16'>
      <h1 className='text-black text-3xl font-semibold font-Monstserrat mb-4'>Edit User</h1>
      <form className='w-[80%] h-full flex flex-col justify-center items-center'>

        <input 
          disabled
          value={id}
          // onChange={(e)=>setId(e.target.value)}
          type="text" 
          id= "disabled"
          placeholder='Enter Your ID'
          className='cursor-not-allowed w-[80%] bg-white/10 text-xl mt-4 font-Montserrat font-normal outline-none py-4 pl-6 border border-zinc-400' />

        <input 
          value={name}
          onChange={(e)=>setName(e.target.value)}
          type="text" 
          placeholder='Enter Your Name'
          className='w-[80%] bg-white/10 text-xl mt-4 font-Montserrat font-normal outline-none py-4 pl-6 border border-zinc-400' />

        <input 
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          type="text" 
          placeholder='Enter Your Email'
          className='w-[80%] bg-white/10 text-xl mt-4 font-Montserrat font-normal outline-none py-4 pl-6 border border-zinc-400' />

        <input 
          value={gender}
          onChange={(e)=>setGender(e.target.value)}
          type="text" 
          placeholder='Enter Your Gender'
          className='w-[80%] bg-white/10 text-xl mt-4 font-Montserrat font-normal outline-none py-4 pl-6 border border-zinc-400' />

        <input 
          value={status}
          onChange={(e)=>setStatus(e.target.value)}
          type="text" 
          placeholder='Enter Your Status'
          className='w-[80%] bg-white/10 text-xl mt-4 font-Montserrat font-normal outline-none py-4 pl-6 border border-zinc-400' />

        <button
          type='submit'
          onClick={Update}
          className='w-[80%] bg-blue-600 text-xl mt-4 text-white font-semibold font-Montserrat font-normal py-4 pl-6' >
          Update User
        </button>
      </form>
    </div>
  )
}

export default Edit