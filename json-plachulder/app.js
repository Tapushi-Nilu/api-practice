const loadData = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then(res => res.json())
    .then(data => displayPost(data));
}
loadData();

const displayPost = posts => {
    const mainContainer = document.getElementById('main-container');
    posts.forEach(post => {
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card h-100">
        <div class="card-body">
          <h5 class="card-title">${post.id}</h5>
          <h4 class="card-text">${post.title}</h4>
          <p class="card-text">${post.body}</p>
          <h3>${post.userId}</h3>
        </div>
      </div>
        `;
        mainContainer.appendChild(div);
        console.log(post)
    });
}