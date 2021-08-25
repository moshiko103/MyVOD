window.onload = function(){
   let category = sessionStorage.getItem('category');
   let title = sessionStorage.getItem('title');
   document.title = title;
   id_title.innerHTML = title;
    doAjax(category); 
    declareBtn();
    //createAllVOD()
}

function declareBtn(){
    id_dark.addEventListener("click",function(){
        id_dark.style.display = "none";
    })
}


function doAjax(_category){
    id_mama.innerHTML = "";
    var xmlHttp = new XMLHttpRequest();
    var url = "https://api.themoviedb.org/3/list/"+_category+"?api_key=d4bc3c640586e7f90dc68d8b300247ff&language=en-US&fbclid=IwAR2fAU7s72zXynmFpW78E2hAHHa8WX0QT-Nro28Uxuf09U4sPP_m5Dydqik";
    xmlHttp.onreadystatechange = function(){
        if(this.status == 200 && this.readyState == 4){
            var json_ar = JSON.parse(this.response).items
            console.table(json_ar);
           createAllVOD(json_ar)
        }
    }

    xmlHttp.open("GET", url, true);
    xmlHttp.send();
}

function createAllVOD(vod_ar){
    let urlPoster = "https://image.tmdb.org/t/p/w500/"
    for(var item of vod_ar){
        let {title,vote_average,vote_count,poster_path,overview} = item
        
        
        var myMovie = new VODClass(id_mama,urlPoster+poster_path,title,vote_count,vote_average,overview);
        myMovie.addUi();
    }
    document.getElementById("id_loading").style.display="none";
}