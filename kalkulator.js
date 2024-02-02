//Uchwyty:
let foodInput = document.querySelector("#food");
let candyInput = document.querySelector("#candy");
let habbitsInput = document.querySelector("#habbits");
let chemistryInput = document.querySelector("#chemistry");
let fuelInput = document.querySelector("#fuel");
let medsInput = document.querySelector("#meds");
let billsInput = document.querySelector("#bills");
let othersInput = document.querySelector("#others");
let salaryInput = document.querySelector("#salary");
let foodSum = document.querySelector("#food-sum");
let candySum = document.querySelector("#candy-sum");
let habbitsSum = document.querySelector("#habbits-sum");
let chemistrySum = document.querySelector("#chemistry-sum");
let fuelSum = document.querySelector("#fuel-sum");
let medsSum = document.querySelector("#meds-sum");
let billsSum = document.querySelector("#bills-sum");
let othersSum = document.querySelector("#others-sum");
let foodAndChemistrySum = document.querySelector("#foodAndChemistrySum");
let generalSum = document.querySelector("#sum");
let bilanceSum = document.querySelector("#diff");
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
if(localStorage.getItem('candy') == null){
  localStorage.setItem('candy', 0);
}
if(localStorage.getItem('habbits') == null){
  localStorage.setItem('habbits', 0);
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
if(localStorage.getItem('salary') == null){
  localStorage.setItem('salary', 0);
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
  let candy = JSON.parse(localStorage.getItem('candy'));
  let habbits = JSON.parse(localStorage.getItem('habbits'));
  let chemistry = JSON.parse(localStorage.getItem('chemistry'));
  let fuel = JSON.parse(localStorage.getItem('fuel'));
  let meds = JSON.parse(localStorage.getItem('meds'));
  let bills = JSON.parse(localStorage.getItem('bills'));
  let others = JSON.parse(localStorage.getItem('others'));
  let salary = JSON.parse(localStorage.getItem('salary'));
  let list = JSON.parse(localStorage.getItem('list'));
  let foodAndChemistry = food + candy + habbits + chemistry;
  let general = food + candy + habbits + chemistry + fuel + meds + bills + others;
  let bilance = salary - general;
  localStorage.setItem('FAC', JSON.stringify(parseFloat(foodAndChemistry)));
  localStorage.setItem('general', JSON.stringify(parseFloat(sum)));
  foodSum.innerHTML = food.toFixed(2) + 'zł';
  candySum.innerHTML = candy.toFixed(2) + 'zł';
  habbitsSum.innerHTML = habbits.toFixed(2) + 'zł';
  chemistrySum.innerHTML = chemistry.toFixed(2) + 'zł';
  fuelSum.innerHTML = fuel.toFixed(2) + 'zł';
  medsSum.innerHTML = meds.toFixed(2) + 'zł';
  billsSum.innerHTML = bills.toFixed(2) + 'zł';
  othersSum.innerHTML = others.toFixed(2) + 'zł';
  bilanceSum.innerHTML = bilance.toFixed(2) + 'zł';
  foodAndChemistrySum.innerHTML = foodAndChemistry.toFixed(2) + 'zł';
  generalSum.innerHTML = '- ' + '\xa0' + general.toFixed(2) + 'zł' + '</br>' +  '+ ' + salary.toFixed(2) + 'zł';
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
  load();
  window.location.reload();
}

const addCandy = () =>{
  let candy = JSON.parse(localStorage.getItem('candy'));
  let list = JSON.parse(localStorage.getItem('list'));
  let amount = candyInput.value;
  let sum = candy + parseFloat(amount);
  let string = "Słodycze + " + amount + "zł";
  list.push(string);
  localStorage.setItem('candy', JSON.stringify(parseFloat(sum)));
  localStorage.setItem('list', JSON.stringify(list));
  candyInput.value = '';
  load();
  window.location.reload();
}

const addHabbits = () =>{
  let habbits = JSON.parse(localStorage.getItem('habbits'));
  let list = JSON.parse(localStorage.getItem('list'));
  let amount = habbitsInput.value;
  let sum = habbits + parseFloat(amount);
  let string = "Używki + " + amount + "zł";
  list.push(string);
  localStorage.setItem('habbits', JSON.stringify(parseFloat(sum)));
  localStorage.setItem('list', JSON.stringify(list));
  habbitsInput.value = '';
  load();
  window.location.reload();
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
  load();
  window.location.reload();
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
  load();
  window.location.reload();
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
  load();
  window.location.reload();
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
  load();
  window.location.reload();
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
  load();
  window.location.reload();
}

const addSalary = () =>{
  let salary = JSON.parse(localStorage.getItem('salary'));
  let list = JSON.parse(localStorage.getItem('list'));
  let amount = salaryInput.value;
  let sum = salary + parseFloat(amount);
  let string = "Przychód + " + amount + "zł";
  list.push(string);
  localStorage.setItem('salary', JSON.stringify(parseFloat(sum)));
  localStorage.setItem('list', JSON.stringify(list));
  salaryInput.value = '';
  load();
  window.location.reload();
}

foodInput.addEventListener('change', addFood);
candyInput.addEventListener('change', addCandy);
habbitsInput.addEventListener('change', addHabbits);
chemistryInput.addEventListener('change', addChemistry);
fuelInput.addEventListener('change', addFuel);
medsInput.addEventListener('change', addMeds);
billsInput.addEventListener('change', addBills);
othersInput.addEventListener('change', addOthers);
salaryInput.addEventListener('change', addSalary);

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
    localStorage.setItem('candy', 0);
    localStorage.setItem('habbits', 0);
    localStorage.setItem('chemistry', 0);
    localStorage.setItem('fuel', 0);
    localStorage.setItem('meds', 0);
    localStorage.setItem('bills', 0);
    localStorage.setItem('others', 0);
    localStorage.setItem('FAC', 0);
    localStorage.setItem('general', 0);
    localStorage.setItem('salary', 0);
    localStorage.setItem('list', '[]');
    window.location.reload();
  })
})
//
