const data = [
  {
      "id": 1,
      "price": 1405737,
      "beds": 7,
      "baths": 3,
      "city": "SLC",
      "zip": "70044",
      "street": "62150 Hills Points",
      "agent_id": 1,
      "first_name": "Kurt",
      "last_name": "Champlin",
      "email": "eric_dach@robel.co",
      "address_id": 1
  },
  {
      "id": 2,
      "price": 1219111,
      "beds": 2,
      "baths": 4,
      "city": "Draper",
      "zip": "48140-6672",
      "street": "179 Cristobal Track",
      "agent_id": 1,
      "first_name": "Kurt",
      "last_name": "Champlin",
      "email": "eric_dach@robel.co",
      "address_id": 2
  },
  {
      "id": 3,
      "price": 621438,
      "beds": 8,
      "baths": 3,
      "city": "Sandy",
      "zip": "17250",
      "street": "3241 King Courts",
      "agent_id": 1,
      "first_name": "Kurt",
      "last_name": "Champlin",
      "email": "eric_dach@robel.co",
      "address_id": 3
  },
  {
      "id": 4,
      "price": 1120976,
      "beds": 8,
      "baths": 5,
      "city": "SLC",
      "zip": "93237-6143",
      "street": "1333 Donovan Glens",
      "agent_id": 1,
      "first_name": "Kurt",
      "last_name": "Champlin",
      "email": "eric_dach@robel.co",
      "address_id": 4
  },
  {
      "id": 5,
      "price": 306253,
      "beds": 5,
      "baths": 6,
      "city": "SLC",
      "zip": "17278",
      "street": "244 Marlo Drive",
      "agent_id": 1,
      "first_name": "Kurt",
      "last_name": "Champlin",
      "email": "eric_dach@robel.co",
      "address_id": 5
  },
  {
      "id": 7,
      "price": 854571,
      "beds": 7,
      "baths": 1,
      "city": "Draper",
      "zip": "48629",
      "street": "849 Francina Path",
      "agent_id": 2,
      "first_name": "Mercedes",
      "last_name": "Raynor",
      "email": "korey_rippin@lind.net",
      "address_id": 7
  },

]

// convert data to agentProperties
// {[
//   name: "Mercedes Raynor"
//   email: "korey_ripping@lind.net"
//   properties: []
// ]}

const unique = ()=> {
  let uniqueAgents = [... new Set (data.map(agent=>agent.agent_id))];
  let newObjectArray = data.map((a)=>{
    return({name: a.first_name, agent_id: a.agent_id, email: a.email})
  });
  let newObject=uniqueAgents.map((agent)=>{
    let agentProperties = data.filter((p)=>{
      return (p.agent_id == agent.agent_id)
    })
    return({agent_name: agent.name, properties: agentProperties})
  });
  return uniqueAgents;
}

let newArray = unique()

console.log(newArray)