import React, { useState, useEffect } from "react";
import Form from "./Form";
import Table from "./Table";
import { Switch, Route, Redirect } from "react-router-dom";

import { httpHelper } from "../helpers/httpHelper";

const CrudUser = () => {
  const [users, setUsers] = useState(null);

  const url = "http://localhost:5000/users";
  const api = httpHelper();

  useEffect(() => {
    getUsers();
  }, []);

  const postUser = (user) => {
    api
      .post(`${url}`, { body: user })
      .then((res) => getUsers())
      .catch((err) => console.log(err));
  };

  const updateUser = (id, user) => {
    api
      .put(`${url}/${id}`, { body: user })
      .then((res) => getUsers())
      .catch((err) => console.log(err));
  };

  const deleteUser = (id) => {
    api
      .del(`${url}/${id}`, {})
      .then((res) => getUsers())
      .catch((err) => console.log(err));
  };

  const getUsers = () => {
    api
      .get(`${url}`)
      .then((res) => {
        setUsers(res);
      })
      .catch((err) => console.log(err));
  };

  if (!users) return null;

  return (
    <>
      <Switch>
        <Route path="/form" component={() => <Form postUser={postUser} />} />
        <Route
          path="/home"
          component={() => (
            <div className="all-users">
              <h3 style={{ float: "left", color: "rgb(54, 54, 122)" }}>USERS</h3>
			  <a href="/form">
			  <button className="btn btn-lg my-2 float-right text-white">CREATE</button>
			  </a>
			  
              <Table
                users={users}
                setUsers={setUsers}
                postUser={postUser}
                updateUser={updateUser}
                deleteUser={deleteUser}
              />
            </div>
          )}
        />
		<Redirect to="/home" />
      </Switch>
    </>
  );
};

export default CrudUser;
