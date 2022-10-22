import React, { useState, useEffect } from "react";
import axios from "axios";


const FetchApi = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
//  const [pageNum, setPageNum] = useState(1);

 

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const res = await axios.get("https://randomuser.me/api?results=20");

    console.log("users", res.data.results);
    setUsers(res.data.results);

    setLoading(false);
  };

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {users.map(user => (
            <div key={user.cell}>
              <img src={user.picture.large} alt="" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FetchApi;
