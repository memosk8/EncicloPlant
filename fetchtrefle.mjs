import fetch from "node-fetch";

const _tk = 'fT6SCwjl3qodHv1xA2CZ8fTPNHO6G5FkrQbm5wUrSKU';
const _baseLink = 'https://trefle.io/api/v1/';
const link = `${_baseLink}kingdoms?token=${_tk}`;

async function getData(link) {
  const res = await fetch(link).then(res => res.json())
  console.log(res)
}

export default getData(link)