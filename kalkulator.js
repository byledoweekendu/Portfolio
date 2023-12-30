//Uchwyty:
let foodInput = document.querySelector("#food");
let chemistryInput = document.querySelector("#chemistry");
let fuelInput = document.querySelector("#fuel");
let medsInput = document.querySelector("#meds");
let billsInput = document.querySelector("#bills");
let othersInput = document.querySelector("#others");
let foodSum = document.querySelector("#food-sum");
let chemistrySum = document.querySelector("#chemistry-sum");
let fuelSum = document.querySelector("#fuel-sum");
let medsSum = document.querySelector("#meds-sum");
let billsSum = document.querySelector("#bills-sum");
let othersSum = document.querySelector("#others-sum");
let foodAndChemistrySum = document.querySelector("#foodAndChemistrySum");
let generalSum = document.querySelector("#sum");
let last = document.querySelector("#list");
let resetList = document.querySelector("#resetList");
let resetAll = document.querySelector("#resetAll");
let inputs = document.querySelector("#inputs");
//

//Ładowanie danych:
function setStorage(){
if(localStorage.getItem('food') == null){
      localStorage.setItem('food', 0);
  }
if(localStorage.getItem('chemistry') == null){
    localStorage.setItem('chemistry', 0);
}
if(localStorage.getItem('fuel') == null){
  localStorage.setItem('fuel', 0);
}
if(localStorage.getItem('meds') == null){
  localStorage.setItem('meds', 0);
}
if(localStorage.getItem('bills') == null){
  localStorage.setItem('bills', 0);
}
if(localStorage.getItem('others') == null){
  localStorage.setItem('others', 0);
}
if(localStorage.getItem('FAC') == null){
  localStorage.setItem('FAC', 0);
}
if(localStorage.getItem('general') == null){
  localStorage.setItem('general', 0);
}
if(localStorage.getItem('list') == null){
  localStorage.setItem('list', '[]');
}
}

function drawList(arr){
  return arr.forEach((item) => {
  let ol = document.createElement("ol");
  last.appendChild(ol);
  ol.innerHTML = item;
});
}

function load(){
  let food = JSON.parse(localStorage.getItem('food'));
  let chemistry = JSON.parse(localStorage.getItem('chemistry'));
  let fuel = JSON.parse(localStorage.getItem('fuel'));
  let meds = JSON.parse(localStorage.getItem('meds'));
  let bills = JSON.parse(localStorage.getItem('bills'));
  let others = JSON.parse(localStorage.getItem('others'));
  let general = JSON.parse(localStorage.getItem('general'));
  let FAC = JSON.parse(localStorage.getItem('FAC'));
  let list = JSON.parse(localStorage.getItem('list'));
  let foodAndChemistry = food + chemistry;
  let sum = food + chemistry + fuel + meds + bills + others;
  localStorage.setItem('FAC', JSON.stringify(parseFloat(foodAndChemistry)));
  localStorage.setItem('general', JSON.stringify(parseFloat(sum)));
  foodSum.innerHTML = food.toFixed(2) + 'zł';
  chemistrySum.innerHTML = chemistry.toFixed(2) + 'zł';
  fuelSum.innerHTML = fuel.toFixed(2) + 'zł';
  medsSum.innerHTML = meds.toFixed(2) + 'zł';
  billsSum.innerHTML = bills.toFixed(2) + 'zł';
  othersSum.innerHTML = others.toFixed(2) + 'zł';
  foodAndChemistrySum.innerHTML = FAC.toFixed(2) + 'zł';
  generalSum.innerHTML = general.toFixed(2) + 'zł';
  drawList(list);
}

setStorage();
load();
//

//Dodawanie danych:
const addFood = () =>{
  let food = JSON.parse(localStorage.getItem('food'));
  let list = JSON.parse(localStorage.getItem('list'));
  let amount = foodInput.value;
  let sum = food + parseFloat(amount);
  let string = "Spożywcze + " + amount + "zł";
  list.push(string);
  localStorage.setItem('food', JSON.stringify(parseFloat(sum)));
  localStorage.setItem('list', JSON.stringify(list));
  foodInput.value = '';
  window.location.reload();
  load();
}

