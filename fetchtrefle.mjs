const _tk = 'fT6SCwjl3qodHv1xA2CZ8fTPNHO6G5FkrQbm5wUrSKU';
const _baseLink = 'https://trefle.io/api/v1/';
const link = `${_baseLink}kingdoms?token=${_tk}`;

let settings = { method: "Get" };

fetch(link, settings)
  .then(res => res.json())
  .then((json) => console.log(json, link));
