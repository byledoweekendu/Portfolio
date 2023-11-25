const basketList = document.querySelector(".basketList");
const priceCounter = document.querySelector("p");
const buy = document.querySelector("a");
const parcelLocker = document.querySelector("#parcelLocker");
const deliveryMan = document.querySelector("#deliveryMan");
const post = document.querySelector("#post");

function drawBasketList(){
    setInterval(() => {
        const currentBasket = JSON.parse(localStorage.getItem('basket'));
        const sum = currentBasket.reduce((prev, item) => {
            return prev + item.price;
        }, 0);
        priceCounter.innerHTML = sum + delivery + " zł";
    }, 250)
    var frame = document.createElement("ul");
    frame.setAttribute("class", "basket");
    basketList.appendChild(frame);
        const currentBasket = JSON.parse(localStorage.getItem('basket'));
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
                element.remove();
                const currentBasket = JSON.parse(localStorage.getItem('basket'));
                const clickedItem = item.id;
                const updatedBasket = currentBasket.filter(item => item.id !== clickedItem);
                localStorage.setItem('basket', JSON.stringify(updatedBasket));
              });
        })}
}

drawBasketList();

let delivery = 0;

parcelLocker.addEventListener('change', function() {
    if (this.checked) {
      delivery = 10;
      deliveryMan.setAttribute("disabled", "disabled");
      post.setAttribute("disabled", "disabled");
    } else {
      delivery = 0;
      deliveryMan.removeAttribute("disabled", "disabled");
      post.removeAttribute("disabled", "disabled");
    }
  });

  deliveryMan.addEventListener('change', function() {
    if (this.checked) {
        delivery = 15;
        parcelLocker.setAttribute("disabled", "disabled");
        post.setAttribute("disabled", "disabled");
    } else {
        delivery = 0;
        parcelLocker.removeAttribute("disabled", "disabled");
        post.removeAttribute("disabled", "disabled");
    }
  });

  post.addEventListener('change', function() {
    if (this.checked) {
        delivery = 12;
        parcelLocker.setAttribute("disabled", "disabled");
        deliveryMan.setAttribute("disabled", "disabled");
    } else {
        delivery = 0;
        parcelLocker.removeAttribute("disabled", "disabled");
        deliveryMan.removeAttribute("disabled", "disabled");
    }
  });