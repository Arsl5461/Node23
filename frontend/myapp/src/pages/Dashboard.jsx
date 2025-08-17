import React, { useState,useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import Loader from "../components/Loader";


const Dashboard = () => {
  const token = localStorage.getItem("token");
  const decodedToken = jwtDecode(token);
  const [user,setUser]=useState();
  const [loader,setLoader]=useState(false);
  const fetchUser = async () => {
    setLoader(true)
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/user/${decodedToken.id}`
    );
    setUser(response?.data.user);
    setLoader(false)
  };
  useEffect(() => {
    fetchUser();
  }, []);
  return <div>
    {
      loader ? <Loader/> :
    <h1>{`Welcome ${user?.name}`}</h1>
    }
  </div>;
};

export default Dashboard;
