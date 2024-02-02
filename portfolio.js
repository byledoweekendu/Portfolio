//Dane:
const home = `<span id="hi" class="text">Cześć, nazywam się</span>
<span id="name" class="text">Jacek Szymański</span>
<span id="profession" class="text">i jestem Frontend Developerem</span>
<span id="welcome" class="text">Witam serdecznie na moim portfolio.</br>Zapraszam do zapoznania się z moją twórczością oraz do kontaktu i współpracy.</span>`;

const about = `<span id ="description" class="text">Początkujący frontend developer po kursie Java Script + React od podstaw.</br></br>
Zajmuję się projektowaniem stron internetowych, a konkretnie ich wyglądem i zachowaniem po interakcji użytownika z jej elementami.</br></br> 
Zapraszam do zapoznania się z moimi projektami.</br></br> 
Stworzę stronę wizytówkę, portfolio lub projekt indywidualny dla firmy.</br></br>
Zoptymalizuję też i będę moderować dowolną wizytówkę google.</br></br>
Jestem otwarty na wszelką współpracę, udział w projektach oraz zlecenia, staże i prace jako Front End Developer.</br></br>
Zapraszam serdecznie do kontaktu.   
</span>`;

const card = `<span id ="cardDescr" class="text">Wizytówki google, to nic innego jak wszystkie te pozycje, które wyświetlają się w google po wpisaniu danej frazy np. "Elektryk".</br></br>
Po wpisaniu takiej frazy i miejsca np. "Poznań" wyskoczą wszyscy elektrycy z Poznania i okolic, którzy mają taką właśnie wizytówkę.</br></br> 
Taka wizytówka to główny kanał napływu klientów dla firmy.</br></br> 
Dzięki temu, że w takiej wizytówce dodamy wszystkie szczegółowe dane firmy, jej opis, specjalizacje, zdjęcia, godziny otwarcia i wiele innych informacji oraz odpowiemy na posty klientów,
mamy realny wpływ na to jak wysoko nasza wizytówka jest w wynikach wyszukiwania, a w ten sposób zwiększamy sobie napływ klientów do firmy.</br></br> 
Im więcej informacji, postów, szczegołów oraz aktywności w wizytówce tym wyżej jest nasza firma i tym więcej będzie miała pozytywnych recenzji i klientów.</br></br>
Drugim kanałem napływu klientów jest funpage na facebooku.</br></br>
Oba te kanały łączymy dedykowaną stroną internetową, która pozwala przedstawić firmę w 100% i idealnie spina wszystko w całość.</br></br>
Oczywiście nie każdy biznes potrzebuje dedykowaną stronę, ale w wielu przypadkach warto ją mieć, bo nie wszystko uda się dobrze przedstawić na google czy facebooku.</br></br>
</span>`

const skills = `<section id="br1"><img src="img portfolio/html.png" class="icon" alt="HTML5"/><span class="text3">HTML5</span></section>
<section id="br2"><img src="img portfolio/css.png" class="icon" alt="CSS3"/><span class="text3">CSS3</span></section>
<section id="br3"><img src="img portfolio/js.png" class="icon" alt="JS"/><span class="text3">Java Script</span></section>
<section id="br4"><img src="img portfolio/jquery.png" class="icon" alt="jQ"/><span class="text3">jQuery</span></section>
<section id="br5"><img src="img portfolio/react.png" class="icon" alt="React"/><span class="text3">React</span></section>
<section id="br6"><img src="img portfolio/eng.png" class="icon" alt="Angielski"/><span class="text3">Angielski - komunikatywny</span></section>`;

