// async function handalClothes(){
//     const res = await fetch(db.json);
//     const jsonData = await response.json();
//     console.log(jsonData);
// }
let Data={
    Closth:{
        img:[
            "https://www.bookwormreads.co/_next/static/media/base_clear.acf95404.png",
            "https://www.bookwormreads.co/_next/static/media/base_clear.acf95404.png",
            "https://www.bookwormreads.co/_next/static/media/base_clear.acf95404.png",
            "https://www.bookwormreads.co/_next/static/media/base_clear.acf95404.png",
            "https://www.bookwormreads.co/_next/static/media/base_clear.acf95404.png",
            "https://www.bookwormreads.co/_next/static/media/base_clear.acf95404.png",
            "https://www.bookwormreads.co/_next/static/media/base_clear.acf95404.png",
            "https://www.bookwormreads.co/_next/static/media/base_clear.acf95404.png",
            "https://www.bookwormreads.co/_next/static/media/base_clear.acf95404.png",
            "https://www.bookwormreads.co/_next/static/media/base_clear.acf95404.png",
            "https://www.bookwormreads.co/_next/static/media/base_clear.acf95404.png",
            "https://www.bookwormreads.co/_next/static/media/base_clear.acf95404.png",
            "https://www.bookwormreads.co/_next/static/media/base_clear.acf95404.png",
            "https://www.bookwormreads.co/_next/static/media/base_clear.acf95404.png",
            "https://www.bookwormreads.co/_next/static/media/base_clear.acf95404.png",
            "https://www.bookwormreads.co/_next/static/media/base_clear.acf95404.png",
            "https://www.bookwormreads.co/_next/static/media/base_clear.acf95404.png",
            "https://www.bookwormreads.co/_next/static/media/base_clear.acf95404.png",
    ]
    },
    Hat:{
        img:[
            "https://www.bookwormreads.co/_next/static/media/base_clear.acf95404.png",
            "https://www.bookwormreads.co/_next/static/media/base_clear.acf95404.png",
            "https://www.bookwormreads.co/_next/static/media/base_clear.acf95404.png",
            "https://www.bookwormreads.co/_next/static/media/base_clear.acf95404.png",
            "https://www.bookwormreads.co/_next/static/media/base_clear.acf95404.png",
    ]
    },
    Shoes:{
        img:[
            "https://www.bookwormreads.co/_next/static/media/base_clear.acf95404.png",
            "https://www.bookwormreads.co/_next/static/media/base_clear.acf95404.png",
            "https://www.bookwormreads.co/_next/static/media/base_clear.acf95404.png",
            "https://www.bookwormreads.co/_next/static/media/base_clear.acf95404.png",
            "https://www.bookwormreads.co/_next/static/media/base_clear.acf95404.png",
            "https://www.bookwormreads.co/_next/static/media/base_clear.acf95404.png",
            "https://www.bookwormreads.co/_next/static/media/base_clear.acf95404.png",
            "https://www.bookwormreads.co/_next/static/media/base_clear.acf95404.png",
            "https://www.bookwormreads.co/_next/static/media/base_clear.acf95404.png",
            "https://www.bookwormreads.co/_next/static/media/base_clear.acf95404.png",
            "https://www.bookwormreads.co/_next/static/media/base_clear.acf95404.png",
            "https://www.bookwormreads.co/_next/static/media/base_clear.acf95404.png",
            "https://www.bookwormreads.co/_next/static/media/base_clear.acf95404.png",
            "https://www.bookwormreads.co/_next/static/media/base_clear.acf95404.png",
            "https://www.bookwormreads.co/_next/static/media/base_clear.acf95404.png",
            "https://www.bookwormreads.co/_next/static/media/base_clear.acf95404.png",
            "https://www.bookwormreads.co/_next/static/media/base_clear.acf95404.png",
            "https://www.bookwormreads.co/_next/static/media/base_clear.acf95404.png",
            "https://www.bookwormreads.co/_next/static/media/base_clear.acf95404.png",
            "https://www.bookwormreads.co/_next/static/media/base_clear.acf95404.png",
            "https://www.bookwormreads.co/_next/static/media/base_clear.acf95404.png",
    ]  
    },
    Accessories:{
        img:[
            "https://www.bookwormreads.co/_next/static/media/base_clear.acf95404.png",
            "https://www.bookwormreads.co/_next/static/media/base_clear.acf95404.png",
            "https://www.bookwormreads.co/_next/static/media/base_clear.acf95404.png",
    ]  
    }
}
let mainContainer=document.getElementById("appendDiv")
function handalClothes(){
    mainContainer.innerHTML=""
    Data.Closth.img.map(function(elem){
        var Box=document.createElement("div");
        Box.setAttribute("class","box");
        mainContainer.append(Box);
        var insideImg=document.createElement("img");
        insideImg.setAttribute("class","insideImg");
        insideImg.src=elem
        Box.append(insideImg);
    })
}
function handalHats(){
    mainContainer.innerHTML=""
    Data.Hat.img.map(function(elem){
        var Box=document.createElement("div");
        Box.setAttribute("class","box");
        mainContainer.append(Box);
        var insideImg=document.createElement("img");
        insideImg.setAttribute("class","insideImg");
        insideImg.src=elem
        Box.append(insideImg);
    })
}
function handalShoes(){
    mainContainer.innerHTML=""
    Data.Shoes.img.map(function(elem){
        var Box=document.createElement("div");
        Box.setAttribute("class","box");
        mainContainer.append(Box);
        var insideImg=document.createElement("img");
        insideImg.setAttribute("class","insideImg");
        insideImg.src=elem
        Box.append(insideImg);
    })
}
function handalaccessories(){
    mainContainer.innerHTML=""
    Data.Accessories.img.map(function(elem){
        var Box=document.createElement("div");
        Box.setAttribute("class","box");
        mainContainer.append(Box);
        var insideImg=document.createElement("img");
        insideImg.setAttribute("class","insideImg");
        insideImg.src=elem
        Box.append(insideImg);
    })
}