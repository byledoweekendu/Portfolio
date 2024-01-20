//Uchwyty:
const dark = document.querySelector("#dark");
const bright = document.querySelector("#bright");
const darkM = document.querySelector("#darkM");
const brightM = document.querySelector("#brightM");
const body = document.querySelector("body");
const page2 = document.querySelector("#page-2");
const page3 = document.querySelector("#page-3");
const nav = document.querySelector("nav");
const projects = document.querySelector("#page-3");
const list = document.querySelector("#list");
const categories = document.querySelector("#categories");
const categoriesMobile = document.querySelector("#categoriesMobile");
const footer = document.querySelector("#footer");
const form = document.querySelector("form");
const sideL = document.querySelector("#sideL");
const sideR = document.querySelector("#sideR");
const scrollPoint = document.querySelector("#scrollPoint");
const X = document.querySelector("#X");
const li = document.querySelector("li");
const ul = document.querySelector("ul");
const h3 = document.querySelector('h3');
const p = document.querySelector('p');
//

//Zmiana motywu:
function switchDark(){
    Object.assign(body.style,{background:"rgb(25, 25, 25)", transition:"500ms background-color"});
    Object.assign(nav.style,{background:"rgb(40, 40, 40)"});
    Object.assign(footer.style,{background:"rgb(40, 40, 40)"});
    Object.assign(form.style,{background:"rgb(50, 50, 50)"});
    Object.assign(sideL.style,{background:"rgb(40, 40, 40)"});
    Object.assign(sideR.style,{background:"rgb(40, 40, 40)"});
    Object.assign(categories.style,{background:"rgb(40, 40, 40)"});
    Object.assign(h3.style,{color:"white"});
}

function switchBright(){
    Object.assign(body.style,{background:"rgb(245, 245, 245)", transition:"500ms background-color"});
    Object.assign(nav.style,{background:"rgb(225, 225, 225)"});
    Object.assign(footer.style,{background:"rgb(225, 225, 225)"});
    Object.assign(form.style,{background:"rgb(225, 225, 225)"});
    Object.assign(sideL.style,{background:"rgb(225, 225, 225)"});
    Object.assign(sideR.style,{background:"rgb(225, 225, 225)"});
    Object.assign(categories.style,{background:"rgb(225, 225, 225)"});
    Object.assign(h3.style,{color:"black"});
}

dark.addEventListener('click', () => {
    switchDark();
})

darkM.addEventListener('click', () => {
    switchDark();
    Object.assign(list.style,{display:"none"});
})

bright.addEventListener('click', () => {
    switchBright();
})

brightM.addEventListener('click', () => {
    switchBright();
    Object.assign(list.style,{display:"none"});
})
//

 //Obsługa nav:
let lastSeen = null;

function fade(){
    scrollPoint.scrollIntoView();
    $(".tile").fadeOut(500);
    $(".minatureRS").fadeOut(500);
    $("#X").fadeOut(250);
}

