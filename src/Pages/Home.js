import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Home() {

  const token = "547851eb9be373e90f27840d6a4ae3840cfdf5e29b18bc160d2f8243f4f83db8";

  const [users, setUsers] = useState([]);

  const loadUsers = () => {
    axios.get(`https://gorest.co.in/public/v2/users?access-token=${token}`)
    .then((res)=> {
      setUsers(res.data.reverse());
    });
  };

  useEffect(() => {
    loadUsers();
  }, [users]);

  function Delete(id){
    axios.delete(`https://gorest.co.in/public/v2/users/${id}?access-token=${token}`)
    .then(loadUsers())
  }
  
  return (
    <div className='w-full h-full flex flex-col px-10 py-8'>
        <div class="w-full flex flex-col min-h-[50vh] justify-center items-center">
          <h1 className='text-black text-3xl font-semibold font-Montserrat'>
            Home Page
          </h1>

          <div className='mt-12'>
            <Link 
              to={"/add-user"}
              className='px-6 py-2 text-white font-normal bg-black rounded-lg'>
                Add Users
            </Link>
          </div>

          <div class="overflow-x-auto sm:-mx-6 lg:-mx-8 mt-8">
            <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div class="overflow-hidden">
                <table class="mr-12 mt-4 min-w-full border border-black">
                  <thead class="border-b">
                    <tr>
                      <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        ID
                      </th>
                      <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        Name
                      </th>
                      <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        Email
                      </th>
                      <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        Gender
                      </th>
                      <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        Status
                      </th>
                      <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>

                    {users.map((data, index) =>(
                      <tr key={index} class="border-b">
                        <td class="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {data.id}
                        </td>
                        <td class="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {data.name}
                        </td>
                        <td class="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {data.email}
                        </td>
                        <td class="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {data.gender}
                        </td>
                        <td class="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {data.status}
                        </td>
                        <td class="flex justify-center items-center space-x-4 mt-1">
                          <Link 
                            to={`/users/${data.id}`}
                            className='px-6 py-2 text-white font-normal bg-black rounded-lg'>
                            View
                          </Link>
                          <Link 
                            to={`/edit-user/${data.id}`}
                            className='px-6 py-2 text-white font-normal bg-green-500 rounded-lg'>
                            Edit
                          </Link>
                          <button onClick={()=>Delete(data.id)} className='px-6 py-2 text-white font-normal bg-red-500 rounded-lg'>
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className='mt-8'>
            <p>Credit: <a href='https://www.youtube.com/watch?v=l2TX7Pn9XNg'>https://www.youtube.com/watch?v=l2TX7Pn9XNg</a></p>
          </div>
        </div>
    </div>
  )
}

export default Home