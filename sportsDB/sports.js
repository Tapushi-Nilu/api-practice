// const loadLeague = () => {
//     const url = `https://www.thesportsdb.com/api/v1/json/1/all_leagues.php`;
//     // console.log(url);
//     fetch(url)
//     .then(res => res.json())
//     .then(data => displayLeague(data.leagues))
// }
// loadLeague();
// const displayLeague = leagues => {
//     console.log(leagues);
//     const showLeague = document.getElementById('show-league');
//     leagues.forEach(league => {
//         const div = document.createElement('div');
//         div.innerHTML =`
//             <div class="col">
//                 <div class="card h-100">
//                     <div class="card-body">
//                         <h5 class="card-title">${league.strLeague}</h5>
//                         <p class="card-text">${league.strLeagueAlternate}</p>
//                     </div>
//                 </div>
//             </div>
        
//         `;
//         showLeague.appendChild(div)


//     });
// }











const loadImg = () => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/all_sports.php`;
    fetch(url)
    .then(res => res.json())
    .then(data => showImg(data.sports));
}
loadImg();

const showImg = images => {
    const imgContainer = document.getElementById('show-img');
    
    images.forEach(image => {
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card h-100">
        <img src="${image.strSportThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${image.strSport}</h5>
          <p class="card-text">${image.strSportDescription.slice(0, 200)}</p>
          </br>
          <button onclick="loadDetails(${image})" class="btn btn-warning">Details</button>
        </div>
      </div>
        `;
        imgContainer.appendChild(div);
    });
}



const loadDetails = (image) => {
  console.log(image.strSport);
}

const showDetails = teams => {
  const showContainer = document.getElementById('show-details');
  
  teams.forEach(team => {
    const div = document.createElement('div');
    div.innerHTML = `
        <div class="card h-100">
          <img src="${team.strStadiumThumb}" class="card-img-top" alt="...">
            <div class="card-body">
            <h4 class="card-title">${team.idTeam}</h4>
            <p class="card-text">${team.strStadiumDescription.slice(0, 200)}</p>

            </div>
        </div>
   `;
  showContainer.appendChild(div);
  

  });
  
}