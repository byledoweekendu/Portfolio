/*
 * Sortable.js v[wersja 1.14.0]
 * (c) 2019 Wszyscy współtwórcy Sortable
 * Licencja MIT
*/

//Uchwyty:
const body = document.querySelector('body');
const container = document.querySelector("#container");
const buttonsFood = document.querySelector("#buttonsFood");
const buttonsChemistry = document.querySelector("#buttonsChemistry");
const input = document.querySelector("input");
const reset = document.querySelector("#reset");
const dark = document.querySelector("#dark");
const bright = document.querySelector("#bright");
const basic = document.querySelector("#basic");
const strong = document.querySelectorAll("strong");
const p = document.querySelectorAll("p");
const footer = document.querySelector('#footer');
const a = document.querySelectorAll('a');
const nav = document.querySelector('nav');
//

//Ustawienie pamięci listy:
function setMemory(){
    if(localStorage.getItem('memory') == null){
        localStorage.setItem('memory', '[]');
    }
    if(localStorage.getItem('theme') == null){
        localStorage.setItem('theme', JSON.stringify('basic'));
    }
}

setMemory();
//

document.addEventListener('DOMContentLoaded', function () {//Obsługa sortowania listy.
    let currentMemory = JSON.parse(localStorage.getItem('memory'));
    function updateMemory() {
        const container = document.getElementById('container');
        currentMemory = Array.from(container.children).map(olElement => {
            const id = olElement.querySelector('ol').getAttribute('title');
            const product = olElement.querySelector('ol').innerHTML;
            return new Product(id, product);
        });
    }
    new Sortable(document.getElementById('container'), {
        animation: 150,
        handle: '.move',
        onStart(evt) {
            evt.item.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
        },
        onEnd(evt) {
            evt.item.style.backgroundColor = '';
            updateMemory();
        },
        onUpdate(evt) {
            updateMemory();
            localStorage.setItem('memory', JSON.stringify(currentMemory));
        },
    });
});

document.addEventListener('DOMContentLoaded', function () {//Wczytanie motywu, który ostatnio był ustawiony.
    setTheme();
});

//Klasa:
class Product{
    constructor(id, product){
        this.id = id;
        this.product = product;
    }
}
//

//Tablice najpopularniejszych:
const mostPopularFood = [
    new Product(10000001, "Chleb"),
    new Product(10000002, "Masło"),
    new Product(10000003, "Mleko"),
    new Product(10000004, "Wędlina"),
    new Product(10000005, "Ser"),
    new Product(10000006, "Jajka"),
    new Product(10000007, "Surówka"),
    new Product(10000008, "Jogurt naturalny"),
    new Product(10000009, "Jogurty"),
    new Product(100000010, "Płatki Owsiane"),
    new Product(100000011, "Mąka"),
    new Product(100000012, "Napoje"),
    new Product(100000013, "Cukier"),
    new Product(100000014, "Sól"),
    new Product(100000015, "Mięso"),
    new Product(100000016, "Kawa"),
    new Product(100000017, "Kakao"),
    new Product(100000018, "Płatki śniadaniowe"),
    new Product(100000019, "Majonez"),
    new Product(100000020, "Ketchup"),
    new Product(100000021, "Musztarda"),
    new Product(100000023, "Śmietana"), 
    new Product(100000024, "Przyprawy"),
    new Product(100000025, "Sosy"),
    new Product(100000026, "Makaron"),
    new Product(100000027, "Ryż"),
    new Product(100000028, "Kasza"),
    new Product(100000029, "Frytki"),
    new Product(100000030, "Owoce"),
    new Product(100000031, "Warzywa"),
    new Product(100000032, "Włoszczyzna"),
    new Product(100000033, "Marchew"),
    new Product(100000034, "Papryka"),
    new Product(100000035, "Pomidory"),
    new Product(100000036, "Ogórki"),
    new Product(100000037, "Cebula"),
    new Product(100000038, "Por"),
    new Product(100000039, "Ziemniaki"),
    new Product(100000040, "Pomarańcze"),
    new Product(100000041, "Mandarynki"),
    new Product(100000042, "Jabłka"),
    new Product(100000043, "Cytryny"),
    new Product(100000044, "Kiwi"),
    new Product(100000045, "Avocado"),
    new Product(100000046, "Arbuz"),
    new Product(100000047, "Humus"),
    new Product(100000048, "Ser pleśniowy"),
    new Product(100000049, "Margaryna"),
    new Product(100000050, "Smalec"),
    new Product(100000051, "Przekąski"),
    new Product(100000052, "Słodycze"), 
    new Product(100000053, "Piwo")
];

