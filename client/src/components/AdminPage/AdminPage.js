import React from "react";
import { useState } from "react";
import Axios from "axios";
import "../AdminPage/AdminPage.css";

const AdminPage = (props) => {
  const [userList, setuserList] = useState([]);
  const [adminList, setadminList] = useState([]);
  const [newPassword, setnewPassword] = useState("");

  const getUserlist = () => {
    Axios.get("http://localhost:5000/userlist").then((response) => {
      console.log(`Successfully received data`);
      setuserList(response.data);
    });
  };

  const getAdminList = () => {
    Axios.get("http://localhost:5000/adminlist").then((response) => {
      console.log("Received admin data");
      setadminList(response.data);
    });
  };

  const getTemplateList = () => {
    props.history.push("/template");
  };

  const updatePassword = (username) => {
    Axios.put("http://localhost:5000/update", {
      password: newPassword,
      username: username,
    }).then((response) => {
      alert("Password successfully updated");
      setuserList(
        userList.map((val) => {
          return val.username === username
            ? {
                name: val.name,
                username: val.username,
                email: val.email,
                password: newPassword,
              }
            : val;
        })
      );
    });
  };

  const deleteUser = (username) => {
    Axios.delete(`http://localhost:5000/delete/${username}`).then(
      (response) => {
        alert("Deleted user successfully");
        setuserList(
          userList.filter((val) => {
            return val.username !== username;
          })
        );
      }
    );
  };

  const goHome = () => {
    props.history.push("/");
  };

  return (
    <div>
      <header className="AdminPage_Header">
        <h1>Admin Page</h1>
      </header>
      <div className="AdminPage_Buttons">
        <span className="AdminPage_ClearButton">
          <button onClick={() => window.location.reload(false)}>
            Clear Page
          </button>
        </span>
        <span className="AdminPage_ShowTemplates">
          <button onClick={getTemplateList}>Show Templates</button>
        </span>
        <span className="AdminPage_DisplayUsersButton">
          <button onClick={getUserlist}>Display Users</button>
        </span>
        <span className="AdminPage_DisplayAdminsButton">
          <button onClick={getAdminList}>Display Admins</button>
        </span>
      </div>
      <div className="AdminPage">
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
                  placeholder="Password"
                  onChange={(event) => setnewPassword(event.target.value)}
                />
                <button onClick={() => updatePassword(val.username)}>
                  Update
                </button>
                <button onClick={() => deleteUser(val.username)}>Delete</button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="AdminPage_admins">
        {adminList.map((val, key) => {
          return (
            <div className="AdminPage_admins_admins">
              <h3>Name: {val.name}</h3>
              <h3>Username: {val.username}</h3>
              <h3>Email: {val.email}</h3>
              <h3>Password: {val.password}</h3>
            </div>
          );
        })}
      </div>
      <button className="AdminPage_home" onClick={goHome}>
        Home
      </button>
    </div>
  );
};

export default AdminPage;
