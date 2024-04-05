//Dane:
const home = `<span id="hi" class="text">Cześć, nazywam się</span>
<span id="name" class="text">Jacek Szymański</span>
<span id="profession" class="text">i jestem Frontend Developerem</span>
<span id="welcome" class="text">Witam serdecznie na moim portfolio.</br>Zapraszam do zapoznania się z moją twórczością oraz do kontaktu i współpracy.</span>`;

const about = `<span id ="description" class="text">Początkujący frontend developer po kursie Java Script + React od podstaw.</br></br>
Zajmuję się projektowaniem stron internetowych, a konkretnie ich wyglądem i zachowaniem elementów po interakcji użytownika.</br></br> 
Stworzę stronę wizytówkę, portfolio lub projekt indywidualny dla firmy.</br></br>
Zaprojektuję też program lub aplikację na telefon i nie tylko. Jeśli masz jakiś pomysł, porozmawiajmy o nim.</br></br>
Jestem otwarty na wszelką współpracę, udział w projektach oraz zlecenia, staże i prace jako Front End Developer.</br></br>
Zapraszam serdecznie do przejrzenia moich projektów i kontaktu.</span>`;

const skills = `<section id="br1"><img src="img portfolio/html.png" class="icon" alt="HTML5"/><span class="text3">HTML5</span></section>
<section id="br2"><img src="img portfolio/css.png" class="icon" alt="CSS3"/><span class="text3">CSS3</span></section>
<section id="br3"><img src="img portfolio/js.png" class="icon" alt="JS"/><span class="text3">Java Script</span></section>
<section id="br4"><img src="img portfolio/jquery.png" class="icon" alt="jQ"/><span class="text3">jQuery</span></section>
<section id="br5"><img src="img portfolio/react.png" class="icon" alt="React"/><span class="text3">React</span></section>
<section id="br6"><img src="img portfolio/eng.png" class="icon" alt="Angielski"/><span class="text3">Angielski</span></section>`;

const projects = `<span class="text2">Strony/Programy:</span>
<div class="projects">
	<a href="kalkulator.html" target="_blank" class="projectTile"><span class="projectName">Apka Kalkulator Wydatków</span><img src="img portfolio/kalkulator.jpg" class="projectImg" alt="Kalkulator"/></a>
	<a href="reminder.html" target="_blank" class="projectTile"><span class="projectName">Przypominacz</span><img src="img portfolio/reminder.jpg" class="projectImg" alt="Przypominacz"/></a>
	<a href="przepisy.html" target="_blank" class="projectTile"><span class="projectName">Przepisy</span><img src="img portfolio/przepisy.jpg" class="projectImg" alt="Przepisy"/></a>
</div>
<span class="text2">Wizytówki/Szablony:</span>
<div class="projects">
	<a href="firma.html" target="_blank" class="projectTile"><span class="projectName">DREW-LIS</span><img src="img portfolio/drew-lis.jpg" class="projectImg" alt="Drew-Lis"/></a>
	<a href="rostlog.html" target="_blank" class="projectTile"><span class="projectName">RostLog S.C</span><img src="img portfolio/rostlog.jpg" class="projectImg" alt="RostLog"/></a>
	<a href="sklep.html" target="_blank" class="projectTile"><span class="projectName">Szablon Sklepu</span><img src="img portfolio/sklep.jpg" class="projectImg" alt="Sklep"/></a>
    <a href="portfolioalfa.html" target="_blank" class="projectTile"><span class="projectName">Alfa Portfolio</span><img src="img portfolio/alfa.jpg" class="projectImg" alt="Alfa Portfolio"/></a>
    <a href="portfoliobeta.html" target="_blank" class="projectTile"><span class="projectName">Beta Portfolio</span><img src="img portfolio/beta.jpg" class="projectImg" alt="Beta Portfolio"/></a>
</div>`;

const prices = `<span class="text4">Średni koszt strony w 2024:</span>
<span class="text5">„Koszt stworzenia strony internetowej od podstaw może kosztować od 500 zł, jeżeli będziesz tworzyć stronę samodzielnie do 25.000 zł lub więcej 
zlecając stronę w dużej agencji interaktywnej. Średni koszt stworzenia strony internetowej w 2024 r. 
na polskim rynku przez profesjonalnego wykonawcę może wynosić około 4000 do 8000 zł. 
Cena projektu i wdrożenia strony internetowej może znacznie wzrosnąć, jeśli Twój projekt jest niestandardowy i wymaga dedykowanych rozwiązań.”</span>
<span class="text4">U mnie strona kosztuje(zależnie od stopnia skomplikowania) od 1000zł do 2000zł, natomiast najprostsza wizytówkowa od 500zł do 750zł.</br></br>
Do kosztów strony należy wliczyć też hosting(do 250zł) oraz domenę i certyfikat SSL(do 100zł) na rok, aczkolwiek często za pierwszy rok są promocje i całość wyniesie do 100zł. 
Są to orientacyjne średnie koszta.</span>`;