function operationsTimeout(){
    page3.setAttribute('class', 'gridSmall');
    $("#back").fadeIn(500);
    $(".minatureRS").fadeIn(500);
}

 function place(){
    fade();
    const place = `<img src='obrazy/place/plac.jpg' alt='Plac zabaw' id='p1' class='minatureRS'>
    <img src='obrazy/place/plac2.jpg' alt='Plac zabaw 2' id='p2' class='minatureRS'>
    <img src='obrazy/place/plac3.jpg' alt='Plac zabaw 3' id='p3' class='minatureRS'>`;
    lastSeen = place;
    setTimeout(() => {
        $("#page-3").html(place);
        operationsTimeout();
	}, 500)
 }

 function ogrodowe(){
    fade();
    const ogrodowe =  `<img src='obrazy/ogrodowe/stolilawki.jpg' alt='Stół i ławki' id='o1' class='minatureRS'>
    <img src='obrazy/ogrodowe/stolilawki2.jpg' alt='Stół i ławki 2' id='o2' class='minatureRS'>`;
    lastSeen = ogrodowe;
    setTimeout(() => {
        $("#page-3").html(ogrodowe);
        operationsTimeout();
	}, 500)
 }

 function drewutnie(){
    fade();
    const drewutnie = `<img src='obrazy/drewutnie/drewutnia.jpg' alt='Drewutnia' id='w1' class='minatureRS'>`;
    lastSeen = drewutnie;
    setTimeout(() => {
        $("#page-3").html(drewutnie);
        operationsTimeout();
	}, 500)
 }

 function donice(){
    fade();
    const donice = `<img src='obrazy/donice/pergolaM.jpg' alt='Pergola' id='d1' class='minatureRS'>
    <img src='obrazy/donice/pergola2M.jpg' alt='Pergola - kolor' id='d2' class='minatureRS'>`
    lastSeen = donice;
    setTimeout(() => {
        $("#page-3").html(donice);
        operationsTimeout();
	}, 500)
 }

 function inne(){
    fade();
    const zamówienie = `<img src='obrazy/inne/skrzynianatarasM.jpg' alt='Skrzynia na taras' id='z1' class='minatureRS'>
    <img src='obrazy/inne/polki.jpg' alt='Półki' id='z2' class='minatureRS'>
    <img src='obrazy/inne/jakuzzi.jpg' alt='Jakuzzi' id='z3' class='minatureRS'>`;
    lastSeen = zamówienie;
    setTimeout(() => {
        $("#page-3").html(zamówienie);
        operationsTimeout();
	}, 500)
 }

$("#place").click(function(){
    place();
});
$("#ogrodowe").click(function(){
    ogrodowe();
});
$("#drewutnie").click(function(){
    drewutnie();
});
$("#donice").click(function(){
    donice();
});
$("#zamówienie").click(function(){
    inne();
});

$("#m1").click(function(){
    place();
});
$("#m2").click(function(){
    ogrodowe();
});
$("#m3").click(function(){
    drewutnie();
});
$("#m4").click(function(){
    donice();
});
$("#m5").click(function(){
    inne();
});


$("#placeM").click(function(){
    Object.assign(list.style,{display:"none"});
    place();
});
$("#ogrodoweM").click(function(){
    Object.assign(list.style,{display:"none"});
    ogrodowe();
});
$("#drewutnieM").click(function(){
    Object.assign(list.style,{display:"none"});
    drewutnie();
});
$("#doniceM").click(function(){
    Object.assign(list.style,{display:"none"});
    donice();
});
$("#zamówienieM").click(function(){
    Object.assign(list.style,{display:"none"});
    inne();
});


$("#main").click(function(){
    Object.assign(list.style,{display:"none"});
    window.scrollTo(0, 0);
});
$("#mainM").click(function(){
    Object.assign(list.style,{display:"none"});
    window.scrollTo(0, 0);
});
$("#companyM").click(function(){
    Object.assign(list.style,{display:"none"});
});
$("#contact").click(function(){
    Object.assign(list.style,{display:"none"});
});
$("#contactM").click(function(){
    Object.assign(list.style,{display:"none"});
    window.scrollTo(0, document.body.scrollHeight-925);
});
$("#back").click(function(){
    window.location.reload();
});
$("#X").click(function(){
    page3.removeAttribute('class', 'flex');
    page3.setAttribute('class', 'gridSmall');
    $("#page-3").html(lastSeen);
    $("#X").fadeOut(250);
    $("#back").fadeIn(300);
    $(".minatureRS").fadeIn(500);
});

function handle(){
    scrollPoint.scrollIntoView();
    page3.setAttribute('class', 'flex');
    $("#back").fadeOut(250);
    $("#X").fadeIn(250);
    Object.assign(X.style,{visibility:"visible"});
}

