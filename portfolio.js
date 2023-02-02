//Nav:
$("#skills").click(function(){
	$("#display").fadeOut(750);
	$("#display").fadeIn(750);
	setTimeout(() => {
		$("#display").html("<li>HTML5</li> <li>CSS3</li> <li>JavaScript</li> <li>React</li> <li>jQuery</li>");
	}, 750)
});

$("#school").click(function(){
	$("#display").fadeOut(750);
	$("#display").fadeIn(750);
	setTimeout(() => {
		$("#display").html("<b>wrzesień 2011 - kwiecień 2015:</b> </br>ZSRiT Powodowo w zawodzie technik elektronik");
	}, 750)
});

$("#exp").click(function(){
	$("#display").fadeOut(750);
	$("#display").fadeIn(750);
	setTimeout(() => {
		$("#display").html("<b>sierpień 2022 - obecnie:</b> </br>Inter Cars S.A. - Magazynier");
	}, 750)
});

$("#abilities").click(function(){
	$("#display").fadeOut(750);
	$("#display").fadeIn(750);
	setTimeout(() => {
		$("#display").html("<b>CODE:ME:</b> </br>JavaScript + React");
	}, 750)
});

$("#languages").click(function(){
	$("#display").fadeOut(750);
	$("#display").fadeIn(750);
	setTimeout(() => {
		$("#display").html("<b>Język angielski:</b> </br>Komunikatywny");
	}, 750)
});

$("#interested").click(function(){
	$("#display").fadeOut(750);
	$("#display").fadeIn(750);
	setTimeout(() => {
		$("#display").html("<li>Programowanie</li> <li>Informatyka</li> <li>Gry Komputerowe</li> <li>Gotowanie</li> <li>Motoryzacja</li>");
	}, 750)
});
//

//Zegar:
const clock = document.querySelector("#clock");

function count(){
    let today = new Date();
		
		let day = today.getDate();
		if(day < 10) day = "0" + day;
		
		let month = today.getMonth() + 1;
        if(month < 10) month = "0" + month;

		let year = today.getFullYear();
		
		let hour = today.getHours();
		if(hour < 10) hour = "0" + hour;
		
		let minute = today.getMinutes();
		if(minute < 10) minute = "0" + minute;
		
		let second = today.getSeconds()
		if(second < 10) second = "0" + second;
		
		clock.textContent = day + "/" + month + "/" + year + "\xa0\xa0" + hour + ":" + minute + ":" + second;
		
		setTimeout("count()", 1000);
}

window.addEventListener("load", (e) => {
    count();
});
//