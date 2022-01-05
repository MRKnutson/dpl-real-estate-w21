import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import { DatePicker } from 'antd';


const Available = (props) =>{
  const [agentProperties, setAgentProperties] = useState([]);

  useEffect(()=>{
    getAgentProperties();
  },[])

  const getAgentProperties = async () => {
    try{
      let response = await axios.get(`/api/properties`)
      console.log(response.data)
      setAgentProperties(response.data)
    } catch (err) {
      alert('error getting agent properties')
    };
  };

  return(
    <Container>
      <h1>Available Page</h1>
    </Container>
  )
};

export default Available