let movie=[
    {
        id:1,
        title:"World War Z",
        img:"./img/movie0.jpg",
        date:"2020 ‧ Anime ‧ 1 season"
    },
    {
        id:2,
        title:"Train To Busan",
        img:"./img/movie1.jpg",
        date:"2020 ‧ Anime ‧ 1 season"
    },
    {
        id:3,
        title:"HOWL'S",
        img:"./img/movie2.jpg",
        date:"2020 ‧ Anime ‧ 1 season"
    },
    {
        id:4,
        title:"The Wind Rises",
        img:"./img/movie3.jpg",
        date:"2020 ‧ Anime ‧ 1 season"
    },
    {
        id:5,
        title:"Car Go",
        img:"./img/movie4.jpg",
        date:"2020 ‧ Anime ‧ 1 season"
    },
    {
        id:6,
        title:"Avengers",
        img:"./img/movie5.jpg",
        date:"2020 ‧ Anime ‧ 1 season"
    },
    {
        id:7,
        title:"Multiverse Of Madness",
        img:"./img/movie6.jpg",
        date:"2020 ‧ Anime ‧ 1 season"
    },
    {
        id:8,
        title:"Avatar",
        img:"./img/movie7.jpg",
        date:"2020 ‧ Anime ‧ 1 season"
    },
    {
        id:9,
        title:"Mulan",
        img:"./img/movie8.jpg",
        date:"2020 ‧ Anime ‧ 1 season"
    },
    {
        id:10,
        title:"Corpse Pride",
        img:"./img/movie9.jpg",
        date:"2020 ‧ Anime ‧ 1 season"
    },
    {
        id:11,
        title:"Jujutsu Kaisen",
        img:"./img/serie0.jpg",
        date:"2020 ‧ Anime ‧ 1 season"
    },
    {
        id:12,
        title:"Demon Slayer",
        img:"./img/serie1.jpg",
        date:"2020 ‧ Anime ‧ 1 season"
    }
]
series=""
movie.map((se)=>{
    series+=`
    <div class="row image-shadow position-relative" style="background-image: url('${se.img}');   background-repeat:no-repeat;
    background-size: cover;
    background-position: 70%; opacity:0.9;">
                <div class=" col-lg-5 col-md-5 d-flex justify-content-center align-items-center">
                    <div class="card w-50 h-50 ">
                    <img src="${se.img}"  alt="" srcset="" class="w-100 h-100 rounded" >
                </div>
                </div>
                <div class="col-lg-7 col-md-7 d-flex align-items-center">
                    <div class="mt-5">
                       <p style="color:#F8F6F6">${se.date}</p>
                       <h1 style="color:#F8F6F6" class="font-title">${se.title}</h1>
                       <button type="button" style="color:#F8F6F6"  class="btn btn-secondary bg-btn-color bg-btn border-btn font-title "><a style="text-decoration: none; color: #F8F6F6;" href="view.html">WATCH NOW</a></button>
                       <div class="row">
                        <div class="col-12 text-center g-4 ">
                        <div class="me-2 gap-5 mb-3" role="group" aria-label="First group">
                            <button type="button" class="btn btn-secondary bg-btn"><a style="text-decoration: none; color: #1E1E1E;"href="view.html">
                            EP 01</a></button>
                            <button type="button" class="btn btn-secondary bg-btn"><a style="text-decoration: none; color: #1E1E1E;"href="view.html">
                            EP 02</a></button>
                            <button type="button" class="btn btn-secondary bg-btn"><a style="text-decoration: none; color: #1E1E1E;"href="view.html">
                            EP 03</a></button>
                            <button type="button" class="btn btn-secondary bg-btn"><a style="text-decoration: none; color: #1E1E1E;"href="view.html">
                            EP 04</a></button>
                            <button type="button" class="btn btn-secondary bg-btn"><a style="text-decoration: none; color: #1E1E1E;"href="view.html">
                            >></a></button>
                          </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <br>
    `;
})
document.getElementById("series").innerHTML=series