import logo from './logo.svg';
import React from "react"
import './App.css';
import Display from "./Display"
import Form from './Form'
import { Route, Link, Switch } from "react-router-dom"
import Axios from "axios"
import axios from 'axios';

function App() {

///////// BACKEND URL  /////////
  const url = "https://jscarsproject.herokuapp.com"
  
//////// USERS STATE //////////
  const [users, setUsers] = React.useState([])
  
/////// EMPTY USER ///////////
const emptyUser = {
  name: "",
  cars: {
    make: "",
    model: "",
    color: "",
    img: ""
  }
}

//////// STATE TO TRACK USER TO EDIT /////
const [selectedUser, setSelectedUser] = React.useState(emptyUser)


///////////// AXIOS //////////////
const getUsers = () => {
  axios.get(url + "/user").then(response => setUsers(response.data));
  console.log('users', users)
}

///////// useEffect ////////////
React.useEffect(() => {
  getUsers()
}, [])

// console.log('this is user data', users[2].cars)

///// HANDLECREATE FOR CREATING A USER /////
const handleCreate = (newUser) => {
  axios.get(url + "/create", {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newUser)
  }).then(() => {
    getUsers()
  })
}

const selectUser = (user) => {
  setSelectedUser(user)
}

/////// UPDATE A USER //////////
const handleUpdate = (user) => {
  axios.get(url + "/user/" + user._id, {
    method: "put",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  })
  .then(() => {
    getUsers()
  })
}

////////// DELETE A USER ///////////
   const deleteUser = (user) => {
    fetch(url + "/user/" + user._id, {
      method: "delete"
    })
    .then(() => {
      getUsers()
    })
  }

  return (
    <div className="App">
      <h1>Welcome to your garage!</h1>
        <Link to="/create">
        <button>Start your garage</button>
        </Link>
      <Route exact path="/" render={(rp) => <Display {...rp} users={users} selectUser={selectUser} deleteUser={deleteUser}/>}/>
      <Route exact path="/create" render={(rp) => (
              <Form {...rp} label="create" user={emptyUser} handleSubmit={handleCreate} />)}/>
      <Route exact path="/edit" render={(rp) => (
              <Form {...rp} label="update" user={selectedUser} handleSubmit={handleUpdate} />)}/>
    </div>
  );
}

export default App;
