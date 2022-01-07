// const apdata = [
//   {
//       "id": 1,
//       "price": 1405737,
//       "beds": 7,
//       "baths": 3,
//       "city": "SLC",
//       "zip": "70044",
//       "street": "62150 Hills Points",
//       "agent_id": 1,
//       "first_name": "Kurt",
//       "last_name": "Champlin",
//       "email": "eric_dach@robel.co",
//       "address_id": 1
//   },
//   {
//       "id": 2,
//       "price": 1219111,
//       "beds": 2,
//       "baths": 4,
//       "city": "Draper",
//       "zip": "48140-6672",
//       "street": "179 Cristobal Track",
//       "agent_id": 1,
//       "first_name": "Kurt",
//       "last_name": "Champlin",
//       "email": "eric_dach@robel.co",
//       "address_id": 2
//   },
//   {
//       "id": 3,
//       "price": 621438,
//       "beds": 8,
//       "baths": 3,
//       "city": "Sandy",
//       "zip": "17250",
//       "street": "3241 King Courts",
//       "agent_id": 1,
//       "first_name": "Kurt",
//       "last_name": "Champlin",
//       "email": "eric_dach@robel.co",
//       "address_id": 3
//   },
//   {
//       "id": 4,
//       "price": 1120976,
//       "beds": 8,
//       "baths": 5,
//       "city": "SLC",
//       "zip": "93237-6143",
//       "street": "1333 Donovan Glens",
//       "agent_id": 1,
//       "first_name": "Kurt",
//       "last_name": "Champlin",
//       "email": "eric_dach@robel.co",
//       "address_id": 4
//   },
//   {
//       "id": 5,
//       "price": 306253,
//       "beds": 5,
//       "baths": 6,
//       "city": "SLC",
//       "zip": "17278",
//       "street": "244 Marlo Drive",
//       "agent_id": 1,
//       "first_name": "Kurt",
//       "last_name": "Champlin",
//       "email": "eric_dach@robel.co",
//       "address_id": 5
//   },
//   {
//       "id": 7,
//       "price": 854571,
//       "beds": 7,
//       "baths": 1,
//       "city": "Draper",
//       "zip": "48629",
//       "street": "849 Francina Path",
//       "agent_id": 2,
//       "first_name": "Mercedes",
//       "last_name": "Raynor",
//       "email": "korey_rippin@lind.net",
//       "address_id": 7
//   },

// ]

// convert data to agentProperties
// {[
//   name: "Mercedes Raynor"
//   email: "korey_ripping@lind.net"
//   properties: []
// ]}

// const unique = (data)=> {
//   let uniqueAgents = [... new Set (data.map(agent=>agent.agent_id))];
//   let normalizedData = uniqueAgents.map(id =>{
//     let properties = data.filter(d=>d.agent_id === id)
//     let filteredProperties = properties.map(p=>{
//       return {key:p.id, sq_ft: p.sq_ft,price: p.price, beds:p.beds, baths:p.baths, city: p.city, zip:p.zip, street:p.street}
//     })
//     return {
//       name: properties[0].first_name + ' ' + properties[0].last_name,
//       email: properties[0].email,
//       properties: filteredProperties
//     }
//   })
//   return normalizedData
// }


// let newArray = unique(apdata)

// console.log(newArray)

const originalArray = [3,4,1,5,2]

const selectionSort = (array)=>{
  let length = array.length;
  for (let i = 0; i<length; i++) {
    let min = i;
    for (let m = min + 1; m <length; m++){
      if (array[min]>array[m]) {
        min = m
      }
    }
    if (min !== i) {
      let temp = array[i];
      array[i] = array[min]
      array[min] = temp
    }
  }
  return array
};

let answer = selectionSort(originalArray)

console.log(answer)




secondArray = [5,7,2,4,6,2,4,3,8]


const otherSelectionSort = (array) =>{
  let length = array.length;
  for (let i = 0; i<length; i++) {
    let min = i;
    for (let m = min + 1; m<length; m++) {
      if(array[m] < array[min]){
        min = m
      }
    }
    if ( min !== i) {
    let temp = array[i];
    array[i] = array[min];
    array[min] = temp;}
  }
  return array
};

console.log(otherSelectionSort(secondArray))