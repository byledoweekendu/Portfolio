//Tablice:
class Product{
    constructor(id, img, title, price, info1, info2, info3, info4, info5){
        this.id = id;
        this.img = img;
        this.title = title;
        this.price = price;
        this.info1 = info1;
        this.info2 = info2;
        this.info3 = info3;
        this.info4 = info4;
        this.info5 = info5;
    }
}

const specialOffer = [
    new Product(Math.round(Math.random()*999999), "minatures/pc3.png", "Dell Vostro 3910 MT", 7999, 
    "Procesor: Intel Core i7-12700", "Ram: 16GB", "Dysk: 256GB SSD + 1TB HDD", "Grafika: GTX 1660", "System: Windows 10"),
    new Product(Math.round(Math.random()*999999), "minatures/monitor5.png", "Monitor Iiyama XCB3494WQSN-B1", 2299, 
    "Przekątna: 34 cale", "Rozdzielczość: 3440 x 1440", "Matryca: LED, VA", "Klasa energetyczna: G, G [HDR]", "Odświeżanie: 120Hz"), 
    new Product(Math.round(Math.random()*999999), "minatures/headset1.png", "Słuchawki HyperX Cloud Alpha", 319, 
    "Łączność: Przewodowe", "Budowa: Zamknięte", "Mikrofon: Posiada", "Redukcja Hałasu: Pasywna", "System audio: Stereo 2.0"),
    new Product(Math.round(Math.random()*999999), "minatures/mysz1.png", "Myszka A4Tech Bloody V8m", 85, 
    "Łączność: Przewodowa", "Typ: Dla graczy", "Sensor: Optyczny", "Liczba przycisków: 8", "Rozdzielczość: 3200 dpi"),
    new Product(Math.round(Math.random()*999999), "minatures/klawiatura6.png", "Klawiatura Logitech Touch K400", 169, 
    "Łączność: Bezprzewodowa", "Typ: Klasyczna", "Przełączniki: Membranowe", "Podświetlenie: Wielokolorowe", "Klawiatura numeryczna: Nie")
];
const pc = [
    new Product(Math.round(Math.random()*999999), "minatures/pc1.png", "Komputer Lenovo Legion T5", 11999, 
    "Procesor: Intel Core i5-12400", "Ram: 32GB", "Dysk: 512GB SSD", "Grafika: RTX 3060Ti", "System: Windows 11"), 
    new Product(Math.round(Math.random()*999999), "minatures/pc2.png", "Komputer Acer Nitro 50", 9999,
    "Procesor: Intel Core i5-11400F", "Ram: 16GB", "Dysk: 512GB SSD", "Grafika: RTX 3060", "System: Windows 11"), 
    new Product(Math.round(Math.random()*999999), "minatures/pc3.png", "Komputer Dell Vostro 3910 MT", 7999, 
    "Procesor: Intel Core i7-12700", "Ram: 16GB", "Dysk: 256GB SSD + 1TB HDD", "Grafika: GTX 1660", "System: Windows 10"), 
    new Product(Math.round(Math.random()*999999), "minatures/pc4.png", "Komputer G4M3R HERO", 8999, 
    "Procesor: Intel Core i5-12400F", "Ram: 16GB", "Dysk: 1TB HDD", "Grafika: RTX 2060", "System: Windows 10"), 
    new Product(Math.round(Math.random()*999999), "minatures/pc5.png", "Komputer SHIRU R5-5500", 6999, 
    "Procesor: Amd Ryzen 5 5600", "Ram: 8GB", "Dysk: 384GB SSD", "Grafika: RTX 2070", "System: Windows 10"), 
    new Product(Math.round(Math.random()*999999), "minatures/pc6.png", "Komputer SHIRU R5-4500", 5999, 
    "Procesor: Amd Ryzen 5 3600", "Ram: 8GB", "Dysk: 768GB SSD", "Grafika: GTX 1650", "System: Windows 10")
];
const monitors = [
    new Product(Math.round(Math.random()*999999), "minatures/monitor1.png", "Monitor LG Ultragear 27GP850", 1649, 
    "Przekątna: 27 cali", "Rozdzielczość: 2560 x 1440", "Matryca: LED, Nano IPS", "Klasa energetyczna: G, G [HDR]", "Odświeżanie: 165Hz"),
    new Product(Math.round(Math.random()*999999), "minatures/monitor2.png", "Monitor Samsung Odyssey G8", 6499, 
    "Przekątna: 34 cale", "Rozdzielczość: 3440 x 1440", "Matryca: OLED", "Klasa energetyczna: G, G [HDR]", "Odświeżanie: 175Hz"),
    new Product(Math.round(Math.random()*999999), "minatures/monitor3.png", "Monitor HP X24ih Gaming", 799, 
    "Przekątna: 23,8 cala", "Rozdzielczość: 1920 x 1080", "Matryca: LED, IPS", "Klasa energetyczna: F", "Odświeżanie: 144Hz"),
    new Product(Math.round(Math.random()*999999), "minatures/monitor4.png", "Monitor Dell P2722H", 1129, 
    "Przekątna: 27 cali", "Rozdzielczość: 1920 x 1080", "Matryca: LED, IPS", "Klasa energetyczna: D", "Odświeżanie: 60Hz"),
    new Product(Math.round(Math.random()*999999), "minatures/monitor5.png", "Monitor Iiyama XCB3494WQSN-B1", 2299, 
    "Przekątna: 34 cale", "Rozdzielczość: 3440 x 1440", "Matryca: LED, VA", "Klasa energetyczna: G, G [HDR]", "Odświeżanie: 120Hz"),
    new Product(Math.round(Math.random()*999999), "minatures/monitor6.png", "Monitor LG 28MQ780", 2849, 
    "Przekątna: 27.6 cala", "Rozdzielczość: 2560 x 1440", "Matryca: LED, Nano IPS", "Klasa energetyczna: G, G [HDR]", "Odświeżanie: 60Hz")
];
const headsets = [
    new Product(Math.round(Math.random()*999999), "minatures/headset1.png", "Słuchawki HyperX Cloud Alpha", 319, 
    "Łączność: Przewodowe", "Budowa: Zamknięte", "Mikrofon: Posiada", "Redukcja Hałasu: Pasywna", "System audio: Stereo 2.0"),
    new Product(Math.round(Math.random()*999999), "minatures/headset2.png", "Słuchawki Logitech G733", 579, 
    "Łączność: Bezprzewodowe", "Budowa: Zamknięte", "Mikrofon: Posiada", "Redukcja Hałasu: Brak", "System audio: Stereo 2.0"),
    new Product(Math.round(Math.random()*999999), "minatures/headset3.png", "Słuchawki SteelSeries Arctis Pro", 1548, 
    "Łączność: Bezprzewodowe", "Budowa: Zamknięte", "Mikrofon: Posiada", "Redukcja Hałasu: Aktywna-ANC", "System audio: Surround 7.1"),
    new Product(Math.round(Math.random()*999999), "minatures/headset4.png", "Słuchawki Sharkoon Skiller SGH2", 109, 
    "Łączność: Przewodowe", "Budowa: Półotwarte", "Mikrofon: Posiada", "Redukcja Hałasu: Brak", "System audio: Stereo 2.0"),
    new Product(Math.round(Math.random()*999999), "minatures/headset5.png", "Słuchawki SteelSeries Arctis 7+", 749, 
    "Łączność: Bezprzewodowe", "Budowa: Zamknięte", "Mikrofon: Posiada", "Redukcja Hałasu: Brak", "System audio: Surround 7.1"),
    new Product(Math.round(Math.random()*999999), "minatures/headset6.png", "Słuchawki Corsair Virtuoso", 1199, 
    "Łączność: Bezprzewodowe", "Budowa: Zamknięte", "Mikrofon: Posiada", "Redukcja Hałasu: Aktywna", "System audio: Surround 7.1")
];
const mouses = [
    new Product(Math.round(Math.random()*999999), "minatures/mysz1.png", "Myszka A4Tech Bloody V8m", 85, 
    "Łączność: Przewodowa", "Typ: Dla graczy", "Sensor: Optyczny", "Liczba przycisków: 8", "Rozdzielczość: 3200 dpi"),
    new Product(Math.round(Math.random()*999999), "minatures/mysz2.png", "Myszka ALogitech M185", 66, 
    "Łączność: Bezprzewodowa", "Typ: Klasyczna", "Sensor: Optyczny", "Liczba przycisków: 3", "Rozdzielczość: 1000 dpi"),
    new Product(Math.round(Math.random()*999999), "minatures/mysz3.png", "Myszka Logitech G PRO X", 569, 
    "Łączność: Bezprzewodowa", "Typ: Dla graczy", "Sensor: Optyczny", "Liczba przycisków: 5", "Rozdzielczość: 24500 dpi"),
    new Product(Math.round(Math.random()*999999), "minatures/mysz4.png", "Myszka Logitech G102", 139, 
    "Łączność: Przewodowa", "Typ: Dla graczy", "Sensor: Optyczny", "Liczba przycisków: 6", "Rozdzielczość: 8000 dpi"),
    new Product(Math.round(Math.random()*999999), "minatures/mysz5.png", "Myszka SteelSeries Aerox 3", 349, 
    "Łączność: Bezprzewodowa", "Typ: Dla graczy", "Sensor: Optyczny", "Liczba przycisków: 6", "Rozdzielczość: 18000 dpi"),
    new Product(Math.round(Math.random()*999999), "minatures/mysz6.png", "Myszka Microsoft Bluetooth", 59, 
    "Łączność: Bezprzewodowa", "Typ: Klasyczna", "Sensor: Optyczny", "Liczba przycisków: 3", "Rozdzielczość: 1000 dpi")
];
const keyboards = [
    new Product(Math.round(Math.random()*999999), "minatures/klawiatura1.png", "Klawiatura Genesis Thor 300 RGB", 195, 
    "Łączność: Przewodowa", "Typ: Dla graczy", "Przełączniki: Mechaniczne", "Podświetlenie: Wielokolorowe", "Klawiatura numeryczna: Tak"),
    new Product(Math.round(Math.random()*999999), "minatures/klawiatura2.png", "Klawiatura Logitech MX Keys", 459, 
    "Łączność: Bezprzewodowa", "Typ: Klasyczna", "Przełączniki: Membranowe", "Podświetlenie: Białe", "Klawiatura numeryczna: Tak"),
    new Product(Math.round(Math.random()*999999), "minatures/klawiatura3.png", "Klawiatura Alu Keys Black", 249, 
    "Łączność: Przewodowa", "Typ: Klasyczna", "Przełączniki: Membranowe", "Podświetlenie: Brak", "Klawiatura numeryczna: Tak"),
    new Product(Math.round(Math.random()*999999), "minatures/klawiatura4.png", "Klawiatura Keychron K2 C3", 449, 
    "Łączność: Bezprzewodowa", "Typ: Klasyczna", "Przełączniki: Mechaniczne", "Podświetlenie: Wielokolorowe", "Klawiatura numeryczna: Nie"),
    new Product(Math.round(Math.random()*999999), "minatures/klawiatura5.png", "Klawiatura Razer Ornata V3", 339, 
    "Łączność: Przewodowa", "Typ: Dla graczy", "Przełączniki: Mechaniczne", "Podświetlenie: Wielokolorowe", "Klawiatura numeryczna: Tak"),
    new Product(Math.round(Math.random()*999999), "minatures/klawiatura6.png", "Klawiatura Logitech Touch K400", 169, 
    "Łączność: Bezprzewodowa", "Typ: Klasyczna", "Przełączniki: Membranowe", "Podświetlenie: Wielokolorowe", "Klawiatura numeryczna: Nie")
];

