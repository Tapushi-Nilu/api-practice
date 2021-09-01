const getQuotes = () => {
    fetch ('https://api.kanye.rest')
    .then(res => res.json())
    .then(data => displayQuote(data))
}
const displayQuote = quote =>{
    const qouteElement = document.getElementById("quote");
    qouteElement.style.border = '1px solid #bbb';
    qouteElement.style.padding = '10px';
    qouteElement.style.backgroundColor = 'khaki';
    qouteElement.innerText = quote.quote;
}





