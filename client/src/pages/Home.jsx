import { Button, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import "../App.css";
const Home = () => {
  let [todo, setTodo] = useState("");
  const [iscompleted, SetIsCompleted] = useState(false);
  const [todos, setTodos] = useState([]);
  const [profile, setProfile] = useState({});
  const [edit,setEdit]=useState(false)

// console.log(todos);

  const handleChange = async (id=null) => {
    let token = localStorage.getItem("token");

          let { data } = await axios({
            method: "post",
            url: "http://localhost:8080/todo/create",
            data: { todo, iscompleted },
            headers: {
              Authorization: `bearer ${token}`,
            },
          });
    

    getData();
    setTodo("")
    setEdit(false)
  };


  const handleDelete=async(id)=>{
        let token = localStorage.getItem("token");

    let { data } = await axios({
      method: "delete",
      url: `http://localhost:8080/todo/delete/${id}`,
      headers: {
        Authorization: `bearer ${token}`,
      },
    });
    getData()
  }

  const getData = async () => {
    let token = localStorage.getItem("token");

    let { data } = await axios({
      method: "get",
      url: "http://localhost:8080/todo/",
      headers: {
        Authorization: `bearer ${token}`,
      },
    });

    setTodos(data);
  };
  const getProfile = async () => {
    let token = localStorage.getItem("token");
    let { data } = await axios({
      method: "get",
      url: "http://localhost:8080/todo/profile",
      headers: {
        Authorization: `bearer ${token}`,
      },
    });
    setProfile(data);
  };


  const handleEdit=async(id)=>{
       let token = localStorage.getItem("token");
       setEdit(true)
      
      //  console.log(find);
 // let { data } = await axios({
    //   method: "post",
    //   url: `http://localhost:8080/todo/edit/${id}`,
    //   headers: {
    //     Authorization: `bearer ${token}`,
    //   },
    // });   
    
  }

  useEffect(() => {
    getData();
    getProfile();
  }, []);

  return (
    <div className="app">
      <div
        style={{
          height: "90vh",
          display: "flex",
          gap: "10px",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1>Todos</h1>
        <div>
          <h3>UserName:-{profile.name}</h3>
          <h3>Email:-{profile.email}</h3>
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <TextField
            label="Enter Text..."
            onChange={(e) => setTodo(e.target.value)}
            name="country"
            variant="filled"
          />
          <Button onClick={handleChange} variant="contained" color="primary">
           {edit?"Edit":"Add"}
          </Button>
        </div>
        <div>
          {todos.map((e) => (
            <div key={e._id} style={{ display: "flex", gap: "10px" }}>
              <h5>{e.todo}</h5>
              {/* <h4 onClick={()=>setEdit(!edit)}>{edit ? "completed" :"Incomplete"}</h4> */}
              {/* <button onClick={()=>handleEdit(e._id)}>Edit</button> */}
              <button onClick={() => handleDelete(e._id)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
