import React from "react";
import { useNavigate } from "react-router-dom";
import FetchApi from "../Components/FetchApi";

const Users = () => {
  const navigate = useNavigate();
  return (
    <>
      <FetchApi />
    
    <button onClick={() => navigate('/users/id', {replace: true})}> User Id</button>
    </>
  );
};

export default Users;