const allProducts = pc.concat(monitors, headsets, mouses, keyboards);
let defaultArray = specialOffer;
//

//Uchwyty:
const list = document.querySelector("#list");
const filterList = document.querySelector("#filterList");
const searchBar = document.querySelector(".searchBar");
const h1 = document.querySelector("h1");
const basketCount = document.querySelector("#basketCounter");
//Przyciski:
const buttonBasket = document.querySelector("#basket");
const buttonMain = document.querySelector(".main");
const buttonPC = document.querySelector("#pc");
const buttonMonitors = document.querySelector("#monitors");
const buttonHeadsets = document.querySelector("#headsets");
const buttonMouses = document.querySelector("#mouses");
const buttonKeyboards = document.querySelector("#keyboards");
//

//Funkcja startowa tworząca storage na koszyk:
function setStorageArray(){
    if(localStorage.getItem('basket') == null){
        localStorage.setItem('basket', '[]');
    }
}

setStorageArray();
//

//Obsługa nav i rysowanie podstron:
function drawPage(arr){
    list.setAttribute("class", "listNormal")
    filterList.setAttribute("class", "filterList");
    return arr.forEach((item) => {
    const tile = document.createElement("div");
    const img = document.createElement("img");
    const title = document.createElement("span");
    const price = document.createElement("span");
    const specification = document.createElement("ul");
    const ol = document.createElement("ol");
    const section = document.createElement("section");
    const basketCounter = document.createElement("p");
    const add = document.createElement("button");
    const basketIconForAdd = document.createElement("img");
    tile.setAttribute("class", "tile");
    img.setAttribute("src", item.img);
    img.setAttribute("class", "miniature");
    title.setAttribute("class", "title");
    price.setAttribute("class", "price");
    specification.setAttribute("class", "specification");
    section.setAttribute("class", "positionForBasketIcon");
    basketCounter.setAttribute("class", "basketCounter");
    add.setAttribute("id", "addToBasket");
    add.setAttribute("class", "btn");
    basketIconForAdd.setAttribute("src", "minatures/koszyk.png");
    list.appendChild(tile);
    tile.appendChild(img);
    tile.appendChild(title);
    tile.appendChild(price);
    tile.appendChild(specification);
    specification.appendChild(ol);
    specification.appendChild(section);
    section.appendChild(basketCounter);
    section.appendChild(add);
    add.appendChild(basketIconForAdd);
    title.innerHTML = item.title;
    price.innerHTML = item.price + " zł";
    ol.innerHTML = item.info1 + '</br></br>' + item.info2 + '</br></br>' + item.info3 + '</br></br>' + item.info4 + '</br></br>' + item.info5;
    setInterval(() => {
        const currentBasket = JSON.parse(localStorage.getItem('basket'));
        basketCounter.innerHTML = currentBasket.length;
        basketCount.innerHTML = currentBasket.length;
    }, 250)
    add.addEventListener('click', () => {
        const currentBasket = JSON.parse(localStorage.getItem('basket'));
        const choosenProduct = item.id;
        const product = arr.filter(item => item.id === choosenProduct);
        product.forEach((item) => {
            currentBasket.push(new Product(Math.round(Math.random()*999999), item.img, item.title, item.price, item.info1, item.info2, item.info3, item.info4, item.info5))
        })
        localStorage.setItem('basket', JSON.stringify(currentBasket));
    })
});
}