const contact = `<form action="https://formsubmit.co/jacekszymanskiwebdeveloper@gmail.com" method="POST">
<p>Wyślij mi wiadomość</p>
<input id="fullName" name="name" type="text" placeholder="Wpisz swoje imię" required/>
<input id="mail" name="mail" type="mail" placeholder="Wpisz swój email" required/>
<input type="hidden" name="_next" value="https://jacekszymanskiportfolio.cba.pl/dziekuje.html">
<input type="hidden" name="_subject" value="Nowa wiadomość z portfolio">
<input type="hidden" name="_captcha" value="false">
<textarea id="msg" name="msg" rows="3" placeholder="Wpisz wiadomość" required></textarea>
<input id="send" value="Wyślij" type="submit"/>
</form>
<p id="refund">Skontaktuj się ze mną przez powyższy formularz lub social media poniżej albo:</p>
<a href="ankieta.html" id="order">Zamów usługę</a>`;
//

//Nav:
$("#home").click(function(){
	$("#display").fadeOut(750);
	$("#display").fadeIn(750);
	setTimeout(() => {
		$("#display").html(home);
		document.querySelector('#scrollPoint').scrollIntoView();
	}, 750)
});

$("#homeM").click(function(){
	$("#display").fadeOut(750);
	$("#display").fadeIn(750);
	setTimeout(() => {
		$("#display").html(home);
		document.querySelector('#scrollPoint').scrollIntoView();
	}, 750)
});

$("#about").click(function(){
	$("#display").fadeOut(750);
	$("#display").fadeIn(750);
	setTimeout(() => {
		$("#display").html(about);
		document.querySelector('#scrollPoint').scrollIntoView();
	}, 750)
});

$("#aboutM").click(function(){
	$("#display").fadeOut(750);
	$("#display").fadeIn(750);
	setTimeout(() => {
		$("#display").html(about);
		document.querySelector('#scrollPoint').scrollIntoView();
	}, 750)
});

$("#skills").click(function(){
	$("#display").fadeOut(750);
	$("#display").fadeIn(750);
	setTimeout(() => {
		$("#display").html(skills);
		document.querySelector('#scrollPoint').scrollIntoView();
		animate();
	}, 750)
});

$("#skillsM").click(function(){
	$("#display").fadeOut(750);
	$("#display").fadeIn(750);
	setTimeout(() => {
		$("#display").html(skills);
		document.querySelector('#scrollPoint').scrollIntoView();
		animateM();
	}, 750)
});

$("#projectsBtn").click(function(){
	$("#display").fadeOut(750);
	$("#display").fadeIn(750);
	setTimeout(() => {
		$("#display").html(projects);
		document.querySelector('#scrollPoint').scrollIntoView();
	}, 750)
});

$("#projectsBtnM").click(function(){
	$("#display").fadeOut(750);
	$("#display").fadeIn(750);
	setTimeout(() => {
		$("#display").html(projects);
		document.querySelector('#scrollPoint').scrollIntoView();
	}, 750)
});

$("#prices").click(function(){
	$("#display").fadeOut(750);
	$("#display").fadeIn(750);
	setTimeout(() => {
		$("#display").html(prices);
		document.querySelector('#scrollPoint').scrollIntoView();
	}, 750)
});

$("#pricesM").click(function(){
	$("#display").fadeOut(750);
	$("#display").fadeIn(750);
	setTimeout(() => {
		$("#display").html(prices);
		document.querySelector('#scrollPoint').scrollIntoView();
	}, 750)
});

$("#contact").click(function(){
	$("#display").fadeOut(750);
	$("#display").fadeIn(750);
	setTimeout(() => {
		$("#display").html(contact);
		document.querySelector('#scrollPoint').scrollIntoView();
	}, 750)
});

$("#contactM").click(function(){
	$("#display").fadeOut(750);
	$("#display").fadeIn(750);
	setTimeout(() => {
		$("#display").html(contact);
		document.querySelector('#scrollPoint').scrollIntoView();
	}, 750)
});

//Navbar:
document.addEventListener('DOMContentLoaded', function(){
    const menu = document.querySelector('#menu');
    $("#burger-menu").click(function(){
        menu.classList.toggle('show');
    });
    $("#homeM").click(function(){
        menu.classList.toggle('show');
    });
    $("#aboutM").click(function(){
        menu.classList.toggle('show');
    });
    $("#skillsM").click(function(){
        menu.classList.toggle('show');
    });
    $("#projectsBtnM").click(function(){
        menu.classList.toggle('show');
    });
	$("#pricesM").click(function(){
		menu.classList.toggle('show');
	});
    $("#contactM").click(function(){
        menu.classList.toggle('show');
    });
});
//
function animate(){
	$("#br1").animate({ 'margin-left': "+=50%"}, 500 );
	$("#br2").animate({ 'margin-left': "+=30%"}, 300 );
	$("#br3").animate({ 'margin-left': "+=75%"}, 750 );
	$("#br4").animate({ 'margin-left': "+=40%"}, 400 );
	$("#br5").animate({ 'margin-left': "+=65%"}, 650 );
	$("#br6").animate({ 'margin-left': "+=25%"}, 250 );
}
function animateM(){
	$("#br1").animate({ 'margin-left': "+=35%"}, 350 );
	$("#br2").animate({ 'margin-left': "+=2.5%"}, 100 );
	$("#br3").animate({ 'margin-left': "+=70%"}, 700 );
	$("#br4").animate({ 'margin-left': "+=15%"}, 150 );
	$("#br5").animate({ 'margin-left': "+=60%"}, 600 );
	$("#br6").animate({ 'margin-left': "+=10%"}, 100 );
}
//