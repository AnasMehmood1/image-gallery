
const accesskey = "8DUA9G3rS6U8QIz8HqBYyGpF015ixgBPvxpykD5Fs2E"

const formEl = document.querySelector("form")
const inputEl = document.getElementById("search-input")
const searchResults = document.querySelector(".search-results")
const showMore = document.getElementById("show-more-button")

let inputData = "";
let page = 1;


async function searchImages() {

   inputData=inputEl.value;
   const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accesskey}`
   const response = await fetch(url)
  const data = await response.json()
  console.log(data)
  const results = data.results
  if(page === 1){
    searchResults.innerHTML=""
  }
  results.map((result)=>{
    const imageWrapper = document.createElement("div")
    const image = document.createElement("img")
    imageWrapper.classList.add("search-result")
    image.src = result.urls.small
    imageWrapper.appendChild(image)
    searchResults.appendChild(imageWrapper)
})
page++
if(page>1){
    showMore.style.display = "block"
}
}

formEl.addEventListener("submit",(event)=>{
    event.preventDefault()
    // page = 1
    searchImages()
})

showMore.addEventListener("click",()=>{
    searchImages()
})


//     results.map((result) => {
//         const imageWrapper = document.createElement("div")
//         imageWrapper.classList.add("search-result")
//         const image = document.createElement("img")
//         image.src = result.urls.small
//         image.alt = result.alt_description
//         const imagelink = document.createElement("a")
//         imagelink.href = result.links.html
//         imagelink.target = "_blank"
//         imagelink.textContent = result.alt_description

//         imageWrapper.appendChild(image)
//         imageWrapper.appendChild(imagelink)
//         searchResults.appendChild(imageWrapper)
//     })


//     page++
//     if(page >1){
//         showMore.style.display = "block"
//     }

// }

// formEl.addEventListener("submit",(event)=>{
//     event.preventDefault()
//     page = 1
//     searchImages()
// })
// showMore.addEventListener("click",()=>{
   
//     searchImages()
// })


// inputData =inputEl.value
    // const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accesskey}`

    // const response = await fetch(url)
    // const data = await response.json()
    // console.log(data)