function drawFoundNothing(){
    const span = document.createElement("span");
    span.innerHTML = "Nic nie znaleziono!";
    span.style.fontSize = "24px";
    list.appendChild(span);
}

function callDrawPage(arr){
    list.innerHTML = '';
    drawPage(arr);
    defaultArray = arr;
    h1.setAttribute("class", "special");
}

function callStartPage(){
    h1.setAttribute("class", "specialVisible");
    drawPage(specialOffer);
    filterList.setAttribute("class", "filterListHidden");
}

callStartPage(); 

buttonMain.addEventListener('click', () =>{
    callDrawPage(specialOffer);
    h1.setAttribute("class", "specialVisible");
    filterList.setAttribute("class", "filterListHidden");
})

buttonPC.addEventListener('click', () =>{
    callDrawPage(pc);
    handlePcFilters(pc);
})

buttonMonitors.addEventListener('click', () =>{
    callDrawPage(monitors);
    handleMonitorsFilters(monitors);
})

buttonHeadsets.addEventListener('click', () =>{
    callDrawPage(headsets);
    handleHeadsetsFilters(headsets);
})

buttonMouses.addEventListener('click', () =>{
    callDrawPage(mouses);
    handleMousesFilters(mouses);
})

buttonKeyboards.addEventListener('click', () =>{
    callDrawPage(keyboards);
    handleKeyboardsFilters(keyboards);
})
//

//Rysowanie i obsługa koszyka:
function drawBasket(){
    var frame = document.createElement("ul");
    frame.setAttribute("class", "basket");
    list.appendChild(frame);
        const currentBasket = JSON.parse(localStorage.getItem('basket'));
        frame.innerHTML = '';
        basketCount.innerHTML = currentBasket.length;
        if(currentBasket.length === 0){
            frame.innerHTML = "Twój koszyk jest pusty...";
        }else{
        currentBasket.forEach((item) => {
            const element = document.createElement("ol");
            const remove = document.createElement("button");
            element.setAttribute("class", "product");
            remove.setAttribute("class", "remove");
            element.innerHTML = item.title + ' - ' + item.price + ' zł';
            remove.innerHTML = "x";
            frame.appendChild(element);
            element.appendChild(remove);
            remove.addEventListener('click', () => {
                setTimeout(() => {
                element.remove();
                const currentBasket = JSON.parse(localStorage.getItem('basket'));
                const clickedItem = item.id;
                const updatedBasket = currentBasket.filter(item => item.id !== clickedItem);
                localStorage.setItem('basket', JSON.stringify(updatedBasket));
                }, 100)
              });
        })}
}

function drawPrice(){
    setInterval(() => {
        const currentBasket = JSON.parse(localStorage.getItem('basket'));
        const sum = currentBasket.reduce((prev, item) => {
            return prev + item.price;
        }, 0);
        priceCounter.innerHTML = "Suma: " + sum + " zł";
    }, 250)
    const frame = document.createElement("div");
    const priceCounter = document.createElement("span");
    const clear = document.createElement("button");
    const buy = document.createElement("a");
    frame.setAttribute("class", "frame");
    priceCounter.setAttribute("class", "counter");
    clear.setAttribute("class", "clear");
    buy.setAttribute("class", "buy");
    buy.setAttribute("href", "do podsumowania.html");
    clear.innerHTML = 'Wyczyść';
    buy.innerHTML = 'Kup';
    list.appendChild(frame);
    frame.appendChild(priceCounter);
    frame.appendChild(clear);
    frame.appendChild(buy);
    clear.addEventListener('click', () => {
        localStorage.setItem('basket', "[]");
        callDrawPage(defaultArray);
        if(defaultArray === specialOffer){
            filterList.setAttribute("class", "filterListHidden");
        }
    })
}

