function onCatBoxClick(_cat,_title) {
    sessionStorage.setItem('category', _cat);
    sessionStorage.setItem('title', _title);
    window.open("vod/vod.html","_self");
}