const mostPopularChemistry = [
    new Product(1000000101, "Papier toaletowy"),
    new Product(1000000102, "Ręcznik kuchenny"),
    new Product(1000000103, "Kret"),
    new Product(1000000104, "Domestos"),
    new Product(1000000205, "Chusteczki"),
    new Product(1000000206, "Szampon"),
    new Product(1000000207, "Żel do kąpieli"),
    new Product(1000000208, "Szczoteczki do zębów"),
    new Product(1000000209, "Pasta do zębów"),
    new Product(1000000210, "Proszek do prania"),
    new Product(1000000211, "Płyn do prania"),
    new Product(1000000212, "Płyn do mycia okien"),
    new Product(1000000213, "Płyn do mycia podłogi"),
    new Product(1000000215, "Płyn do płukania tkanin"),
    new Product(1000000216, "Płyn do higieny ust"),
    new Product(1000000217, "Żel do prania"),
    new Product(1000000218, "Kapsułki do prania"),
    new Product(1000000219, "Kapsułki do zmywarki"),
    new Product(1000000220, "Woreczki do lodu"),
    new Product(1000000221, "Ściereczki do kuchni"),
    new Product(1000000222, "Ściereczki do kurzu"),
    new Product(1000000223, "Worki do odkurzacza"),
    new Product(1000000224, "Worki na śmieci"),
    new Product(1000000225, "Woreczki śniadaniowe"),
    new Product(1000000226, "Folia aluminiowa"),
    new Product(1000000227, "Folia spożywcza"),
    new Product(1000000228, "Papier do pieczenia"),
    new Product(1000000229, "Rękaw do pieczenia"),
    new Product(1000000230, "Płyn do mycia naczyń"),
    new Product(1000000231, "Gąbki do zmywania"),
    new Product(1000000232, "Druciaki do zmywania"),
    new Product(1000000233, "Antyperspirant"),
    new Product(1000000234, "Mydło"),
    new Product(1000000235, "Dezodorant")
];

const everything = mostPopularFood.concat(mostPopularChemistry);
//

