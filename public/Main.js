var movies =[
    {"title":"Kill Bill Vol. 1", "youtubeid":"https://www.youtube.com/watch?v=7kSuas6mRpk"},
    {"title":"Mad Max: Fury Road", "youtubeid":"https://www.youtube.com/watch?v=hEJnMQG9ev8"},
    {"title":"The Matrix", "youtubeid":"https://www.youtube.com/watch?v=vKQi3bBA1y8"},
    {"title":"Men in Black", "youtubeid":"https://www.youtube.com/watch?v=1Q4mhYF9aQQ"},
    {"title":"Shanghai Noon", "youtubeid":"https://www.youtube.com/watch?v=C6tduzl-EY8"},
    {"title":"Wanted", "youtubeid":"https://www.youtube.com/watch?v=edpEspHOeVU"}
];

let urlname = '';
let grid = document.getElementById("grid");

for(let mov of movies ) {
    urlname = mov.title;
    urlname = urlname.replace(/ /g,"+");
    let url = 'https://www.omdbapi.com/?t='+urlname+'&apikey=700a62d0';
    console.log(url);
    fetch(url)
        .then(response => {
        return response.json();
    })
        .then(data => {
                console.log(urlname);
                const ma = document.createElement("a");
                const mli = document.createElement("li");
                const mdiv = document.createElement("div");
                const mptitle = document.createElement("p");
                const mpplot = document.createElement("p");
                const mprating = document.createElement("p");
                const mpage = document.createElement("p");
                const mimg = document.createElement("img");

                mpplot.innerHTML = data.Plot;
                mpplot.classList.add("plottext");
                mprating.innerHTML = data.imdbRating;
                mprating.classList.add("ratingtext")
                mptitle.innerHTML = data.Title;
                mptitle.classList.add("titletext");
                mimg.src = data.Poster;
                ma.href = mov.youtubeid;

                grid.appendChild(mli);
                mli.appendChild(mdiv);
                mli.appendChild(ma);
                ma.appendChild(mimg);
                mdiv.appendChild(mptitle);
                mdiv.appendChild(mpplot);
                mdiv.appendChild(mprating);



        })
        .catch(err => {
            // Do something for an error here
            const errorMessage = document.createElement('marquee');
            errorMessage.textContent = `Gah, it's not working!`;
        })
}
