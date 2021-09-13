const url='https://restcountries.eu/rest/v2/all'

export const getData = () => {
  fetch(url)
  .then(res => res.json())
  .then(data => localStorage.setItem('countries', JSON.stringify(data)))
  
  const fetchTime = new Date().getTime().toString();
  localStorage.setItem('lastFetchTime', fetchTime)
};

// console.log( 'kraje', localStorage.countries)

export const checkLocalStorage = () => {
  const nextFetch = new Date().getTime();
  const lastFetch = localStorage.lastFetchTime;
  const diff = Math.floor((nextFetch - lastFetch)/1000/60/60/24)
  const week = 7;

  if (!localStorage.countries || diff >= week) {
    getData()
  }
}
