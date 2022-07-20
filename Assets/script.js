var input = document.querySelector("#search-field");
 var btn = document.querySelector("#btn");
 var saveBtn = document.querySelector("#saveBtn");
//  var historyInput =  document.querySelector("#historyInput");
 var showDisplay = document.querySelector("#showDisplay") 
 var dialog = document.getElementById("dialog")

  var localStorageImages = [

   ]

  
 
var cardEl = document.getElementById("card");
var  body = document.body 
var element;
var close = document.getElementById("close");

close.addEventListener("click", function(event){
  event.preventDefault()
  dialog.style.visibility = "hidden";
})



  
  //  showDisplay.addEventListener("click", function(event) {
  //    event.preventDefault()
  //    element = event.target;
  //    if (element.matches("img")) {
  //      cardEl.textContent = "";
  //      cardEl.append(element)
      
      
      //   // fetch latest array from localstorgage
      //    localStorageImages = localStorage.getItem("img-save") ? 
      //    JSON.parse(localStorage.getItem("img-save")) : []
      // // //  // add the new value to that
      // // //  // save to localstorage
      //    localStorageImages.push(element.src)
      //    localStorage.setItem("img-save", JSON.stringify(localStorageImages))
     
      // console.log(element)
     
    
    //  saveBtn.addEventListener("click" , function(event){
    //    event.preventDefault()
    //    // fetch latest array from localstorgage
    //    localStorageImages = localStorage.getItem("img-save") ? 
    //     JSON.parse(localStorage.getItem("img-save")) : []
    //   //  // add the new value to that
    //    // save to localstorage
    //     localStorageImages.push(element.src)
    //     localStorage.setItem("img-save", JSON.stringify(localStorageImages))
     
    //   console.log(element)
    
    //  })




     
     
             
              
             
     
    

     

      // saveBtn.addEventListener("click" , function(){
      
 
        //  var cardElImg = document.querySelector("#card > img" ).getAttribute("src")
        //  console.log(cardElImg)
    //      localStorageImages.push(cardEl)
    //    localStorage.setItem("img-save",JSON.stringify(  localStorageImages))
    // // //    window.location.href = "./images.html"
   

    //   })
  

  
 




 function searchShow(event){
   event.preventDefault()
 
  
   var url = `https://api.tvmaze.com/search/shows?q=${input.value}`

    fetch(url)
 .then(response => response.json()
 ) 
   
   
    .then((JSONData) => {
      showDisplay.innerHTML = "";
         console.log
         (JSONData);
         for(var i = 0;  i  < JSONData.length; i++){
         

         var showName = JSONData[i].show.name
         var nameEl = document.createElement("a")
         nameEl.innerText = showName
        var  url = JSONData[i].show.officialSite 
         nameEl.setAttribute( "href", url)
         nameEl.setAttribute("style", "display: block; font-size: 30px;")
       body.append(showDisplay)
    
          showDisplay.
          append(nameEl)
          var showImage = document.createElement("img")

          showImage.setAttribute("style"  , "display: inline;")
          showImage.setAttribute( "src" , JSONData[i].show.image.medium)
          showImage.setAttribute("href" ,url)
           url = JSONData[i].show.officialSite 
          // showImage.setAttribute("style"  , "display: flex;")
         body.append(showDisplay)
          showDisplay.append(showImage)
       
        
         var showPremiered = JSONData[i].show.premiered
         var premieredEl = document.createElement("p")
         premieredEl.innerHTML = showPremiered +""+  "premier date";
          var premiered = JSONData[i].show.premiered
          premieredEl.setAttribute("href" , url)
          
          premieredEl.setAttribute("style", "display: inline; text-align: center;font-size;30px; font-weight: 900px;")
          // premieredEl.setAttribute("style", "border: none;")
          // premieredEl.setAttribute("style", "color: blue;")
          
         
          body.append(showDisplay)
         showDisplay.
         append(premieredEl)
         
         var showGenres = JSONData[i].show.genres
         var genresEl = document.createElement("p")
         genresEl.innerHTML = showGenres
          var genres = JSONData[i].show.genres
          genresEl.setAttribute( "href", url)
         genresEl.setAttribute("style", "display: block; text-align: center; font-size: 30px; font-weight: 1000px;")
        
         body.append(showDisplay)
         showDisplay.
         append(genresEl)

         var showStatus = JSONData[i].show.status
         var statusEl = document.createElement("p")
         statusEl.innerHTML = showStatus
          var status= JSONData[i].show.status
          statusEl.setAttribute( "href", url)
         statusEl.setAttribute("style", "display: block; text-align: center; font-size: 30px; font-weight: 1000px;")
         
         body.append(showDisplay)
        
         showDisplay.append(statusEl)

         var showTime = JSONData[i].show.runtime
         var timeEl = document.createElement("p")
         timeEl.innerHTML= showTime +"" + "min runtime"
          var runtime = JSONData[i].show.runtime
         
         timeEl.setAttribute( "href", url)
         timeEl.setAttribute("style", "display: block; text-align: center; font-size: 30px; font-weight: 1000px")
        
         body.append(showDisplay)
         showDisplay.
         append(timeEl)

          var showDays = JSONData[i].show.schedule.days
         var daysEl = document.createElement("p")
          daysEl.innerHTML =  "shows on:" +  showDays
            // var days= JSONData[i].show.schedule.days
            daysEl.setAttribute( "href", url)
          daysEl.setAttribute("style", "display: block; text-align: center; font-size: 30px; font-weight: 1000px;")
         
          body.append(showDisplay)
          showDisplay.
          append(daysEl)

          var showZone = JSONData[i].show.network.country.timezone
          var timezoneEl = document.createElement("p")
          timezoneEl.innerText = showZone
          timezoneEl.setAttribute( "href", url)
        timezoneEl.setAttribute("style", "display: block; text-align: center; font-size: 30px; font-weight: 1000px;")
       
        body.append(showDisplay)
        showDisplay.
        append(timezoneEl)

            var showNetwork = JSONData[i].show.network.name
            var netEl = document.createElement("p")
             netEl.innerText =   showNetwork
               var network = JSONData[i].show.network.name
               netEl.setAttribute( "href", url)
             netEl.setAttribute("style", "display: block; text-align: center; font-size: 30px; font-weight: 1000px;")
            
             body.append(showDisplay)
             showDisplay.
             append(netEl)

             var showSummary = JSONData[i].show.summary
             var summaryEl = document.createElement("p")
             summaryEl.innerHTML =  showSummary
             summaryEl.setAttribute( "href", url)
           summaryEl.setAttribute("style", "display: block; text-align: center; font-size: 30px; font-weight: 1000px;")
          
           body.append(showDisplay)
           showDisplay.
           append(summaryEl)

            //  var showImage = document.createElement("img")
            
            //  showImage.setAttribute("style"  , "display: inline;")
            //  showImage.setAttribute( "src" , JSONData[i].show.image.medium)
            //  showImage.setAttribute("href" ,url)
            //   url = JSONData[i].show.officialSite 
            // //  showImage.setAttribute("style"  , "display: inline;")
            // body.append(showDisplay)
            //  showDisplay.append(showImage)

          
         }
         
         
         
         
         
        

        
          var  results = JSONData.map(element => element.show.name)
         console.log(results);

      
      var  results = JSONData.map(element => element.show.genres)
      console.log(results);

      var  results = JSONData.map(element => element.show.premiered)
      console.log(results);

      var  results = JSONData.map(element => element.show.status)
      console.log(results);

      var  results = JSONData.map(element => element.show.runtime)
      console.log(results);

       var  results = JSONData.map(element => element.show.schedule.days)
       console.log(results); 

         var  results = JSONData.map(element => element.show.network.timezone)
         console.log(results);

         var  results = JSONData.map(element => element.show.network.name)
         console.log(results);

         
   }); 


     
      
   function renderResults(){
     
       input.value === query
      searchShow(query);
       
       

      }
   
    
    } 

    showDisplay.addEventListener("click", function(event) {
      event.preventDefault()
      element = event.target;
      if (element.matches("img")) {
        cardEl.textContent = "";
         cardEl.append(element)
         dialog.style.visibility = "visible";
       }
    }) 

    saveBtn.addEventListener("click" , function(event){
      event.preventDefault()
      // fetch latest array from localstorgage
      localStorageImages = localStorage.getItem("img-save") ? 
       JSON.parse(localStorage.getItem("img-save")) : []
     //  // add the new value to that
      // save to localstorage
      var href = element.getAttribute("href")
      console.log(href)
       localStorageImages.push({src:element.src, url:href})
       localStorage.setItem("img-save", JSON.stringify(localStorageImages))
    
     console.log(element)
      dialog.style.visibility = "hidden";
   
    })




    btn.addEventListener("click"  , searchShow);

         
                
        
      
   
      
   

