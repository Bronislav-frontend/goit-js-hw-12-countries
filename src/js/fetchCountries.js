export default function fetchCountries(name) {
  return fetch(`https://restcountries.com/v2/name/${name}`)
    .then(response => response.json())
    .catch(error => alert(error))
}