//Obsługa listy:
function drawList(){
        const currentMemory = JSON.parse(localStorage.getItem('memory'));
        if(currentMemory.length === 0){
            container.innerHTML = "Lista jest pusta...";
        }else{
        currentMemory.forEach((item) => {
            const element = document.createElement("div");
            const text = document.createElement("ol");
            const storage = document.createElement("div");
            const move = document.createElement("img");
            const edit = document.createElement("img");
            const remove = document.createElement("img");
            let editInput = document.createElement("input");
            element.setAttribute("class", "product");
            storage.setAttribute("id", "storage");
            move.setAttribute("class", "move");
            edit.setAttribute("class", item.id);
            remove.setAttribute("class", "remove");
            move.setAttribute("src", "icons/move.png");
            edit.setAttribute("src", "icons/pencil.png");
            remove.setAttribute("src", "icons/delete.png");
            editInput.setAttribute("class", "editInput");
            editInput.setAttribute("placeholder", "Edytuj");
            text.setAttribute("title", item.id);
            text.innerHTML = item.product;
            container.appendChild(element);
            element.appendChild(move);
            element.appendChild(text);
            element.appendChild(storage);
            storage.appendChild(edit);
            storage.appendChild(remove);
            let currentProduct = item.id; //Id bieżącego, kliknietego produktu.
            let products = []; //Tablica pomocnicza do wyciągniecia id produktów z obiektów.
            let remind = item.product; //Bieżący produkt, który ma być wyświetlany. To zabezpieczenie, gdy ktoś otworzy inputa do edycji po tym jak coś już edytował, żeby nie wczytało mu starej wartości.
            $('.' + item.id).click(function(){ //Otwieranie i zamykanie inputa do edycji.
                let display = document.body.contains(editInput);
                if(display === false){
                    text.innerHTML = '';
                    text.appendChild(editInput);
                    editInput.value = remind;
                    editInput.focus();
                }else{
                    text.removeChild(editInput);
                    text.innerHTML = remind;
                }
            });
            editInput.addEventListener('change', () =>{ //Obsługa edycji metodą splice. Uzyskuje index produktu mapujac glowna tablice do pomocniczej i wyciagajac id z obiektu. Wtedy uzyskuję index i podmieniam wartość, bo pozycja w glownej tablicy jest ta sama co w pomocniczej.
                let edited ={id:currentProduct, product:editInput.value}
                currentMemory.map((item)=> {
                    products.push(item.id);
                })
                const currentIndex = products.indexOf(currentProduct);
                currentMemory.splice(currentIndex, 1, edited);
                text.removeChild(editInput);
                remind = editInput.value;
                text.innerHTML = remind;
                editInput.value = '';
                localStorage.setItem('memory', JSON.stringify(currentMemory));
            })
            document.addEventListener('click', () =>{ //Zamykanie inputa, jeśli ktoś nie wpisał nic w edycji i kliknął gdzieś indziej.
                let display = document.body.contains(editInput);
                if(display === true && document.activeElement !== editInput){
                    text.removeChild(editInput);
                    text.innerHTML = remind;
                }
            })
            remove.addEventListener('click', () => { //Kasowanie. Odfiltrowanie z tablicy kliknietego itemu i nadpisanie starej tablicy nowa w localu.
                element.remove();
                const clickedItem = item.id;
                const updatedMemory = currentMemory.filter(item => item.id !== clickedItem);
                const filtered = everything.filter(item => item.id == clickedItem);
                filtered.forEach((item) => {
                    if(item.id == clickedItem){
                        if(state === "bright"){
                            $('#' + clickedItem).css("background-color", "gold");
                            $('#' + clickedItem).css("color", "black"); 
                        }else if(state === "basic"){
                            $('#' + clickedItem).css("background-color", "#4d9bcc");
                            $('#' + clickedItem).css("color", "white");  
                        }else if(state === "dark"){
                            $('#' + clickedItem).css("background-color", "blueviolet");
                            $('#' + clickedItem).css("color", "white"); 
                        }  
                    }
                });
                localStorage.setItem('memory', JSON.stringify(updatedMemory));
                container.innerHTML = '';
                drawList();
              });
        })}
}

drawList();
//

//Dodawanie produktu:
function addProduct(){
    const currentMemory = JSON.parse(localStorage.getItem('memory'));
    const product = input.value;
    if(product !== ' '){
        currentMemory.push(new Product(Math.floor(Math.random() * 1000000), product));
        localStorage.setItem('memory', JSON.stringify(currentMemory));
        input.value = '';
        container.innerHTML = '';
        drawList();
        input.focus();
    }
}

input.addEventListener('change', addProduct);
//

//Dodawanie najpopularniejszych produktów:
function addMostPopularFood(){
    mostPopularFood.forEach((item) => {
        const productButton = document.createElement('button');
        productButton.setAttribute('id', item.id);
        productButton.setAttribute("class", "productButton");
        productButton.innerHTML = "+" + ' ' + item.product;
        buttonsFood.appendChild(productButton);
    })
};

function addMostPopularChemistry(){
    mostPopularChemistry.forEach((item) => {
        const productButton = document.createElement('button');
        productButton.setAttribute('id', item.id);
        productButton.setAttribute("class", "productButton");
        productButton.innerHTML = "+" + ' ' + item.product;
        buttonsChemistry.appendChild(productButton);
    })
};

addMostPopularFood();
addMostPopularChemistry();

