//Tablice:
const responsive = `<a href="przepisy.html" target="_blank" class="projectTile"><span class="projectName">Przepisy</span><img src="img portfolio/przepisy.jpg" class="projectImg" alt="Przepisy"/></a>
<a href="reminder.html" target="_blank" class="projectTile"><span class="projectName">Przypominacz</span><img src="img portfolio/reminder.jpg" class="projectImg" alt="Przypominacz"/></a>
<a href="sklep.html" target="_blank" class="projectTile"><span class="projectName">Sklep</span><img src="img portfolio/sklep.jpg" class="projectImg" alt="Sklep"/></a>
<a href="portfolioalfa.html" target="_blank" class="projectTile"><span class="projectName">Alfa Portfolio</span><img src="img portfolio/alfa.jpg" class="projectImg" alt="Alfa Portfolio"/></a>
<a href="portfoliobeta.html" target="_blank" class="projectTile"><span class="projectName">Beta Portfolio</span><img src="img portfolio/beta.jpg" class="projectImg" alt="Beta Portfolio"/></a>`;
const notResponsive = `<a href="kalkulator.html" target="_blank" class="projectTile"><span class="projectName">Kalkulator wydatków</span><img src="img portfolio/kalkulator.jpg" class="projectImg" alt="Kalkulator"/></a>
<a href="quiz.html" target="_blank" class="projectTile"><span class="projectName">Quiz tabliczka mnożenia</span><img src="img portfolio/quiz.jpg" class="projectImg" alt="Quiz"/></a>
<a href="gra.html" target="_blank" class="projectTile"><span class="projectName">Gra w zgadywanie</span><img src="img portfolio/gra.jpg" class="projectImg" alt="Gra"/></a>`;
const all = `<a href="przepisy.html" target="_blank" class="projectTile"><span class="projectName">Przepisy</span><img src="img portfolio/przepisy.jpg" class="projectImg" alt="Przepisy"/></a>
<a href="reminder.html" target="_blank" class="projectTile"><span class="projectName">Przypominacz</span><img src="img portfolio/reminder.jpg" class="projectImg" alt="Przypominacz"/></a>
<a href="sklep.html" target="_blank" class="projectTile"><span class="projectName">Sklep</span><img src="img portfolio/sklep.jpg" class="projectImg" alt="Sklep"/></a>
<a href="portfolioalfa.html" target="_blank" class="projectTile"><span class="projectName">Alfa Portfolio</span><img src="img portfolio/alfa.jpg" class="projectImg" alt="Alfa Portfolio"/></a>
<a href="portfoliobeta.html" target="_blank" class="projectTile"><span class="projectName">Beta Portfolio</span><img src="img portfolio/beta.jpg" class="projectImg" alt="Beta Portfolio"/></a>
<a href="kalkulator.html" target="_blank" class="projectTile"><span class="projectName">Kalkulator wydatków</span><img src="img portfolio/kalkulator.jpg" class="projectImg" alt="Kalkulator"/></a>
<a href="quiz.html" target="_blank" class="projectTile"><span class="projectName">Quiz tabliczka mnożenia</span><img src="img portfolio/quiz.jpg" class="projectImg" alt="Quiz"/></a>
<a href="gra.html" target="_blank" class="projectTile"><span class="projectName">Gra w zgadywanie</span><img src="img portfolio/gra.jpg" class="projectImg" alt="Gra"/></a>`;
//

//Nav:
$("#home").click(function(){
	$("#display").fadeOut(750);
	$("#display").fadeIn(750);
	setTimeout(() => {
		$("#display").html(`<span id="hi" class="text">Cześć, nazywam się</span>
        <span id="name" class="text">Jacek Szymański</span>
        <span id="profession" class="text">i jestem Frontend Developerem</span>
        <span id="welcome" class="text">Witam serdecznie na moim portfolio.</br>Zapraszam do zapoznania się z moją twórczością oraz do kontaktu i współpracy.</span>`);
	}, 750)
});

