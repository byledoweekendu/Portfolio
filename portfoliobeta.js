//Tablice:
const responsive = `<a href="przepisy.html" target="_blank" class="projectTile"><span class="projectName">Przepisy</span><img src="img portfolio beta/przepisy.jpg" class="projectImg" alt="Przepisy"/></a>
<a href="reminder.html" target="_blank" class="projectTile"><span class="projectName">Przypominacz</span><img src="img portfolio beta/reminder.jpg" class="projectImg" alt="Przypominacz"/></a>
<a href="sklep.html" target="_blank" class="projectTile"><span class="projectName">Sklep</span><img src="img portfolio beta/sklep.jpg" class="projectImg" alt="Sklep"/></a>`;
const notResponsive = `<a href="kalkulator.html" target="_blank" class="projectTile"><span class="projectName">Kalkulator wydatków</span><img src="img portfolio beta/kalkulator.jpg" class="projectImg" alt="Kalkulator"/></a>
<a href="quiz.html" target="_blank" class="projectTile"><span class="projectName">Quiz tabliczka mnożenia</span><img src="img portfolio beta/quiz.jpg" class="projectImg" alt="Quiz"/></a>
<a href="gra.html" target="_blank" class="projectTile"><span class="projectName">Gra w zgadywanie</span><img src="img portfolio beta/gra.jpg" class="projectImg" alt="Gra"/></a>`;
const all = `<a href="przepisy.html" target="_blank" class="projectTile"><span class="projectName">Przepisy</span><img src="img portfolio beta/przepisy.jpg" class="projectImg" alt="Przepisy"/></a>
<a href="reminder.html" target="_blank" class="projectTile"><span class="projectName">Przypominacz</span><img src="img portfolio beta/reminder.jpg" class="projectImg" alt="Przypominacz"/></a>
<a href="sklep.html" target="_blank" class="projectTile"><span class="projectName">Sklep</span><img src="img portfolio beta/sklep.jpg" class="projectImg" alt="Sklep"/></a>
<a href="kalkulator.html" target="_blank" class="projectTile"><span class="projectName">Kalkulator wydatków</span><img src="img portfolio beta/kalkulator.jpg" class="projectImg" alt="Kalkulator"/></a>
<a href="quiz.html" target="_blank" class="projectTile"><span class="projectName">Quiz tabliczka mnożenia</span><img src="img portfolio beta/quiz.jpg" class="projectImg" alt="Quiz"/></a>
<a href="gra.html" target="_blank" class="projectTile"><span class="projectName">Gra w zgadywanie</span><img src="img portfolio beta/gra.jpg" class="projectImg" alt="Gra"/></a>`;
//

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
$("#responsive").click(function(){
	$("#projects").fadeOut(750);
	$("#projects").fadeIn(750);
	setTimeout(() => {
		$("#projects").html(responsive);
	}, 750)
});
$("#not-responsive").click(function(){
	$("#projects").fadeOut(750);
	$("#projects").fadeIn(750);
	setTimeout(() => {
		$("#projects").html(notResponsive);
	}, 750)
});
$("#all").click(function(){
	$("#projects").fadeOut(750);
	$("#projects").fadeIn(750);
	setTimeout(() => {
		$("#projects").html(all);
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