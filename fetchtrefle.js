import fetch from 'node-fetch'

const tk = 'fT6SCwjl3qodHv1xA2CZ8fTPNHO6G5FkrQbm5wUrSKU';
const baseLink = 'https://trefle.io/api/v1/';
const link = `${baseLink}species?token=${tk}`;
 
const getData = async (endpoint) => {
  let res = await fetch(endpoint);
  let res_json = await res.json()

  console.log(res_json)
}

getData(link)