$("#about").click(function(){
	$("#display").fadeOut(750);
	$("#display").fadeIn(750);
	setTimeout(() => {
		$("#display").html(`<span id ="description" class="text">Początkujący frontend developer po kursie Java Script + React od podstaw.</br></br>
        Zajmuję się projektowaniem stron internetowych, a konkretnie ich wyglądem i zachowaniem po interakcji użytownika z jej elementami.</br></br> 
        Zapraszam do zapoznania się z moimi projektami.</br></br> 
        Podzieliłem je na responsywne i nieresponsywne.</br></br>
        Responsywne to te, które dostosowane są do wyświetlania zarówno na dużych ekranach komputerów jak i małych mobilnych.</br></br>
        Nieresponsywne to projekty tylko na duże ekrany.</br></br>
        Projekty tworzę w zależności od potrzeb.</br></br>
        Stworzę stronę firmy, portfolio lub pomogę przy projektach.</span>`);
	}, 750)
});

$("#skills").click(function(){
	$("#display").fadeOut(750);
	$("#display").fadeIn(750);
	setTimeout(() => {
		$("#display").html(`<section id="br1"><img src="img portfolio/html.png" class="icon" alt="HTML5"/><span class="text3">HTML5</span></section>
        <section id="br2"><img src="img portfolio/css.png" class="icon" alt="CSS3"/><span class="text3">CSS3</span></section>
        <section id="br3"><img src="img portfolio/js.png" class="icon" alt="JS"/><span class="text3">Java Script</span></section>
        <section id="br4"><img src="img portfolio/jquery.png" class="icon" alt="jQ"/><span class="text3">jQuery</span></section>
        <section id="br5"><img src="img portfolio/react.png" class="icon" alt="React"/><span class="text3">React</span></section>
        <section id="br6"><img src="img portfolio/eng.png" class="icon" alt="Angielski"/><span class="text3">Angielski - komunikatywny</span></section>`);
	}, 750)
});

$("#projectsBtn").click(function(){
	$("#display").fadeOut(750);
	$("#display").fadeIn(750);
	setTimeout(() => {
		$("#display").html(`<span class="text2">Responsywne:</span>
        <div class="projects">
            <a href="przepisy.html" target="_blank" class="projectTile"><span class="projectName">Przepisy</span><img src="img portfolio/przepisy.jpg" class="projectImg" alt="Przepisy"/></a>
            <a href="reminder.html" target="_blank" class="projectTile"><span class="projectName">Przypominacz</span><img src="img portfolio/reminder.jpg" class="projectImg" alt="Przypominacz"/></a>
            <a href="sklep.html" target="_blank" class="projectTile"><span class="projectName">Sklep</span><img src="img portfolio/sklep.jpg" class="projectImg" alt="Sklep"/></a>
            <a href="portfolioalfa.html" target="_blank" class="projectTile"><span class="projectName">Alfa Portfolio</span><img src="img portfolio/alfa.jpg" class="projectImg" alt="Alfa Portfolio"/></a>
            <a href="portfoliobeta.html" target="_blank" class="projectTile"><span class="projectName">Beta Portfolio</span><img src="img portfolio/beta.jpg" class="projectImg" alt="Beta Portfolio"/></a>
        </div>
        <span class="text2">Nieresponsywne:</span>
        <div class="projects">
            <a href="kalkulator.html" target="_blank" class="projectTile"><span class="projectName">Kalkulator wydatków</span><img src="img portfolio/kalkulator.jpg" class="projectImg" alt="Kalkulator"/></a>
            <a href="quiz.html" target="_blank" class="projectTile"><span class="projectName">Quiz tabliczka mnożenia</span><img src="img portfolio/quiz.jpg" class="projectImg" alt="Quiz"/></a>
            <a href="gra.html" target="_blank" class="projectTile"><span class="projectName">Gra w zgadywanie</span><img src="img portfolio/gra.jpg" class="projectImg" alt="Gra"/></a>
        </div>`);
	}, 750)
});

$("#contact").click(function(){
	$("#display").fadeOut(750);
	$("#display").fadeIn(750);
	setTimeout(() => {
		$("#display").html(`<form action="https://formsubmit.co/byledoweekendu1995@gmail.com" method="POST">
        <input type="hidden" name="_next" value="https://jacekszymanskiportfolio.cba.pl/index.html">
        <p>Wyślij mi wiadomość</p>
        <input id="fullName" name="name" type="text" placeholder="Wpisz swoje imię"/>
        <input id="mail" name="mail" type="mail" placeholder="Wpisz swój email"/>
        <textarea id="msg" name="msg" rows="3" placeholder="Wpisz wiadomość"></textarea>
        <input id="send" value="Wyślij" type="submit"/>
        </form>
        <p id="refund">Skontaktuj się ze mną przez powyższy formularz lub social media poniżej.</p>`);
	}, 750)
});
//