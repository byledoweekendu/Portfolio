class Password{
    constructor(id, password){
        this.id = id;
        this.password = password;
    }
}

const passwords = [
    new Password(1, 'PLECAK'),
    new Password(2, 'SPODNIE'),
    new Password(3, 'KOSZULA'),
    new Password(4, 'TRAWA'),
    new Password(5, 'TALERZ'),
    new Password(6, 'WIDELEC'),
    new Password(7, 'ŁYŻKA'),
    new Password(8, 'MATEMATYKA'),
    new Password(9, 'BIOLOGIA'),
    new Password(10, 'KATECHETA'),
    new Password(11, 'PRZERWA'),
    new Password(12, 'INTERNET'),
    new Password(13, 'TELEFON'),
    new Password(14, 'KOMPUTER'),
    new Password(15, 'LAPTOP'),
    new Password(16, 'ŁÓŻKO'),
    new Password(17, 'POŚCIEL'),
    new Password(18, 'MONITOR'),
    new Password(19, 'MYSZKA'),
    new Password(20, 'KLAWIATURA'),
    new Password(21, 'DRUKARKA'),
    new Password(22, 'SUSZARKA'),
    new Password(23, 'PRALKA'),
    new Password(24, 'ZLEW'),
    new Password(25, 'GARNEK'),
]

function game(arr, count){
    let random = Math.floor(Math.random() * count) + 1;
    $("#image").html("<img src='icons/smile.png'>");
    const password = document.querySelector('#password');
    return arr.filter((item) =>{
        if(item.id === random){
            let currentPassword = item.password;
            let badClicks = 0;
            let isPasswordFull = [];
            for (let i=0; i<currentPassword.length; i++) {
                const span = document.createElement('span');
                span.setAttribute('id', i);
                password.appendChild(span);
            }
            $("#show").click(function(){
                alert(currentPassword);
            });
            $(".btn").click(function(e){
                let clicked = e.target.innerHTML;
                let button = e.target;
                let target = document.querySelectorAll('span');
                for(let i=0; i<currentPassword.length; i++) {
                if (currentPassword[i] === clicked){
                    target[i].innerHTML = clicked;
                    isPasswordFull.push(target[i].innerHTML);
                    if(isPasswordFull.length === currentPassword.length){
                        setTimeout(() => {
                            alert('Wygrana!');
                            window.location.reload();
                        }, 1000);
                    }
                }
                }
                if(currentPassword.search(clicked) !== -1){
                    button.style = 'color:green';
                    button.disabled = true;
                }else{
                    button.style = 'color:red';
                    button.disabled = true;
                    badClicks += 1;
                }
                if(badClicks === 1){
                    $("#image").html("<img src='icons/smiling.png'>");
                }
                if(badClicks === 2){
                    $("#image").html("<img src='icons/serious.png'>");
                }
                if(badClicks === 3){
                    $("#image").html("<img src='icons/rlyserious.png'>");
                }
                if(badClicks === 4){
                    $("#image").html("<img src='icons/dissapointment.png'>");
                }
                if(badClicks === 5){
                    $("#image").html("<img src='icons/scared.png'>");
                }
                if(badClicks === 6){
                    $("#image").html("<img src='icons/rlyscared.png'>");
                }
                if(badClicks === 7){
                    $("#image").html("<img src='icons/dead.png'>");
                    setTimeout(() => {
                        alert('Koniec gry!');
                        alert(currentPassword);
                        window.location.reload();
                    }, 1000);
                }
            });
        }
    })
}

game(passwords, 25);
	
$("#reset").click(function(){
    window.location.reload();
});