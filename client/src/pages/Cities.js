import { Col, Row, Select } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import PropertyCard from '../components/PropertyCard';
const { Option } = Select;

// const dummyCityProperties = [
//   {sq_ft: 1234, beds: 3, baths: 2, price:456123},
//   {sq_ft: 144, beds: 4, baths: 2, price:45613},
//   {sq_ft: 234, beds: 5, baths: 2, price:456121233}
// ]

const Cities = () => {
  const [cities, setCities]= useState(null)
  const [city, setCity]=useState(null)
  const [cityProperties, setCityProperties]=useState([])

  useEffect(()=>{
    // setTimeout(()=>{
      getCities()
    // },2000)
    // getCities()
  },[])

  const getCities = async ()=>{
    try {
      let res = await axios.get(`/api/cities`)
      setCities(res.data)
    } catch (err) {
      // setCities(['SLC', 'Draper', 'Provo'])
      alert('error getting cities')
    }
  }

  const handleChange = async (value) => {
    // console.log(`selected ${value}`);
    // api call to get city data
    try {
      let response = await axios.get(`/api/cities/${value}`)
      setCity(value)
      setCityProperties(response.data)
    } catch (err) {
      // setCityProperties(dummyCityProperties)
      alert('in handle change')
    }
  }

  const renderSelect = () => {
    if (!cities){
      return(
        <Select loading></Select>
      )
    } else {
      return (
        <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
          {cities.map((c)=>{
            return(
              <Option key = {c} value={c}>{c}</Option>
            )
          })}
        </Select>
      )
    }
  }

  const renderCity = ()=>{
    if(!cityProperties){
      return(
        <p>No City Selected</p>
      )
    } else {
      return (
        <div>
          {/* <p>{city} selected</p> */}
          <Row>
          {cityProperties.map(c=>{
            return(
              <Col key={c.property_id} sm = {24} md = {12} lg = {8} >
                <PropertyCard {...c} />
              </Col>
            )
          })}
          </Row>
        </div>
      )
    }
  };

  return(
    <Container>     
      <h1>Cities Page</h1>
      {renderSelect()}
      {renderCity()}
    </Container>
  )
};

export default Cities;