const projects = `<span class="text2">Strony/Programy:</span>
<div class="projects">
	<a href="reminder.html" target="_blank" class="projectTile"><span class="projectName">Przypominacz</span><img src="img portfolio/reminder.jpg" class="projectImg" alt="Przypominacz"/></a>
	<a href="sklep.html" target="_blank" class="projectTile"><span class="projectName">Sklep</span><img src="img portfolio/sklep.jpg" class="projectImg" alt="Sklep"/></a>
	<a href="przepisy.html" target="_blank" class="projectTile"><span class="projectName">Przepisy</span><img src="img portfolio/przepisy.jpg" class="projectImg" alt="Przepisy"/></a>
    <a href="kalkulator.html" target="_blank" class="projectTile"><span class="projectName">Kalkulator wydatków</span><img src="img portfolio/kalkulator.jpg" class="projectImg" alt="Kalkulator"/></a>
</div>
<span class="text2">Wizytówki:</span>
<div class="projects">
	<a href="firma.html" target="_blank" class="projectTile"><span class="projectName">DREW-LIS</span><img src="img portfolio/drew-lis.jpg" class="projectImg" alt="Drew-Lis"/></a>
	<a href="rostlog.html" target="_blank" class="projectTile"><span class="projectName">RostLog S.C</span><img src="img portfolio/rostlog.jpg" class="projectImg" alt="RostLog"/></a>
    <a href="portfolioalfa.html" target="_blank" class="projectTile"><span class="projectName">Alfa Portfolio</span><img src="img portfolio/alfa.jpg" class="projectImg" alt="Alfa Portfolio"/></a>
    <a href="portfoliobeta.html" target="_blank" class="projectTile"><span class="projectName">Beta Portfolio</span><img src="img portfolio/beta.jpg" class="projectImg" alt="Beta Portfolio"/></a>
</div>`;

const prices = `<span class="text4">Średni koszt strony w 2024:</span>
<span class="text5">„Koszt stworzenia strony internetowej od podstaw może kosztować od 500 zł, jeżeli będziesz tworzyć stronę samodzielnie do 25.000 zł lub więcej 
zlecając stronę w dużej agencji interaktywnej. Średni koszt stworzenia strony internetowej w 2024 r. 
na polskim rynku przez profesjonalnego wykonawcę może wynosić około 4000 do 8000 zł. 
Cena projektu i wdrożenia strony internetowej może znacznie wzrosnąć, jeśli Twój projekt jest niestandardowy i wymaga dedykowanych rozwiązań.”</span>
<span class="text4">U mnie strona kosztuje(zależnie od stopnia skomplikowania) od 1000zł do 2000zł, natomiast najprostsza wizytówkowa od 500zł do 750zł.</br></br>
Do kosztów strony należy wliczyć też hosting(do 300zł) oraz domenę i certyfikat SSL(do 200zł) na rok.</br></br></br>
Wizytówka google jest darmowa, google nie pobiera opłat za założenie i utrzymanie.</br></br>
Opłata jest natomiast za zlecenie optymalizacji i zarządzania taką wizytówką.</span>
<span class="text5">„Działania obejmujące optymalizację i promocję firmy w Google należą do bardziej skomplikowanych, 
dlatego warto rozważyć powierzenie ich fachowcom. Koszt pozycjonowania wizytówki Google Maps zazwyczaj mieści się w przedziale 500-1000 zł.”</span>
<span class="text4">U mnie koszt optymalizacji takiej wizytówki to 100zł, a koszt zarządzania 150zł na miesiąc.</br></br>
Czas współpracy przy wizytówce jest dowolny, działam tak długo jak tylko będzie potrzeba.</span>`

const contact = `<form action="https://formsubmit.co/jacekszymanskifronenddeveloper@gmail.com" method="POST">
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

$("#card").click(function(){
	$("#display").fadeOut(750);
	$("#display").fadeIn(750);
	setTimeout(() => {
		$("#display").html(card);
		document.querySelector('#scrollPoint').scrollIntoView();
	}, 750)
});

$("#cardM").click(function(){
	$("#display").fadeOut(750);
	$("#display").fadeIn(750);
	setTimeout(() => {
		$("#display").html(card);
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
	$("#cardM").click(function(){
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