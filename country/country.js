const loadCountry = () =>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => displayCountries(data));
}
loadCountry();

const displayCountries = countries => {
    const countriesDiv = document.getElementById('countries');
    countries.forEach(country =>{
        // console.log(country);
        const div = document.createElement('div')
        div.classList.add('country');
        div.innerHTML = `
            <h3>${country.name}</h3>
            <p>${country.capital}</p>
            <small>${country.population}</small>
            </br> </br>
            <button onclick="loadCountryDetail('${country.name}')">Details</button>
        `

       div.style.border = '2px solid khaki';
       div.style.margin = '20px';
       countriesDiv.appendChild(div);

    })

}

const loadCountryDetail = name =>{
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetail(data[0]))
}

const displayCountryDetail = country => {
    const countryDiv = document.getElementById('country-detail');
    countryDiv.innerHTML= `
        <h4>${country.name}</h4>
        <p>${country.capital}</p>
        <img width="200px" src="${country.flag}">
    
    `
    countryDiv.style.backgroundColor = "khaki";
    countryDiv.style.margin = "20px";
    countryDiv.style.padding = "20px";
    countryDiv.style.borderRadius = "10px";
    countryDiv.style.width = "350px";
}



