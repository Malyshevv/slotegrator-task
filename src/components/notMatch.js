import React from 'react';
import { Link } from "react-router-dom";



function NotMatch() {

  return (

    <main className="main-content bg-gray">

      <h1>OOOPPSS.... PAGE NOT FOUND 404!</h1>
      <Link to="/">HOME</Link>
    </main>

  );
}

export default NotMatch;
