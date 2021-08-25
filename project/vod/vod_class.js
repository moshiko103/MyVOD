function VODClass(_parent,_img,_name,_views,_rating,_info){
    this.parent = _parent;
    this.img = _img;
    this.name = _name;
    this.views = _views;
    this.rating = _rating;
    this.info = _info;
}

VODClass.prototype.addUi = function(){
    var newBox = document.createElement("div");
    newBox.className = "box";
    this.parent.appendChild(newBox);

    let boxImg = document.createElement("img");
    boxImg.src=this.img;
    boxImg.id=this.name;

    var insideBox = document.createElement("div");
    insideBox.className = "in_box";

    newBox.appendChild(boxImg);
    newBox.appendChild(insideBox);
    insideBox.innerHTML += `<h2 style="font-size:1.25em">${this.name}</h2>`;
    insideBox.innerHTML += `<div>Views : ${this.views}</div>`;
    insideBox.innerHTML += `<div>Rating : ${this.rating}</div>`;

    newBox.onclick = function(){
        id_dark.style.display = "flex";
        id_dark_img.src = this.img;
        id_dark_h2.innerHTML = this.name;
        id_dark_p.innerHTML = this.info;
    }.bind(this);

    newBox.onmouseover = function(){
        document.getElementById(this.name).style.transform = "scale(10)";
        document.getElementById(this.name).style.opacity="0";
        document.getElementById(this.name).style.height="0";

        insideBox.style.transition="1s";
        insideBox.style.transitionDelay="0.6s";
        insideBox.style.opacity="1";
    }.bind(this);

    newBox.onmouseout = function(){
        document.getElementById(this.name).style.transform = "scale(1)";
        document.getElementById(this.name).style.opacity="1";
        document.getElementById(this.name).style.height="100%";

        insideBox.style.transitionDelay="0s";
        insideBox.style.transition="0s";
        insideBox.style.opacity="0";
    }.bind(this);

}