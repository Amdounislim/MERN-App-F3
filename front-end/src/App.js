import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "./JS/actions/actionUser";
import { Button } from "react-bootstrap";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import UserCard from "./components/UserCard";
import EditUser from "./components/EditUser";
import AddUser from "./components/AddUser";

function App() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  const getAllUsers = () => {
    dispatch(getUsers());
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div>
      <Link to="/">
        <Button variant="outline-primary button">Users List</Button>
      </Link>
      <Link to="/Add_user">
        <Button variant="primary button">Add User</Button>
      </Link>

      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <div className="contact-list">
              {users.map((el) => (
                <UserCard key={el._id} user={el} />
              ))}
            </div>
          )}
        />
        <Route path="/Add_user" render={() => <AddUser />} />
        <Route path="/Edit_user" render={() => <EditUser />} />
      </Switch>
    </div>
  );
}

export default App;