function callDrawBasket(){
    list.setAttribute("class", "listBasket")
    list.innerHTML = '';
    filterList.setAttribute("class", "filterListHidden");
    h1.setAttribute("class", "special");
    drawBasket();
    drawPrice();
}

buttonBasket.addEventListener('click', () => {
    callDrawBasket();
})
//

//Obsługa wyszukiwarki:
function searchProduct(arr, phrase){
    const searched = arr.filter((item) => {
    let value = item.title.toLowerCase();
    return(value.includes(phrase))
  })
  if(searched.length === 0){
    drawFoundNothing();
  }else{
    drawPage(searched);
    filterList.setAttribute("class", "filterListHidden");
  }
}

function callSearch(arr){
    h1.setAttribute("class", "special");
    list.setAttribute("class", "listNormal");
    list.innerHTML = '';
    let searchBarValue = document.querySelector(".searchBar").value;
    let value = searchBarValue.toLowerCase();
    if(value === '' || value === ' '){
    drawFoundNothing();
    }else{
        searchProduct(arr, value);
    }
}

searchBar.addEventListener('keyup', () => {
    callSearch(allProducts);
})
//

//Filtry pc:
function handlePcFilters(arr){
    filterList.innerHTML = '';
    const budget = document.createElement("span");   
    var price = document.createElement("input");
    const processor = document.createElement("span");
    const labelIntel = document.createElement("label");    
    const intel = document.createElement("input");
    const labelAmd = document.createElement("label"); 
    const amd = document.createElement("input");
    const ram = document.createElement("span");
    const label8 = document.createElement("label"); 
    const capacity8 = document.createElement("input");
    const label16 = document.createElement("label"); 
    const capacity16 = document.createElement("input");
    const label32 = document.createElement("label"); 
    const capacity32 = document.createElement("input");
    const disc = document.createElement("span");
    const labelSsd = document.createElement("label"); 
    const ssd = document.createElement("input");
    const labelHdd = document.createElement("label");     
    const hdd = document.createElement("input");
    const graphic = document.createElement("span");
    const labelGtx = document.createElement("label"); 
    const gtx = document.createElement("input");
    const labelRtx = document.createElement("label"); 
    const rtx = document.createElement("input");
    budget.innerHTML = "Ile chcesz wydać?";
    processor.innerHTML = "Procesor:";
    ram.innerHTML = "Ilość RAM:";
    disc.innerHTML = "Rodzaj dysku:";
    graphic.innerHTML = "Rodzaj karty graficznej:";
    labelIntel.innerHTML = "Intel";
    labelAmd.innerHTML = "Amd";
    label8.innerHTML = "8GB";
    label16.innerHTML = "16GB";
    label32.innerHTML = "32GB";
    labelSsd.innerHTML = "SSD";
    labelHdd.innerHTML = "HDD";
    labelGtx.innerHTML = "GTX";
    labelRtx.innerHTML = "RTX";
    price.setAttribute("placeholder", "Kwota");
    price.setAttribute("type", "number");
    price.setAttribute("class", "sum");
    var checkboxes = [intel, amd, capacity8, capacity16, capacity32, ssd, hdd, gtx, rtx];
    checkboxes.forEach((item) => {
        item.setAttribute("type", "checkbox");  
    })
    const labels = [labelIntel, labelAmd, label8, label16, label32, labelSsd, labelHdd, labelGtx, labelRtx];
    labels.forEach((item) => {
        item.setAttribute("style", "width: 75px");  
    })
    filterList.appendChild(budget);
    filterList.appendChild(price);
    filterList.appendChild(processor);
    filterList.appendChild(labelIntel);
    labelIntel.appendChild(intel);
    filterList.appendChild(labelAmd);
    labelAmd.appendChild(amd);
    filterList.appendChild(ram);
    filterList.appendChild(label8);
    label8.appendChild(capacity8);
    filterList.appendChild(label16);
    label16.appendChild(capacity16);
    filterList.appendChild(label32);
    label32.appendChild(capacity32);
    filterList.appendChild(disc);
    filterList.appendChild(labelSsd);
    labelSsd.appendChild(ssd);
    filterList.appendChild(labelHdd);
    labelHdd.appendChild(hdd);
    filterList.appendChild(graphic);
    filterList.appendChild(labelGtx);
    labelGtx.appendChild(gtx);
    filterList.appendChild(labelRtx);
    labelRtx.appendChild(rtx);
    var results = [];
    price.addEventListener("keyup", () =>{
        list.innerHTML = '';
        results = arr.filter((item) => {
            return(item.price <= price.value);
        })
        if(results.length === 0){
            drawFoundNothing();
        }else drawPage(results);
    })
    intel.addEventListener('change', function() {
    if (this.checked) {
        clearAndDisable();
        intel.removeAttribute("disabled", "disabled");
        results = arr.filter((item) => {
            return(item.info1.includes("Intel"));
        })
        if(results.length === 0){
            drawFoundNothing();
        }else drawPage(results);
    } else { 
        enable();
    }
    })
    amd.addEventListener('change', function() {
        if (this.checked) {
            clearAndDisable();
            amd.removeAttribute("disabled", "disabled");
            results = arr.filter((item) => {
                return(item.info1.includes("Amd"));
            })
            if(results.length === 0){
                drawFoundNothing();
            }else drawPage(results);
        } else {
           enable();
        }
    })
    capacity8.addEventListener('change', function() {
        if (this.checked) {
            clearAndDisable();
            capacity8.removeAttribute("disabled", "disabled");
            results = arr.filter((item) => {
                return(item.info2.includes("8"));
            })
            if(results.length === 0){
                drawFoundNothing();
            }else drawPage(results);
        } else {
            enable();
        }
    })
    capacity16.addEventListener('change', function() {
        if (this.checked) {
            clearAndDisable();
            capacity16.removeAttribute("disabled", "disabled");
            results = arr.filter((item) => {
                return(item.info2.includes("16"));
            })
            if(results.length === 0){
                drawFoundNothing();
            }else drawPage(results);
        } else {
            enable();
        }
    })
    capacity32.addEventListener('change', function() {
        if (this.checked) {
            clearAndDisable();
            capacity32.removeAttribute("disabled", "disabled");
            results = arr.filter((item) => {
                return(item.info2.includes("32"));
            })
            if(results.length === 0){
                drawFoundNothing();
            }else drawPage(results);
        } else {
            enable();
        }
    })
    ssd.addEventListener('change', function() {
        if (this.checked) {
            clearAndDisable();
            ssd.removeAttribute("disabled", "disabled");
            results = arr.filter((item) => {
                return(item.info3.includes("SSD"));
            })
            if(results.length === 0){
                drawFoundNothing();
            }else drawPage(results);
        } else {
           enable();
        }
    })
    hdd.addEventListener('change', function() {
        if (this.checked) {
            clearAndDisable();
            hdd.removeAttribute("disabled", "disabled");
            results = arr.filter((item) => {
                return(item.info3.includes("HDD"));
            })
            if(results.length === 0){
                drawFoundNothing();
            }else drawPage(results);
        } else {
            enable();
        }
    })
    gtx.addEventListener('change', function() {
        if (this.checked) {
            clearAndDisable();
            gtx.removeAttribute("disabled", "disabled");
            results = arr.filter((item) => {
                return(item.info4.includes("GTX"));
            })
            if(results.length === 0){
                drawFoundNothing();
            }else drawPage(results);
        } else {
            enable();
        }
    })
    rtx.addEventListener('change', function() {
        if (this.checked) {
            clearAndDisable();
            rtx.removeAttribute("disabled", "disabled");
            results = arr.filter((item) => {
                return(item.info4.includes("RTX"));
            })
            if(results.length === 0){
                drawFoundNothing();
            }else drawPage(results);
        } else {
            enable();
        }
    })

    function clearAndDisable(){
        list.innerHTML = '';
        price.value = '';
        checkboxes.forEach((item) => {
            item.setAttribute("disabled", "disabled");
        })
    }

    function enable(){
        checkboxes.forEach((item) => {
            item.removeAttribute("disabled", "disabled");
        })
    }
}
//Monitory:
function handleMonitorsFilters(arr){
    filterList.innerHTML = '';
    const budget = document.createElement("span");   
    var price = document.createElement("input");
    const diagonal = document.createElement("span");
    const label23 = document.createElement("label");    
    const inch23 = document.createElement("input");
    const label27 = document.createElement("label"); 
    const inch27 = document.createElement("input");
    const label34 = document.createElement("label"); 
    const inch34 = document.createElement("input");
    const resolution = document.createElement("span");
    const label1920 = document.createElement("label"); 
    const res1920 = document.createElement("input");
    const label2560 = document.createElement("label"); 
    const res2560 = document.createElement("input");
    const label3440 = document.createElement("label"); 
    const res3440 = document.createElement("input");
    const refresh = document.createElement("span");
    const label60 = document.createElement("label"); 
    const ref60 = document.createElement("input");
    const label60To144 = document.createElement("label"); 
    const ref60To144 = document.createElement("input");
    const labelOver144 = document.createElement("label"); 
    const refOver144 = document.createElement("input");
    budget.innerHTML = "Ile chcesz wydać?";
    diagonal.innerHTML = "Przekątna:";
    resolution.innerHTML = "Rozdzielczość:";
    refresh.innerHTML = "Odświeżanie:";
    label23.innerHTML = "23 cale";
    label27.innerHTML = "27 cali";
    label34.innerHTML = "34 cale";
    label1920.innerHTML = "1920 x 1080";
    label2560.innerHTML = "2560 x 1440";
    label3440.innerHTML = "3440 x 1440";
    label60.innerHTML = "60 Hz";
    label60To144.innerHTML = "> 60 & < 144 Hz";
    labelOver144.innerHTML = "> 144 Hz";
    price.setAttribute("placeholder", "Kwota");
    price.setAttribute("type", "number");
    price.setAttribute("class", "sum");
    var checkboxes = [inch23, inch27, inch34, res1920, res2560, res3440, ref60, ref60To144, refOver144];
    checkboxes.forEach((item) => {
        item.setAttribute("type", "checkbox");  
    })
    const labels = [label23, label27, label34, label1920, label2560, label3440, label60, label60To144, labelOver144];
    labels.forEach((item) => {
        item.setAttribute("style", "width: 125px");  
    })
    filterList.appendChild(budget);
    filterList.appendChild(price);
    filterList.appendChild(diagonal);
    filterList.appendChild(label23);
    label23.appendChild(inch23);
    filterList.appendChild(label27);
    label27.appendChild(inch27);
    filterList.appendChild(label34);
    label34.appendChild(inch34);
    filterList.appendChild(resolution);
    filterList.appendChild(label1920);
    label1920.appendChild(res1920);
    filterList.appendChild(label2560);
    label2560.appendChild(res2560);
    filterList.appendChild(label3440);
    label3440.appendChild(res3440);
    filterList.appendChild(refresh);
    filterList.appendChild(label60);
    label60.appendChild(ref60);
    filterList.appendChild(label60To144);
    label60To144.appendChild(ref60To144);
    filterList.appendChild(labelOver144);
    labelOver144.appendChild(refOver144);
    var results = [];
    price.addEventListener("keyup", () =>{
        list.innerHTML = '';
        results = arr.filter((item) => {
            return(item.price <= price.value);
        })
        if(results.length === 0){
            drawFoundNothing();
        }else drawPage(results);
    })
    inch23.addEventListener('change', function() {
    if (this.checked) {
        clearAndDisable();
        inch23.removeAttribute("disabled", "disabled");
        results = arr.filter((item) => {
            return(item.info1.includes("23"));
        })
        if(results.length === 0){
            drawFoundNothing();
        }else drawPage(results);
    } else { 
        enable();
    }
    })
    inch27.addEventListener('change', function() {
        if (this.checked) {
            clearAndDisable();
            inch27.removeAttribute("disabled", "disabled");
            results = arr.filter((item) => {
                return(item.info1.includes("27"));
            })
            if(results.length === 0){
                drawFoundNothing();
            }else drawPage(results);
        } else {
           enable();
        }
    })
    inch34.addEventListener('change', function() {
        if (this.checked) {
            clearAndDisable();
            inch34.removeAttribute("disabled", "disabled");
            results = arr.filter((item) => {
                return(item.info1.includes("34"));
            })
            if(results.length === 0){
                drawFoundNothing();
            }else drawPage(results);
        } else {
           enable();
        }
    })
    res1920.addEventListener('change', function() {
        if (this.checked) {
            clearAndDisable();
            res1920.removeAttribute("disabled", "disabled");
            results = arr.filter((item) => {
                return(item.info2.includes("1920"));
            })
            if(results.length === 0){
                drawFoundNothing();
            }else drawPage(results);
        } else {
            enable();
        }
    })
    res2560.addEventListener('change', function() {
        if (this.checked) {
            clearAndDisable();
            res2560.removeAttribute("disabled", "disabled");
            results = arr.filter((item) => {
                return(item.info2.includes("2560"));
            })
            if(results.length === 0){
                drawFoundNothing();
            }else drawPage(results);
        } else {
            enable();
        }
    })
    res3440.addEventListener('change', function() {
        if (this.checked) {
            clearAndDisable();
            res3440.removeAttribute("disabled", "disabled");
            results = arr.filter((item) => {
                return(item.info2.includes("3440"));
            })
            if(results.length === 0){
                drawFoundNothing();
            }else drawPage(results);
        } else {
            enable();
        }
    })
    ref60.addEventListener('change', function() {
        if (this.checked) {
            clearAndDisable();
            ref60.removeAttribute("disabled", "disabled");
            results = arr.filter((item) => {
                return(item.info5.includes("60"));
            })
            if(results.length === 0){
                drawFoundNothing();
            }else drawPage(results);
        } else {
           enable();
        }
    })
    ref60To144.addEventListener('change', function() {
        if (this.checked) {
            clearAndDisable();
            ref60To144.removeAttribute("disabled", "disabled");
            results = arr.filter((item) => {
                return(item.info5.includes("120") || item.info5.includes("144"));
            })
            if(results.length === 0){
                drawFoundNothing();
            }else drawPage(results);
        } else {
            enable();
        }
    })
    refOver144.addEventListener('change', function() {
        if (this.checked) {
            clearAndDisable();
            refOver144.removeAttribute("disabled", "disabled");
            results = arr.filter((item) => {
                return(item.info5.includes("165") || item.info5.includes("175"));
            })
            if(results.length === 0){
                drawFoundNothing();
            }else drawPage(results);
        } else {
            enable();
        }
    })

    function clearAndDisable(){
        list.innerHTML = '';
        price.value = '';
        checkboxes.forEach((item) => {
            item.setAttribute("disabled", "disabled");
        })
    }

    function enable(){
        checkboxes.forEach((item) => {
            item.removeAttribute("disabled", "disabled");
        })
    }
}
//Słuchawki:
function handleHeadsetsFilters(arr){
    filterList.innerHTML = '';
    const budget = document.createElement("span");   
    var price = document.createElement("input");
    const communication = document.createElement("span");
    const labelWired = document.createElement("label");    
    const wired = document.createElement("input");
    const labelWireless = document.createElement("label"); 
    const wireless = document.createElement("input");
    const noiceReduction = document.createElement("span");
    const labelPassive = document.createElement("label"); 
    const passive = document.createElement("input");
    const labelActive = document.createElement("label"); 
    const active = document.createElement("input");
    const audioSystem = document.createElement("span");
    const labelStereo = document.createElement("label"); 
    const stereo = document.createElement("input");
    const labelSurround = document.createElement("label"); 
    const surround = document.createElement("input");
    budget.innerHTML = "Ile chcesz wydać?";
    communication.innerHTML = "Łączność:";
    noiceReduction.innerHTML = "Redukcja hałasu:";
    audioSystem.innerHTML = "System audio:";
    labelWired.innerHTML = "Przewodowe";
    labelWireless.innerHTML = "Bezprzewodowe";
    labelPassive.innerHTML = "Pasywna";
    labelActive.innerHTML = "Aktywna";
    labelStereo.innerHTML = "Stereo 2.0";
    labelSurround.innerHTML = "Surround 7.1";
    price.setAttribute("placeholder", "Kwota");
    price.setAttribute("type", "number");
    price.setAttribute("class", "sum");
    var checkboxes = [wired, wireless, passive, active, stereo, surround];
    checkboxes.forEach((item) => {
        item.setAttribute("type", "checkbox");  
    })
    const labels = [labelWired, labelWireless, labelPassive, labelActive, labelStereo, labelSurround];
    labels.forEach((item) => {
        item.setAttribute("style", "width: 130px");  
    })
    filterList.appendChild(budget);
    filterList.appendChild(price);
    filterList.appendChild(communication);
    filterList.appendChild(labelWired);
    labelWired.appendChild(wired);
    filterList.appendChild(labelWireless);
    labelWireless.appendChild(wireless);
    filterList.appendChild(noiceReduction);
    filterList.appendChild(labelPassive);
    labelPassive.appendChild(passive);
    filterList.appendChild(labelActive);
    labelActive.appendChild(active);
    filterList.appendChild(audioSystem);
    filterList.appendChild(labelStereo);
    labelStereo.appendChild(stereo);
    filterList.appendChild(labelSurround);
    labelSurround.appendChild(surround);
    var results = [];
    price.addEventListener("keyup", () =>{
        list.innerHTML = '';
        results = arr.filter((item) => {
            return(item.price <= price.value);
        })
        if(results.length === 0){
            drawFoundNothing();
        }else drawPage(results);
    })
    wired.addEventListener('change', function() {
    if (this.checked) {
        clearAndDisable();
        wired.removeAttribute("disabled", "disabled");
        results = arr.filter((item) => {
            return(item.info1.includes("Przewodow"));
        })
        if(results.length === 0){
            drawFoundNothing();
        }else drawPage(results);
    } else { 
        enable();
    }
    })
    wireless.addEventListener('change', function() {
        if (this.checked) {
            clearAndDisable();
            wireless.removeAttribute("disabled", "disabled");
            results = arr.filter((item) => {
                return(item.info1.includes("Bez"));
            })
            if(results.length === 0){
                drawFoundNothing();
            }else drawPage(results);
        } else {
           enable();
        }
    })
    passive.addEventListener('change', function() {
        if (this.checked) {
            clearAndDisable();
            passive.removeAttribute("disabled", "disabled");
            results = arr.filter((item) => {
                return(item.info4.includes("Pasywna"));
            })
            if(results.length === 0){
                drawFoundNothing();
            }else drawPage(results);
        } else {
           enable();
        }
    })
    active.addEventListener('change', function() {
        if (this.checked) {
            clearAndDisable();
            active.removeAttribute("disabled", "disabled");
            results = arr.filter((item) => {
                return(item.info4.includes("Aktywna"));
            })
            if(results.length === 0){
                drawFoundNothing();
            }else drawPage(results);
        } else {
            enable();
        }
    })
    stereo.addEventListener('change', function() {
        if (this.checked) {
            clearAndDisable();
            stereo.removeAttribute("disabled", "disabled");
            results = arr.filter((item) => {
                return(item.info5.includes("2.0"));
            })
            if(results.length === 0){
                drawFoundNothing();
            }else drawPage(results);
        } else {
            enable();
        }
    })
    surround.addEventListener('change', function() {
        if (this.checked) {
            clearAndDisable();
            surround.removeAttribute("disabled", "disabled");
            results = arr.filter((item) => {
                return(item.info5.includes("7.1"));
            })
            if(results.length === 0){
                drawFoundNothing();
            }else drawPage(results);
        } else {
            enable();
        }
    })

    function clearAndDisable(){
        list.innerHTML = '';
        price.value = '';
        checkboxes.forEach((item) => {
            item.setAttribute("disabled", "disabled");
        })
    }

    function enable(){
        checkboxes.forEach((item) => {
            item.removeAttribute("disabled", "disabled");
        })
    }
}
//Myszy:
function handleMousesFilters(arr){
    filterList.innerHTML = '';
    const budget = document.createElement("span");   
    var price = document.createElement("input");
    const communication = document.createElement("span");
    const labelWired = document.createElement("label");    
    const wired = document.createElement("input");
    const labelWireless = document.createElement("label"); 
    const wireless = document.createElement("input");
    const type = document.createElement("span");
    const labelClassic = document.createElement("label"); 
    const classic = document.createElement("input");
    const labelGamers = document.createElement("label"); 
    const gamers = document.createElement("input");
    const dpi = document.createElement("span");
    const label1000 = document.createElement("label"); 
    const dpi1000 = document.createElement("input");
    const label3200 = document.createElement("label"); 
    const dpi3200 = document.createElement("input");
    const labelOver3200 = document.createElement("label"); 
    const dpiOver3200 = document.createElement("input");
    budget.innerHTML = "Ile chcesz wydać?";
    communication.innerHTML = "Łączność:";
    type.innerHTML = "Typ:";
    dpi.innerHTML = "DPI:";
    labelWired.innerHTML = "Przewodowe";
    labelWireless.innerHTML = "Bezprzewodowe";
    labelClassic.innerHTML = "Klasyczna";
    labelGamers.innerHTML = "Dla graczy";
    label1000.innerHTML = "1000";
    label3200.innerHTML = "3200";
    labelOver3200.innerHTML = "> 3200";
    price.setAttribute("placeholder", "Kwota");
    price.setAttribute("type", "number");
    price.setAttribute("class", "sum");
    var checkboxes = [wired, wireless, classic, gamers, dpi1000, dpi3200, dpiOver3200];
    checkboxes.forEach((item) => {
        item.setAttribute("type", "checkbox");  
    })
    const labels = [labelWired, labelWireless, labelClassic, labelGamers, label1000, label3200, labelOver3200];
    labels.forEach((item) => {
        item.setAttribute("style", "width: 130px");  
    })
    filterList.appendChild(budget);
    filterList.appendChild(price);
    filterList.appendChild(communication);
    filterList.appendChild(labelWired);
    labelWired.appendChild(wired);
    filterList.appendChild(labelWireless);
    labelWireless.appendChild(wireless);
    filterList.appendChild(type);
    filterList.appendChild(labelClassic);
    labelClassic.appendChild(classic);
    filterList.appendChild(labelGamers);
    labelGamers.appendChild(gamers);
    filterList.appendChild(dpi);
    filterList.appendChild(label1000);
    label1000.appendChild(dpi1000);
    filterList.appendChild(label3200);
    label3200.appendChild(dpi3200);
    filterList.appendChild(labelOver3200);
    labelOver3200.appendChild(dpiOver3200);
    var results = [];
    price.addEventListener("keyup", () =>{
        list.innerHTML = '';
        results = arr.filter((item) => {
            return(item.price <= price.value);
        })
        if(results.length === 0){
            drawFoundNothing();
        }else drawPage(results);
    })
    wired.addEventListener('change', function() {
    if (this.checked) {
        clearAndDisable();
        wired.removeAttribute("disabled", "disabled");
        results = arr.filter((item) => {
            return(item.info1.includes("Przewodow"));
        })
        if(results.length === 0){
            drawFoundNothing();
        }else drawPage(results);
    } else { 
        enable();
    }
    })
    wireless.addEventListener('change', function() {
        if (this.checked) {
            clearAndDisable();
            wireless.removeAttribute("disabled", "disabled");
            results = arr.filter((item) => {
                return(item.info1.includes("Bez"));
            })
            if(results.length === 0){
                drawFoundNothing();
            }else drawPage(results);
        } else {
           enable();
        }
    })
    classic.addEventListener('change', function() {
        if (this.checked) {
            clearAndDisable();
            classic.removeAttribute("disabled", "disabled");
            results = arr.filter((item) => {
                return(item.info2.includes("Klasyczna"));
            })
            if(results.length === 0){
                drawFoundNothing();
            }else drawPage(results);
        } else {
           enable();
        }
    })
    gamers.addEventListener('change', function() {
        if (this.checked) {
            clearAndDisable();
            gamers.removeAttribute("disabled", "disabled");
            results = arr.filter((item) => {
                return(item.info2.includes("Dla"));
            })
            if(results.length === 0){
                drawFoundNothing();
            }else drawPage(results);
        } else {
            enable();
        }
    })
    dpi1000.addEventListener('change', function() {
        if (this.checked) {
            clearAndDisable();
            dpi1000.removeAttribute("disabled", "disabled");
            results = arr.filter((item) => {
                return(item.info5.includes("1000"));
            })
            if(results.length === 0){
                drawFoundNothing();
            }else drawPage(results);
        } else {
            enable();
        }
    })
    dpi3200.addEventListener('change', function() {
        if (this.checked) {
            clearAndDisable();
            dpi3200.removeAttribute("disabled", "disabled");
            results = arr.filter((item) => {
                return(item.info5.includes("3200"));
            })
            if(results.length === 0){
                drawFoundNothing();
            }else drawPage(results);
        } else {
            enable();
        }
    })
    dpiOver3200.addEventListener('change', function() {
        if (this.checked) {
            clearAndDisable();
            dpiOver3200.removeAttribute("disabled", "disabled");
            results = arr.filter((item) => {
                return(item.info5.includes("5") || item.info5.includes("8"));
            })
            if(results.length === 0){
                drawFoundNothing();
            }else drawPage(results);
        } else {
            enable();
        }
    })

    function clearAndDisable(){
        list.innerHTML = '';
        price.value = '';
        checkboxes.forEach((item) => {
            item.setAttribute("disabled", "disabled");
        })
    }

    function enable(){
        checkboxes.forEach((item) => {
            item.removeAttribute("disabled", "disabled");
        })
    }
}
//Klawiatury:
function handleKeyboardsFilters(arr){
    filterList.innerHTML = '';
    const budget = document.createElement("span");   
    var price = document.createElement("input");
    const communication = document.createElement("span");
    const labelWired = document.createElement("label");    
    const wired = document.createElement("input");
    const labelWireless = document.createElement("label"); 
    const wireless = document.createElement("input");
    const type = document.createElement("span");
    const labelClassic = document.createElement("label"); 
    const classic = document.createElement("input");
    const labelGamers = document.createElement("label"); 
    const gamers = document.createElement("input");
    const switches = document.createElement("span");
    const labelMechanical = document.createElement("label"); 
    const mechanical = document.createElement("input");
    const labelMembrane = document.createElement("label"); 
    const membrane = document.createElement("input");
    budget.innerHTML = "Ile chcesz wydać?";
    communication.innerHTML = "Łączność:";
    type.innerHTML = "Typ:";
    switches.innerHTML = "Przełączniki:";
    labelWired.innerHTML = "Przewodowe";
    labelWireless.innerHTML = "Bezprzewodowe";
    labelClassic.innerHTML = "Klasyczna";
    labelGamers.innerHTML = "Dla graczy";
    labelMechanical.innerHTML = "Mechaniczne";
    labelMembrane.innerHTML = "Membranowe";
    price.setAttribute("placeholder", "Kwota");
    price.setAttribute("type", "number");
    price.setAttribute("class", "sum");
    var checkboxes = [wired, wireless, classic, gamers, mechanical, membrane];
    checkboxes.forEach((item) => {
        item.setAttribute("type", "checkbox");  
    })
    const labels = [labelWired, labelWireless, labelClassic, labelGamers, labelMechanical, labelMembrane];
    labels.forEach((item) => {
        item.setAttribute("style", "width: 130px");  
    })
    filterList.appendChild(budget);
    filterList.appendChild(price);
    filterList.appendChild(communication);
    filterList.appendChild(labelWired);
    labelWired.appendChild(wired);
    filterList.appendChild(labelWireless);
    labelWireless.appendChild(wireless);
    filterList.appendChild(type);
    filterList.appendChild(labelClassic);
    labelClassic.appendChild(classic);
    filterList.appendChild(labelGamers);
    labelGamers.appendChild(gamers);
    filterList.appendChild(switches);
    filterList.appendChild(labelMechanical);
    labelMechanical.appendChild(mechanical);
    filterList.appendChild(labelMembrane);
    labelMembrane.appendChild(membrane);
    var results = [];
    price.addEventListener("keyup", () =>{
        list.innerHTML = '';
        results = arr.filter((item) => {
            return(item.price <= price.value);
        })
        if(results.length === 0){
            drawFoundNothing();
        }else drawPage(results);
    })
    wired.addEventListener('change', function() {
    if (this.checked) {
        clearAndDisable();
        wired.removeAttribute("disabled", "disabled");
        results = arr.filter((item) => {
            return(item.info1.includes("Przewodow"));
        })
        if(results.length === 0){
            drawFoundNothing();
        }else drawPage(results);
    } else { 
        enable();
    }
    })
    wireless.addEventListener('change', function() {
        if (this.checked) {
            clearAndDisable();
            wireless.removeAttribute("disabled", "disabled");
            results = arr.filter((item) => {
                return(item.info1.includes("Bez"));
            })
            if(results.length === 0){
                drawFoundNothing();
            }else drawPage(results);
        } else {
           enable();
        }
    })
    classic.addEventListener('change', function() {
        if (this.checked) {
            clearAndDisable();
            classic.removeAttribute("disabled", "disabled");
            results = arr.filter((item) => {
                return(item.info2.includes("Klasyczna"));
            })
            if(results.length === 0){
                drawFoundNothing();
            }else drawPage(results);
        } else {
           enable();
        }
    })
    gamers.addEventListener('change', function() {
        if (this.checked) {
            clearAndDisable();
            gamers.removeAttribute("disabled", "disabled");
            results = arr.filter((item) => {
                return(item.info2.includes("Dla"));
            })
            if(results.length === 0){
                drawFoundNothing();
            }else drawPage(results);
        } else {
            enable();
        }
    })
    mechanical.addEventListener('change', function() {
        if (this.checked) {
            clearAndDisable();
            mechanical.removeAttribute("disabled", "disabled");
            results = arr.filter((item) => {
                return(item.info3.includes("Mech"));
            })
            if(results.length === 0){
                drawFoundNothing();
            }else drawPage(results);
        } else {
            enable();
        }
    })
    membrane.addEventListener('change', function() {
        if (this.checked) {
            clearAndDisable();
            membrane.removeAttribute("disabled", "disabled");
            results = arr.filter((item) => {
                return(item.info3.includes("Mem"));
            })
            if(results.length === 0){
                drawFoundNothing();
            }else drawPage(results);
        } else {
            enable();
        }
    })

    function clearAndDisable(){
        list.innerHTML = '';
        price.value = '';
        checkboxes.forEach((item) => {
            item.setAttribute("disabled", "disabled");
        })
    }

    function enable(){
        checkboxes.forEach((item) => {
            item.removeAttribute("disabled", "disabled");
        })
    }
}
//