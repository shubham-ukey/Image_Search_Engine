const accessKey = "jbo-FMkWcuVJkhAtUVZUoDGjkgoomgrPubdv5Idvujc";
const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("serch-result");
const showMoreBtn = document.getElementById("show-more-btn");

let keyword = "";
let page = 1;

async function serchImages(){
    keyword = searchBox.value;
    const url ='https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12';

    const response = await fetch(url);
    const data = await response.json();

    if(page == 1){
        searchResult.innerHTML = "";
    }

    const results=data.results;
    results.map(result=>{
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imaheLink = document.createElement("a");
        iamgeLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.appendChild(image);
        searchResult.appendChild(imaheLink);
    })
    showMoreBtn.style.display="block";
}
searchForm.addEventListener("Submit", (e)=>{
    e.preventDefault();
    page=1;
    serchImages();
})
showMoreBtn.addEventListener("click", ()=>{
    page++;
    serchImages();
})