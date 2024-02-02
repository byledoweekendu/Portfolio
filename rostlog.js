//Slajder:	
			var timer1 = 0;
			var timer2 = 0;
			var nrImg = 1;

			function setImg()
			{
				clearTimeout(timer1);
				clearTimeout(timer2);
				
				hide();
				setTimeout("changeImg()", 1000);
			}
			
			function hide()
			{
				$("#photos").fadeOut(1000);
			}
		
			function changeImg()
			{
                if (nrImg > 8) nrImg = 1;

                $("#photos").html("<img src='zdjecia/baner" + nrImg + ".jpg' class='photo'>");

                nrImg ++;

				$("#photos").fadeIn(1000);

				const photos = document.querySelector("#photos");
				const styles = {display: "flex", justifyContent: "center", alignItems: "center"};
				Object.assign(photos.style, styles);
				
				timer1 = setTimeout("changeImg()", 5500);
				timer2 = setTimeout("hide()", 4500);
			}

//

//Funkcje:
setTimeout(() => {
	setImg();
}, 5000);
//

//Menu mobilne:
const list = document.querySelector('#list');

$("#burger").click(function(){
    let display = window.getComputedStyle(list).display;
    if(display === "none"){
        Object.assign(list.style,{display:"flex"});
    }else{
        Object.assign(list.style,{display:"none"});
    }
});

$("#main").click(function(){
    Object.assign(list.style,{display:"none"});
});
$("#company").click(function(){
    Object.assign(list.style,{display:"none"});
});
$("#vehicles").click(function(){
    Object.assign(list.style,{display:"none"});
});
$("#contact").click(function(){
    Object.assign(list.style,{display:"none"});
});
//