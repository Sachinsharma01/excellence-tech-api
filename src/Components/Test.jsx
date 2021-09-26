import React, { useState, useEffect } from "react";
import axios from "axios";
import Users from "./Users";
import "./Test.css";
import { Button } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Test = () => {
  const [users, setUsers] = useState([]);
  const [value, setValue] = useState(1);
  useEffect(() => {
    async function fetchData() {
      const data = await axios(
        value <= 5
          ? `https://reqres.in/api/users?page=${value}`
          : `https://reqres.in/api/users?page=1`
      );
      console.log(`useEffect with value ${value}`);
      setUsers(data.data.data);
    }
    fetchData();
  }, [value]);
  const buttonHandler = () => {
    setValue((val) => val + 1);
  };
  console.log(users);
  return (
    <>
      <h1 style={{ textAlign: "center" }}>User Data</h1>
      <Button
        variant="contained"
        endIcon={<ArrowForwardIosIcon />}
        onClick={buttonHandler}
        style={{ marginLeft: "44%" }}
      >
        Next page
      </Button>
      <div className="container">
        <div className="users">
          {users.map((user) => (
            <Users user={user} key={user.name} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Test;
