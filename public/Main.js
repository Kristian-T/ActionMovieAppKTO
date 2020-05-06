<!-- Array of movies -->
var movies =[
    {"title":"Kill Bill Vol. 1", "youtubeid":"https://www.youtube.com/watch?v=7kSuas6mRpk"},
    {"title":"Mad Max: Fury Road", "youtubeid":"https://www.youtube.com/watch?v=hEJnMQG9ev8"},
    {"title":"The Matrix", "youtubeid":"https://www.youtube.com/watch?v=vKQi3bBA1y8"},
    {"title":"Men in Black", "youtubeid":"https://www.youtube.com/watch?v=1Q4mhYF9aQQ"},
    {"title":"Shanghai Noon", "youtubeid":"https://www.youtube.com/watch?v=C6tduzl-EY8"},
    {"title":"Wanted", "youtubeid":"https://www.youtube.com/watch?v=edpEspHOeVU"}
];

<!-- Defining a urlname variable which holds the name of the movie, used later for the final url -->
let urlname = '';
<!-- Getting the grid div -->
let grid = document.getElementById("grid");

<!-- The for loop goes through each movie in the array, to fetch the individual movies from the API -->
for(let mov of movies ) {
    <!-- urlname is set to the title of the movie, and the spaces are eplaced with '+' signs using regex -->
    urlname = mov.title;
    urlname = urlname.replace(/ /g,"+");
    <!-- The final url is concocted with the api key at the end -->
    let url = 'https://www.omdbapi.com/?t='+urlname+'&apikey=700a62d0';

    fetch(url)
        .then(response => {
        return response.json();
    })
        .then(data => {
            <!-- Creating the different tags for the list -->
                const ma = document.createElement("a");
                const mli = document.createElement("li");
                const mdiv = document.createElement("div");
                const mptitle = document.createElement("p");
                const mpplot = document.createElement("p");
                const mprating = document.createElement("p");
                const mpage = document.createElement("p");
                const mimg = document.createElement("img");

            <!-- The inner html, src and href of the elements are set, and i add classes to the 'p' tags for different CSS styling -->
                mpplot.innerHTML = data.Plot;
                mpplot.classList.add("plottext");
                mprating.innerHTML = "Rating: " + data.imdbRating;
                mprating.classList.add("ratingtext")
                mptitle.innerHTML = data.Title;
                mptitle.classList.add("titletext");
                mimg.src = data.Poster;
                ma.href = mov.youtubeid;

            <!-- Calculate the age of the movie in years -->
                let CurrentDate = new Date().getFullYear();
                let age = CurrentDate - data.Year;
                mpage.innerHTML = "Age: " + age;

            <!-- Appending everything -->
                grid.appendChild(mli);
                mli.appendChild(mdiv);
                mli.appendChild(ma);
                ma.appendChild(mimg);
                mdiv.appendChild(mptitle);
                mdiv.appendChild(mpplot);
                mdiv.appendChild(mprating);
                mdiv.appendChild(mpage);

        })
        .catch(err => {
            const errorMessage = document.createElement('marquee');
            errorMessage.textContent = `Gah, it's not working!`;
        })
}
