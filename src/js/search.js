import debounce from 'lodash.debounce';
import refs from './refs'
import countryTpl from '../templates/countryTpl.hbs'
import countriesTpl from '../templates/countriesTpl.hbs'
import fetchCountries from './fetchCountries';
import { createCountryList } from './create-countries-list'
import { onError, onWarning }  from './notifications'

export function onSearch(evt) {
  if (evt.target.value === '') {
    return refs.countryList.innerHTML = ''
  }

  refs.countryList.innerHTML = ''
  
  fetchCountries(evt.target.value).then(result => {
    if (result.length > 10) {
      return onWarning()
    } else if (result.length > 2 && result.length < 10) {
      createCountryList(countriesTpl, result)
    } else if (result.length === 1) {
      createCountryList(countryTpl, result)
    } else if (result.status === 404) {
      onError()
    }
  })
}

refs.input.addEventListener('input', debounce(onSearch, 500))