const addChemistry = () =>{
  let chemistry = JSON.parse(localStorage.getItem('chemistry'));
  let list = JSON.parse(localStorage.getItem('list'));
  let amount = chemistryInput.value;
  let sum = chemistry + parseFloat(amount);
  let string = "Chemia + " + amount + "zł";
  list.push(string);
  localStorage.setItem('chemistry', JSON.stringify(parseFloat(sum)));
  localStorage.setItem('list', JSON.stringify(list));
  chemistryInput.value = '';
  window.location.reload();
  load();
}

const addFuel = () =>{
  let fuel = JSON.parse(localStorage.getItem('fuel'));
  let list = JSON.parse(localStorage.getItem('list'));
  let amount = fuelInput.value;
  let sum = fuel + parseFloat(amount);
  let string = "Paliwo + " + amount + "zł";
  list.push(string);
  localStorage.setItem('fuel', JSON.stringify(parseFloat(sum)));
  localStorage.setItem('list', JSON.stringify(list));
  fuelInput.value = '';
  window.location.reload();
  load();
}

const addMeds = () =>{
  let meds = JSON.parse(localStorage.getItem('meds'));
  let list = JSON.parse(localStorage.getItem('list'));
  let amount = medsInput.value;
  let sum = meds + parseFloat(amount);
  let string = "Leki + " + amount + "zł";
  list.push(string);
  localStorage.setItem('meds', JSON.stringify(parseFloat(sum)));
  localStorage.setItem('list', JSON.stringify(list));
  medsInput.value = '';
  window.location.reload();
  load();
}

const addBills = () =>{
  let bills = JSON.parse(localStorage.getItem('bills'));
  let list = JSON.parse(localStorage.getItem('list'));
  let amount = billsInput.value;
  let sum = bills + parseFloat(amount);
  let string = "Rachunki + " + amount + "zł";
  list.push(string);
  localStorage.setItem('bills', JSON.stringify(parseFloat(sum)));
  localStorage.setItem('list', JSON.stringify(list));
  billsInput.value = '';
  window.location.reload();
  load();
}

const addOthers = () =>{
  let others = JSON.parse(localStorage.getItem('others'));
  let list = JSON.parse(localStorage.getItem('list'));
  let amount = othersInput.value;
  let sum = others + parseFloat(amount);
  let string = "Inne + " + amount + "zł";
  list.push(string);
  localStorage.setItem('others', JSON.stringify(parseFloat(sum)));
  localStorage.setItem('list', JSON.stringify(list));
  othersInput.value = '';
  window.location.reload();
  load();
}

foodInput.addEventListener('change', addFood);
chemistryInput.addEventListener('change', addChemistry);
fuelInput.addEventListener('change', addFuel);
medsInput.addEventListener('change', addMeds);
billsInput.addEventListener('change', addBills);
othersInput.addEventListener('change', addOthers);

resetList.addEventListener('click', () => {
  localStorage.setItem('list', '[]');
  last.innerHTML = '';
})

resetAll.addEventListener('click', () => {
  let sure = document.createElement('button');
  sure.setAttribute('class', 'reset');
  sure.setAttribute('id', 'sure');
  sure.innerHTML = 'Na pewno?'
  inputs.appendChild(sure);
  sure.addEventListener('click', () => {
    localStorage.setItem('food', 0);
    localStorage.setItem('chemistry', 0);
    localStorage.setItem('fuel', 0);
    localStorage.setItem('meds', 0);
    localStorage.setItem('bills', 0);
    localStorage.setItem('others', 0);
    localStorage.setItem('FAC', 0);
    localStorage.setItem('general', 0);
    localStorage.setItem('list', '[]');
    window.location.reload();
  })
})
//
