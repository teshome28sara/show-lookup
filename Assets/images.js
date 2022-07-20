var imgSave = JSON.parse(localStorage.getItem("img-save"))
console.log(imgSave)
var canvas = document.getElementById("canvas")






for( var i = 0; i < imgSave.length; i ++ ){
        var link = document.createElement("a")
        link.setAttribute("href", imgSave[i].url)
        var selectedImage = document.createElement("img")
        selectedImage.setAttribute( "src" , imgSave[i].src)
            //  showImage.setAttribute("href" ,url)

        selectedImage.setAttribute("style"  , "display: inline;")
        selectedImage.setAttribute("data-index", i);
        //  showImage.setAttribute( "src" , JSONData[i].show.image.medium)
        //  showImage.setAttribute("href" ,url)
        //   url = JSONData[i].show.officialSite 
        //  showImage.setAttribute("style"  , "display: inline;")
        // body.append(canvas)
        link.append(selectedImage)
        canvas.append(link)
}

// add event listner canvas
// event.target - get data attribute
// find the index e.g. 3
// get localstorage  - [''] 
// splice(index, 1) : remove from array at a index
// save this updated array to localstorage
// update canvas - remove the image element at that index

// window.localStorage.getItem("img-save"
// console.log(window.localStorage.getItem("img-save")))
document.getElementById("clear").addEventListener('click', function() {
        localStorage.clear();
        // remove
        canvas.innerHTML = ""
}) 

var backBtn = document.getElementById("backBtn");

var backBtn = document.getElementById("backBtn");
backBtn.addEventListener("click" , () => {
    document.location.href = "index.html";
   
})
