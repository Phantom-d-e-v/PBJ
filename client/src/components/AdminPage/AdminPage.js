import React from "react";
import { useState } from "react";
import Axios from "axios";
import "../AdminPage/AdminPage.css";

const AdminPage = () => {
  const [userList, setuserList] = useState([]);
  const [newPassword, setnewPassword] = useState("");

  const getUserlist = () => {
    Axios.get("http://localhost:5000/userlist").then((response) => {
      console.log(`Successfully received data`);
      setuserList(response.data);
    });
  };

  const updatePassword = (username) => {
    Axios.put("http://localhost:5000/update", {
      password: newPassword,
      username: username,
    }).then((response) => alert("update"));
  };

  return (
    <div>
      <header className="AdminPage_Header">
        <h1>Admin Page</h1>
      </header>
      <span classname="AdminPage_LeftButton">
        <button onClick={() => window.location.reload(false)}>
          Clear Page
        </button>
      </span>
      <div className="AdminPage">
        <button className="AdminPage_DisplayUsersButton" onClick={getUserlist}>
          Display Users
        </button>
        {userList.map((val, key) => {
          return (
            <div className="AdminPage_Users">
              <div>
                <h3>Name: {val.name}</h3>
                <h3>Username: {val.username}</h3>
                <h3>Email: {val.email}</h3>
                <h3>Password: {val.password}</h3>
              </div>
              <div className="AdminPage_UpdateButton">
                {" "}
                <input
                  type="text"
                  placeholder="password"
                  onChange={(event) => setnewPassword(event.target.value)}
                />
                <button onClick={() => updatePassword(val.username)}>
                  Update
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AdminPage;