document.addEventListener('click', (e) => {
    let imgID = '';
    imgID = e.target.id;
    switch (imgID) {
        //Place:
        case 'p1':
            handle();
            $("#page-3").html(`<span class="sign"></span>
            <div class="projects">
            <img src='obrazy/place/plac.jpg' alt='Plac zabaw' class='minatureGallery'>
            <img src='obrazy/place/placgaleria1.jpg' alt='Plac zabaw' class='minatureGallery'>
            </div>`);
        break;
        case 'p2':
            handle();
            $("#page-3").html(`<span class="sign"></span>
            <div class="projects">
            <img src='obrazy/place/plac2.jpg' alt='Plac zabaw 2' class='minatureGallery'>
            </div>`);
        break;
        case 'p3':
            handle();
            $("#page-3").html(`<span class="sign"></span>
            <div class="projects">
            <img src='obrazy/place/plac3.jpg' alt='Plac zabaw 3' class='minatureGallery'>
            </div>`);
        break;
        //
        //Ogrodowe:
        case 'o1':
            handle();
            $("#page-3").html(`<span class="sign"></span>
            <div class="projects">
            <img src='obrazy/ogrodowe/stolilawki.jpg' alt='Stół i ławki' class='minatureGallery'>
            </div>`);
        break;
        case 'o2':
            handle();
            $("#page-3").html(`<span class="sign"></span>
            <div class="projects">
            <img src='obrazy/ogrodowe/stolilawki2.jpg' alt='Stół i ławki 2' class='minatureGallery'>
            <img src='obrazy/ogrodowe/stolilawki2galeria.jpg' alt='Stół i ławki 2' class='minatureGallery'>
            </div>`);
        break;
        //
        //Drewutnie:
        case 'w1':
            handle();
            $("#page-3").html(`<span class="sign">Drewutnia</span>
            <div class="projects">
            <img src='obrazy/drewutnie/drewutnia.jpg' alt='Drewutnia' class='minatureGallery'>
            </div>`);
        break;
        //
        //Donice:
        case 'd1':
            handle();
            $("#page-3").html(`<span class="sign">Pergola</span>
            <div class="projects">
            <img src='obrazy/donice/pergola1.jpg' alt='Pergola' class='minatureGallery'>
            </div>`);
        break;
        case 'd2':
            handle();
            $("#page-3").html(`<span class="sign">Pergola</span>
            <div class="projects">
            <img src='obrazy/donice/pergola2.jpg' alt='Pergola - kolor' class='minatureGallery'>
            </div>`);
        break;
        //
        //Inne:
        case 'z1':
            handle();
            $("#page-3").html(`<span class="sign">Skrzynia na taras</span>
            <div class="projects">
            <img src='obrazy/inne/skrzynianataras.jpg' alt='Skrzynia na taras' class='minatureGallery'>
            </div>`);
        break;
        case 'z2':
            handle();
            $("#page-3").html(`<span class="sign">Regał</span>
            <div class="projects">
            <img src='obrazy/inne/polki.jpg' alt='Półki' class='minatureGallery'>
            </div>`);
        break;
        case 'z3':
            handle();
            $("#page-3").html(`<span class="sign">Beczka do morsowania</span>
            <div class="projects">
            <img src='obrazy/inne/jakuzzi.jpg' alt='Jakuzzi' class='minatureGallery'>
            <img src='obrazy/inne/jakuzzigaleria1.jpg' alt='Jakuzzi' class='minatureGallery'>
            <img src='obrazy/inne/jakuzzigaleria2.jpg' alt='Jakuzzi' class='minatureGallery'>
            <img src='obrazy/inne/jakuzzigaleria3.jpg' alt='Jakuzzi' class='minatureGallery'>
            </div>`);
        break;
        //
    }
})
//

//Obsługa menu mobilnego:
$("#burger").click(function(){
    let display = window.getComputedStyle(list).display;
    if(display === "none"){
        $("#list").fadeIn(500);
        Object.assign(list.style,{display:"flex"});
    }else{
        $("#list").fadeOut(500);
    }
});

$("#projectsM").click(function(){
    let display = window.getComputedStyle(categoriesMobile).display;
    if(display === "none"){
        Object.assign(categoriesMobile.style,{display:"flex"});
    }else{
        Object.assign(categoriesMobile.style,{display:"none"});
    }
});
//

$("body").ready(function(){
	$("#picture").fadeIn(2500);
});