$('.productButton').click((e) => {
    const currentMemory = JSON.parse(localStorage.getItem('memory'));
    let clicked = e.target;
    let id = e.target.id;
    let name = e.target.innerHTML;
    let toAdd = name.replace("+ ", "");
    let style = clicked.style.backgroundColor;
    Object.assign(clicked.style, {backgroundColor: '#F0F8FF', color: 'gray'});
    currentMemory.push(new Product(id, toAdd));
    localStorage.setItem('memory', JSON.stringify(currentMemory));
    if(style === 'rgb(240, 248, 255)' && state === "bright"){
        const updatedMemory = currentMemory.filter(item => item.id !== id);
        localStorage.setItem('memory', JSON.stringify(updatedMemory));
        Object.assign(clicked.style, {backgroundColor: 'gold', color: 'black'});
    }
    else if(style === 'rgb(240, 248, 255)' && state === "basic"){
        const updatedMemory = currentMemory.filter(item => item.id !== id);
        localStorage.setItem('memory', JSON.stringify(updatedMemory));
        Object.assign(clicked.style, {backgroundColor: '#4d9bcc', color: 'white'});
    }else if(style === 'rgb(240, 248, 255)' && state === "dark"){
        const updatedMemory = currentMemory.filter(item => item.id !== id);
        localStorage.setItem('memory', JSON.stringify(updatedMemory));
        Object.assign(clicked.style, {backgroundColor: 'blueviolet', color: 'white'});
    }
    container.innerHTML = '';
    drawList();
})

function setColors(){//Ustawienie kolorow dla kliknietych przycisków.
    const currentMemory = JSON.parse(localStorage.getItem('memory'));
    currentMemory.forEach((item) => {
        const id = item.id;
        $('#' + id).css("background-color", "#F0F8FF");
        $('#' + id).css("color", "gray");  
    })
}

setColors();
//

//Kasowanie listy:
reset.addEventListener('click', ()=> {
    localStorage.setItem('memory', '[]');
    window.location.reload();
})
//

//Zmiana motywu:
let state = "basic";

function switchDark(){
    state = "dark";
    localStorage.setItem('theme', JSON.stringify(state));
    Object.assign(body.style,{background:"rgb(35, 35, 35)", transition:"500ms background-color"});
    Object.assign(container.style,{color:"greenyellow"});
    Object.assign(footer.style,{background:"rgb(45, 45, 45)"});
    Object.assign(nav.style,{background:"rgb(45, 45, 45)"});
    a.forEach(a => {
        a.style.color = "orangered";
    });
    strong.forEach(strong => {
        strong.style.color = "orangered";
    });
    p.forEach(p => {
        p.style.color = "bisque";
    });
    $('.productButton').css({
        'color': 'white',
        'background-color': 'blueviolet'
    });
    setColors();
}

function switchBright(){
    state = "bright";
    localStorage.setItem('theme', JSON.stringify(state));
    Object.assign(body.style,{background:"rgb(235, 235, 235)", transition:"500ms background-color"});
    Object.assign(container.style,{color:"purple"});
    Object.assign(footer.style,{background:"rgb(225, 225, 225)"});
    Object.assign(nav.style,{background:"rgb(225, 225, 225)"});
    a.forEach(a => {
        a.style.color = "red";
    });
    strong.forEach(strong => {
        strong.style.color = "red";
    });
    p.forEach(p => {
        p.style.color = "green";
    });
    $('.productButton').css({
        'color': 'black',
        'background-color': 'gold'
    });
    setColors();
}

function switchBasic(){
    state = "basic";
    localStorage.setItem('theme', JSON.stringify(state));
    Object.assign(body.style,{background:"#6bbeec", transition:"500ms background-color"});
    Object.assign(container.style,{color:"greenyellow"});
    Object.assign(footer.style,{background:"#5db0de"});
    Object.assign(nav.style,{background:"#5db0de"});
    a.forEach(a => {
        a.style.color = "beige";
    });
    strong.forEach(strong => {
        strong.style.color = "beige";
    });
    p.forEach(p => {
        p.style.color = "bisque";
    });
    $('.productButton').css({
        'color': 'white',
        'background-color': '#4d9bcc'
    });
    setColors();
}

function setTheme(){
    const currentTheme = JSON.parse(localStorage.getItem('theme'));
    if(currentTheme === "bright"){
       switchBright();
    }else if(currentTheme === "basic"){
        switchBasic();
    }else if(currentTheme === "dark"){
        switchDark();
    }
}

$('#dark').on('click', switchDark);
$('#bright').on('click', switchBright);
$('#basic').on('click', switchBasic);
//