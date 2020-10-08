import React,{ useState, useEffect } from 'react';
import { useParams,Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import  store  from  "../store.js";


function Profile(props) {

  const [profile, setProfile] = useState([]);
  const userData = store.getState();

  const [load, setLoad] = useState('false');

  if (userData.login === 'guest')  {
    props.history.push('/')
  }

  useEffect(() => {
    fetchMyAPIprofile();

  }, []);


  async function fetchMyAPIprofile() {
        let response = await fetch('https://randomuser.me/api/')
        response = await response.json()

        setProfile(response.results[0]);
        setLoad('true');

  }
  return (

    <main className="main-content bg-gray">

    {(() => {
      if (load === 'false') {
        return <span>Загрузка...</span>;
      }
      else {
            
            return(
              <div>

                <center><img src={profile.picture.large} /><br/>

                <span>Name: {profile.name.title} {profile.name.first} {profile.name.last}</span><br/>
                <span>Username: {profile.login.username}</span><br/>
                <span>Gender: {profile.gender}</span><br/>
                <span>Location: City - {profile.location.city}, Country - {profile.location.country}</span><br/>
                <span>Email: {profile.email}</span><br/>
                <span>Phone: {profile.phone}</span><br/>
                </center>
              </div>
              
            )

       }
    })()}

    </main>

  );
}

export default Profile;
