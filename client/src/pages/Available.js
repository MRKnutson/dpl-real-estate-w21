import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import { Card, Divider, Table } from 'antd';


const Available = (props) =>{
  const [agentProperties, setAgentProperties] = useState([]);

  useEffect(()=>{
    getAgentProperties();
  },[])

  const columns = [
    {
      title: "Beds",
      dataIndex: "beds",
      key: "beds"
    },
    {
      title: "Baths",
      dataIndex: "baths",
      key: "baths"
    },
    {
      title: "City",
      dataIndex: "city",
      key: "city"
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price"
    },
    {
      title: "SQ FT",
      dataIndex: "sq_ft",
      key: "sq_ft"
    },
    {
      title: "Street",
      dataIndex: "street",
      key: "street"
    },
    {
      title: "Zip",
      dataIndex: "zip",
      key: "zip"
    }
  ];
  
   const renderAgentProperties = () => {
    return agentProperties.map((a) => {
      return (
        <div key= {a.agent_id}>
            <Card title={a.name} style={{ width: 300, marginBottom: "20px" }}>
              {a.email}
            </Card>
            <Table columns={columns} dataSource={a.properties} />
          <Divider orientation="left"></Divider>
        </div>
      );
    });
  };

  const getAgentProperties = async () => {
    try{
      let response = await axios.get(`/api/properties`)
      let normalizedData=normalizeData(response.data)
      console.log()
      setAgentProperties(normalizedData)
    } catch (err) {
      alert('error getting agent properties')
    };
  };

  const normalizeData = (data) =>{
    let uniqueAgents = [... new Set (data.map(agent=>agent.agent_id))];
    let normalizedData = uniqueAgents.map(id =>{
      let properties = data.filter(d=>d.agent_id === id)
      let filteredProperties = properties.map(p=>{
        return {key:p.id, sq_ft: p.sq_ft,price: p.price, beds:p.beds, baths:p.baths, city: p.city, zip:p.zip, street:p.street}
      })
      return {
        agent_id: properties[0].agent_id,
        name: properties[0].first_name + ' ' + properties[0].last_name,
        email: properties[0].email,
        properties: filteredProperties
      }
    })
    return normalizedData
  };

  return(
    <Container>
      <h1>Available Page</h1>
      {renderAgentProperties()}
    </Container>
  )
};

export default Available