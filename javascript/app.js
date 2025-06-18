moviesCard.addEventListener("click", () => {
    contentCards.style.display = "inline";
    contentCards.innerHTML = `
        <i class="fas fa-times" id="closeCard"></i>
        <h1>Movies</h1>
        <div id="cardContent">
            <p>
            Explore a diverse collection of movies spanning all genres and generations - from timeless classics to the latest blockbusters. 
            Discover top-rated films, watch trailers, read in-depth reviews, and build your personal watchlist.
            </p>
        </div>  
    `;
    
    const closeCard = document.getElementById("closeCard");
    closeCard.addEventListener("click", () => {
        contentCards.style.display = "none";
    });
});


tvShowsCard.addEventListener("click", () => {
    contentCards.style.display = "inline";
    contentCards.innerHTML = `
        <i class="fas fa-times" id="closeCard"></i>
        <h1>TV Shows</h1>
        <div id="cardContent">
            <p>
            Browse trending and all-time favorite TV shows. Track episode releases, get notified about new seasons, 
            and join a passionate community of fans through discussions and ratings.
            </p>
        </div>  
    `;
    
    const closeCard = document.getElementById("closeCard");
    closeCard.addEventListener("click", () => {
        contentCards.style.display = "none";
    });
});


animeCard.addEventListener("click", () => {
    contentCards.style.display = "inline";
    contentCards.innerHTML = `
        <i class="fas fa-times" id="closeCard"></i>
        <h1>Anime</h1>
        <div id="cardContent">
            <p>
             Enter the vibrant world of anime - from legendary classics to the hottest seasonal hits. Stream episodes, rate your favorites,
             leave reviews, and connect with fellow anime fans around the globe.
            </p>
        </div>  
    `;
    
    const closeCard = document.getElementById("closeCard");
    closeCard.addEventListener("click", () => {
        contentCards.style.display = "none";
    });
});


gamesCard.addEventListener("click", () => {
    contentCards.style.display = "inline";
    contentCards.innerHTML = `
        <i class="fas fa-times" id="closeCard"></i>
        <h1>Games</h1>
        <div id="cardContent">
            <p>
             Stay updated with the latest video game releases, reviews, and community ratings. Dive into gameplay discussions, 
             share your experiences, and discover hidden gems across all platforms.
            </p>
        </div>  
    `;
    
    const closeCard = document.getElementById("closeCard");
    closeCard.addEventListener("click", () => {
        contentCards.style.display = "none";
    });
});