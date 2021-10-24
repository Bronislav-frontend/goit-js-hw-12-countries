import refs from './refs'

export function createCountryList(template, data) {
  refs.countryList.insertAdjacentHTML('beforeend', template(data))
}