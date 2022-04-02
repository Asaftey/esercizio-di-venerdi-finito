//const itemFetch = fetch('http://api.covid19api.com/summary')
/* 1. Ritorna i Total Confirmed
   2.Ritorna la lista di tutte le country, con name countrycode e totalconfirmed
   3. Ritrona solo il più alto per i Total Confirmed e i Toltal confirmed più basso
 */


 
const covidFetch = async () =>{
    const response = await fetch('http://api.covid19api.com/summary')
    const data = await response.json()
    const totalConfirmed = data.Global.TotalConfirmed;
// parte 1 ritorna sull Html il total confirmed:
    const h1 = document.createElement('h1');
    document.querySelector('body').appendChild(h1);
    h1.textContent = `Total Confirmed: ${totalConfirmed}`

    const Country = data.Countries;
     // parte 2 ritorna i paesi e il zip
        Country.forEach(country => {
        const p = document.createElement('p');
        document.querySelector('body').appendChild(p).textContent = ` Il paese è ${country.Country} il code è ${country.CountryCode} e il totale di casi confermati ${country.TotalConfirmed}`
    
    });
    //parte 3 ritorna il min-max value
    const maxValueWithReduce = Country.reduce((a,b) => a.TotalConfirmed > b.TotalConfirmed ? a : b).TotalConfirmed;
    const minValueWhitReduce = Country.reduce((a,b) => a.TotalConfirmed < b.TotalConfirmed ? a : b).TotalConfirmed;

    const h2titolo = document.createElement('h2');
    document.querySelector('body').appendChild(h2titolo).textContent = `Total Confirm Max ${maxValueWithReduce}`;

    const h3titolo = document.createElement('h2');
    document.querySelector('body').appendChild(h3titolo).textContent = `Total Confirm Min ${minValueWhitReduce}`;
};


covidFetch();

