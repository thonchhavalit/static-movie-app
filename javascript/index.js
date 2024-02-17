
let movie=[
    {
        title:"World War Z",
        img:"./img/movie0.jpg",
        date:"2020 ‧ Anime ‧ 1 season"
    },
    {
        title:"Train To Busan",
        img:"./img/movie1.jpg",
        date:"2020 ‧ Anime ‧ 1 season"
    },
    {
        title:"HOWL'S",
        img:"./img/movie2.jpg",
        date:"2020 ‧ Anime ‧ 1 season"
    },
    {
        title:"The Wind Rises",
        img:"./img/movie3.jpg",
        date:"2020 ‧ Anime ‧ 1 season"
    },
    {
        title:"Car Go",
        img:"./img/movie4.jpg",
        date:"2020 ‧ Anime ‧ 1 season"
    },
    {
        title:"Avengers",
        img:"./img/movie5.jpg",
        date:"2020 ‧ Anime ‧ 1 season"
    },
    {
        title:"Multiverse Of Madness",
        img:"./img/movie6.jpg",
        date:"2020 ‧ Anime ‧ 1 season"
    },
    {
        title:"Avatar",
        img:"./img/movie7.jpg",
        date:"2020 ‧ Anime ‧ 1 season"
    },
    {
        title:"Mulan",
        img:"./img/movie8.jpg",
        date:"2020 ‧ Anime ‧ 1 season"
    },
    {
        title:"Corpse Pride",
        img:"./img/movie9.jpg",
        date:"2020 ‧ Anime ‧ 1 season"
    },
    {
        title:"Jujutsu Kaisen",
        img:"./img/serie0.jpg",
        date:"2020 ‧ Anime ‧ 1 season"
    },
    {
        title:"Demon Slayer",
        img:"./img/serie1.jpg",
        date:"2020 ‧ Anime ‧ 1 season"
    }
]

function itemFilter(arr,query){
    return arr.filter(
        (el)=>el.toLowerCase().includes(query.toLowerCase())
    )}
 
let card=""
let series=""
movie.map((el)=>{
    card+=`
    <div class="col-lg-2 col-md-3 col-sm-4">
            <div class="card h-75">
                <img src="${el.img}" alt="Avatar" class="image h-100 rounded" style="width:100%">
                <div class="middle rounded">
                  <div  class="text w-100"><a href="display.html">${el.title}</a></div>
                </div>
            </div>
        </div>
    `;
});
// let arr=["dara","sam"];
// console.log(itemFilter(movie[2].title,"dara"))
let searchtext=document.getElementById("searchtext")
function searchText(){
    let  isValue=false
    if(searchtext.value==""){
        alert("Please Input Value For Search...")       
    }else{
    let search =movie.filter((el)=>el.title.toLowerCase().includes(searchtext.value.toLowerCase()))
    search.map((el)=>{});
        
        search.forEach((e)=>{
            console.log(e)
            document.getElementById("movie").innerHTML=`
        <div class="offset-lg-5 col-lg-2 offset-md-4  col-md-4 col-sm-4 offset-sm-4">
                <div class="card h-75">
                    <img src="${e.img}" alt="Avatar" class="image h-100 rounded" style="width:100%">
                    <div class="middle rounded">
                      <div  class="text w-100"><a href="display.html">${e.title}</a></div>
                    </div>
                </div>
            </div>
        `;})
        
       isValue=true
    }
    if(!isValue){
        document.getElementById("movie").innerHTML=`
        <div class="col-12 ">
                <h1 class="text-center text-white">Not Found</h1>
            </div>
        `;
    }
    searchtext.value=""

 }
 document.getElementById("movie").innerHTML=card
 
 