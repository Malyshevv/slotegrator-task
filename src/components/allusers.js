import React,{ useState, useEffect } from 'react';
import { useParams } from "react-router-dom";



function AllUsers() {


  const [users, setUsers] = useState([]);
  const [load, setLoad] = useState('false');

  useEffect(() => {
    fetchMyAPIusers();
  }, []);


  async function fetchMyAPIusers() {
        let response = await fetch('http://jsonplaceholder.typicode.com/users')
        response = await response.json()
        if(response.data != undefined) {
          if(response.data.status != 200){
            window.history.back();
          }
        }
        setUsers(response);
        //console.log(response);
        setLoad('true');

  }

  return (

    <main className="main-content allUsers">


      <div className="row">
        <div className="col-12">
        {(() => {
         if (load === 'false') {
           return <div>Загрузка...</div>;
         }
         else {

         }
        })()}
        <ul>
           {users.map(users => (
          <li key={users.id}>
            <b>User name:</b> {users.name}, <b>Login:</b> {users.username}, <b>Email:</b> {users.email}
          </li>
        ))}
        </ul>
        </div>
      </div>

    </main>

  );
}

export default AllUsers;
