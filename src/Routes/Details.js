import React from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";

const Details = () => {
  let params = useParams();
  const { state } = useLocation();
  console.log(state);
  return (
    <>
      <h1>Details {params.id}</h1>
      <Link to="/users">Back to Users</Link>
      <div style={{display: 'block'}}>
       <p>{`Name: ${state.name.first} ${state.name.last}`}</p>
         <p>{`Gender: ${state.gender}`}</p>
         <p>{`Tel: ${state.phone}`}</p>
         <p>{`Mail: ${state.email}`}</p>
         <p>{`City: ${state.location.city}`}</p>
          <p>{`State: ${state.location.state}`}</p>
          <p>{`Country: ${state.location.country}`}</p>
          <p>{`Postcode: ${state.location.postcode}`}</p>
          <p>{`Street name: ${state.location.street.name}`}</p>
          <p>{`Street number: ${state.location.street.number}`}</p>
          <p>{`Latitude: ${state.location.coordinates.latitude}`}</p>

      </div>
    </>
  );
};

export default Details;
