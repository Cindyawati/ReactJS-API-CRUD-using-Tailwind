import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Users() {

  const token = "547851eb9be373e90f27840d6a4ae3840cfdf5e29b18bc160d2f8243f4f83db8";

  const [user, setUser] = useState([]);

  useEffect(() => {
    axios.get(`https://gorest.co.in/public/v2/users/${id}?access-token=${token}`).then((res) => {
      setUser(res.data);
    });
  }, []);

  console.log(user);

  const { id } = useParams();
  
  return (
    <>
      <div class="mt-12 mb-12">
        <h2>ID: {user.id}</h2>
        <h2>Name: {user.name}</h2>
        <h2>Email: {user.email}</h2>
        <h2>Gender: {user.gender}</h2>
        <h2>Status: {user.status}</h2>
      </div>
      <Link
        to={`/`}
        className="hover:bg-teal-600 bg-white hover:shadow-md  outline-none rounded-xl font-bold border mt-8 hover:text-teal-200 text-teal-600 border-zinc-400 py-4 px-4 pl-4"
      >
        Back To Home
      </Link>
    </>
  );
}

export default Users;