const loadData = () => {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a';
    fetch(url)
    .then(res => res.json())
    .then(data => displayData(data.drinks))
}
loadData();
const displayData = posts => {
    const mainContainer = document.getElementById('main-container');
    // mainContainer.textContent = ''; 
    posts.forEach(post => {
        // console.log(post);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div class="col">
                <div class="card">
                    <img src="${post.strDrinkThumb}" class="card-img-top img-fluid" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${post.dateModified}</h5>
                        <p class="card-text">${post.strInstructions.slice(0,50)}</p>
                        <button onclick="loadDrinksDetails()" class="btn btn-info">Details</button>
                    </div>
                </div>
            </div>
        
        `;
        mainContainer.appendChild(div);

    });
}



const loadDrinksDetails = () => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
    .then(res => res.json())
    .then(data => displayDrinkDetails(data.drinks[0]));

}

const displayDrinkDetails = drink => {
    console.log(drink);
    const showDetails = document.getElementById('show-details');
    showDetails.textContent = ''; //clear content
    const div = document.createElement('div');
    div.classList.add('content');
    div.innerHTML = `
    <div class="col">
        <div class="card">
            <img src="${drink.strDrinkThumb}" class="card-img-top w-50 mx-auto" alt="...">
            <h2>${drink.strDrink}</h2>
            <p>${drink.strInstructions}</p>

        </div>
    </div>
    `;
    showDetails.appendChild(div);
}




