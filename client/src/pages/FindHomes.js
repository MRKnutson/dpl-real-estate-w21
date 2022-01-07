import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {Container} from 'react-bootstrap'
import RenderJson from '../components/RenderJson';
import { Select } from 'antd';

const { Option } = Select;

const FindHomes = (props) => {
  const [agents, setAgents] = useState(null)
  const [buyers, setBuyers] = useState(null)
  const [properties, setProperties] = useState(null)

  useEffect(()=>{
    getAgents()
  },[])

  const getAgents = async () => {
    try {
      let response = await axios.get(`/api/agents`)
      setAgents(response.data)
    } catch (err) {
      alert('error getting agents')
    }
  };

  const onChange = async (value) => {
    // console.log(`selected ${value}`);
    let response = await axios.get(`/api/agents/${value}`)
    setBuyers(response.data)
  }
  
  function onBuyerChange(value) {
    // console.log(`selected ${value}`);
    // let response = await axios.get(`/api/agents/${value}`)
    // setBuyers(response.data)
    axios.get(`/api/buyers/${value}`).then((response)=>{
      setProperties(response.data)
    }).catch((error)=>{
      alert('error getting properties')
    })
  }

  const onSearch = (val) => {
    // console.log('search:', val);
  }

  const renderAgentSelect = () => {
    if (!agents){
      return(
        <Select loading style = {{width:"200px"}} />
      )
    } else {
      return (
        <Select
          style ={{width: "200px"}}
          showSearch
          placeholder="Select an agent"
          optionFilterProp="children"
          onChange={onChange}
          onSearch={onSearch}
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          {agents.map(a=> <Option key = {a.id} value = {a.id}>{`${a.first_name} ${a.last_name}`}</Option>)}
        </Select>
      )
    }
  }

  const renderBuyerSelect = () => {
    if (!buyers){
      return(
        <Select loading />
      )
    } else {
      return (
        <Select
          style ={{width: "200px"}}
          showSearch
          placeholder="Select a buyer"
          optionFilterProp="children"
          onChange={onBuyerChange}
          // onSearch={onBuyerSearch}
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          {buyers.map(a=> <Option key = {a.id} value = {a.id}>{`${a.first_name} ${a.last_name}`}</Option>)}
        </Select>
      )
    }
  }

  return(
    <Container>
      <h1>Find Homes</h1>
      <h4>Agent:</h4>
      {renderAgentSelect()}
      {buyers && <h4>Buyer:</h4>}
      {buyers && renderBuyerSelect()}
      {properties && <h4>Properties:</h4>}
      {properties &&<RenderJson json = {properties} />}
    </Container>
  )
};

export default FindHomes;