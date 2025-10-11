function comprobarImg() {

    const img1 = document.getElementById('img1');
    const img2 = document.getElementById('img2');
    if (img1.src.includes("1.png")) {
        img1.src  = "images/2.png"
        img2.src  = "images/1.png"
    }else if(img1.src.includes("2.png")){
        img1.src  = "images/1.png"
        img2.src  = "images/2.png"
    }else if(img2.src.includes("1.png")){
        img1.src  = "images/1.png"
        img2.src  = "images/2.png"
    }else if(img2.src.includes("2.png")){
        img1.src  = "images/2.png"
        img2.src  = "images/1.png"
    }
}