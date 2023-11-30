const questions = document.querySelector('#questions');
const icon = document.querySelector('#icon');
const answers = document.querySelector('#answers');
const history = document.querySelector('#history');

class Quiz{
    constructor(id, question, answer1, answer2, answer3, answer4, correct){
        this.id = id;
        this.question = question;
        this.answer1 = answer1;
        this.answer2 = answer2;
        this.answer3 = answer3;
        this.answer4 = answer4;
        this.correct = correct;
    }
}

const basicQaA = [
    new Quiz(1, 'Ile to jest 1x1?', 1, 2, 3, 4, 1),
    new Quiz(2, 'Ile to jest 1x2?', 1, 2, 3, 4, 2),
    new Quiz(3, 'Ile to jest 1x3?', 1, 2, 3, 4, 3),
    new Quiz(4, 'Ile to jest 1x4?', 1, 2, 3, 4, 4),
    new Quiz(5, 'Ile to jest 1x5?', 1, 2, 3, 5, 5),
    new Quiz(6, 'Ile to jest 1x6?', 1, 2, 3, 6, 6),
    new Quiz(7, 'Ile to jest 1x7?', 1, 2, 3, 7, 7),
    new Quiz(8, 'Ile to jest 1x8?', 1, 2, 3, 8, 8),
    new Quiz(9, 'Ile to jest 1x9?', 1, 2, 3, 9, 9),
    new Quiz(10, 'Ile to jest 1x10?', 1, 2, 3, 10, 10),
    new Quiz(11, 'Ile to jest 2x1?', 1, 2, 3, 4, 2),
    new Quiz(12, 'Ile to jest 2x2?', 1, 2, 3, 4, 4),
    new Quiz(13, 'Ile to jest 2x3?', 1, 2, 6, 4, 6),
    new Quiz(14, 'Ile to jest 2x4?', 1, 2, 8, 4, 8),
    new Quiz(15, 'Ile to jest 2x5?', 1, 2, 10, 5, 10),
    new Quiz(16, 'Ile to jest 2x6?', 1, 2, 12, 6, 12),
    new Quiz(17, 'Ile to jest 2x7?', 1, 2, 14, 7, 14),
    new Quiz(18, 'Ile to jest 2x8?', 1, 2, 16, 8, 16),
    new Quiz(19, 'Ile to jest 2x9?', 1, 2, 18, 9, 18),
    new Quiz(20, 'Ile to jest 2x10?', 1, 2, 20, 10, 20),
    new Quiz(21, 'Ile to jest 3x1?', 1, 2, 3, 4, 3),
    new Quiz(22, 'Ile to jest 3x2?', 1, 6, 3, 4, 6),
    new Quiz(23, 'Ile to jest 3x3?', 1, 9, 6, 4, 9),
    new Quiz(24, 'Ile to jest 3x4?', 1, 12, 8, 4, 12),
    new Quiz(25, 'Ile to jest 3x5?', 1, 15, 10, 5, 15),
    new Quiz(26, 'Ile to jest 3x6?', 1, 18, 12, 6, 18),
    new Quiz(27, 'Ile to jest 3x7?', 1, 21, 14, 7, 21),
    new Quiz(28, 'Ile to jest 3x8?', 1, 24, 16, 8, 24),
    new Quiz(29, 'Ile to jest 3x9?', 1, 27, 18, 9, 27),
    new Quiz(30, 'Ile to jest 3x10?', 1, 30, 20, 10, 30),
    new Quiz(31, 'Ile to jest 1x0?', 1, 30, 0, 10, 0),
    new Quiz(32, 'Ile to jest 2x0?', 1, 30, 20, 0, 0),
    new Quiz(33, 'Ile to jest 3x0?', 1, 0, 20, 30, 0)
]

const simpleQaA = [
    new Quiz(1, 'Ile to jest 1x1?', 1, 2, 3, 4, 1),
    new Quiz(2, 'Ile to jest 1x2?', 1, 2, 3, 4, 2),
    new Quiz(3, 'Ile to jest 1x3?', 1, 2, 3, 4, 3),
    new Quiz(4, 'Ile to jest 1x4?', 1, 2, 3, 4, 4),
    new Quiz(5, 'Ile to jest 1x5?', 1, 2, 3, 5, 5),
    new Quiz(6, 'Ile to jest 1x6?', 1, 2, 3, 6, 6),
    new Quiz(7, 'Ile to jest 1x7?', 1, 2, 3, 7, 7),
    new Quiz(8, 'Ile to jest 1x8?', 1, 2, 3, 8, 8),
    new Quiz(9, 'Ile to jest 1x9?', 1, 2, 3, 9, 9),
    new Quiz(10, 'Ile to jest 1x10?', 1, 2, 3, 10, 10),
    new Quiz(11, 'Ile to jest 2x1?', 1, 2, 3, 4, 2),
    new Quiz(12, 'Ile to jest 2x2?', 1, 2, 3, 4, 4),
    new Quiz(13, 'Ile to jest 2x3?', 1, 2, 6, 4, 6),
    new Quiz(14, 'Ile to jest 2x4?', 1, 2, 8, 4, 8),
    new Quiz(15, 'Ile to jest 2x5?', 1, 2, 10, 5, 10),
    new Quiz(16, 'Ile to jest 2x6?', 1, 2, 12, 6, 12),
    new Quiz(17, 'Ile to jest 2x7?', 1, 2, 14, 7, 14),
    new Quiz(18, 'Ile to jest 2x8?', 1, 2, 16, 8, 16),
    new Quiz(19, 'Ile to jest 2x9?', 1, 2, 18, 9, 18),
    new Quiz(20, 'Ile to jest 2x10?', 1, 2, 20, 10, 20),
    new Quiz(21, 'Ile to jest 3x1?', 1, 2, 3, 4, 3),
    new Quiz(22, 'Ile to jest 3x2?', 1, 6, 3, 4, 6),
    new Quiz(23, 'Ile to jest 3x3?', 1, 9, 6, 4, 9),
    new Quiz(24, 'Ile to jest 3x4?', 1, 12, 8, 4, 12),
    new Quiz(25, 'Ile to jest 3x5?', 1, 15, 10, 5, 15),
    new Quiz(26, 'Ile to jest 3x6?', 1, 18, 12, 6, 18),
    new Quiz(27, 'Ile to jest 3x7?', 1, 21, 14, 7, 21),
    new Quiz(28, 'Ile to jest 3x8?', 1, 24, 16, 8, 24),
    new Quiz(29, 'Ile to jest 3x9?', 1, 27, 18, 9, 27),
    new Quiz(30, 'Ile to jest 3x10?', 1, 30, 20, 10, 30),
    new Quiz(31, 'Ile to jest 4x1?', 1, 2, 3, 4, 4),
    new Quiz(32, 'Ile to jest 4x2?', 8, 6, 3, 4, 8),
    new Quiz(33, 'Ile to jest 4x3?', 12, 9, 6, 4, 12),
    new Quiz(34, 'Ile to jest 4x4?', 16, 12, 8, 4, 16),
    new Quiz(35, 'Ile to jest 4x5?', 20, 15, 10, 5, 20),
    new Quiz(36, 'Ile to jest 4x6?', 24, 18, 12, 6, 24),
    new Quiz(37, 'Ile to jest 4x7?', 28, 21, 14, 7, 28),
    new Quiz(38, 'Ile to jest 4x8?', 32, 24, 16, 8, 32),
    new Quiz(39, 'Ile to jest 4x9?', 36, 27, 18, 9, 36),
    new Quiz(40, 'Ile to jest 4x10?', 40, 30, 20, 10, 40),
    new Quiz(41, 'Ile to jest 5x1?', 1, 2, 3, 5, 5),
    new Quiz(42, 'Ile to jest 5x2?', 8, 6, 3, 10, 10),
    new Quiz(43, 'Ile to jest 5x3?', 12, 9, 6, 15, 15),
    new Quiz(44, 'Ile to jest 5x4?', 16, 12, 8, 20, 20),
    new Quiz(45, 'Ile to jest 5x5?', 20, 15, 10, 25, 25),
    new Quiz(46, 'Ile to jest 5x6?', 24, 18, 12, 30, 30),
    new Quiz(47, 'Ile to jest 5x7?', 28, 21, 14, 35, 35),
    new Quiz(48, 'Ile to jest 5x8?', 32, 24, 16, 40, 40),
    new Quiz(49, 'Ile to jest 5x9?', 36, 27, 18, 45, 45),
    new Quiz(50, 'Ile to jest 5x10?', 40, 30, 20, 50, 50),
    new Quiz(51, 'Ile to jest 6x1?', 1, 2, 6, 5, 6),
    new Quiz(52, 'Ile to jest 6x2?', 8, 6, 12, 10, 12),
    new Quiz(53, 'Ile to jest 6x3?', 12, 9, 18, 15, 18),
    new Quiz(54, 'Ile to jest 6x4?', 16, 12, 24, 20, 24),
    new Quiz(55, 'Ile to jest 6x5?', 20, 15, 30, 25, 30),
    new Quiz(56, 'Ile to jest 6x6?', 24, 18, 36, 30, 36),
    new Quiz(57, 'Ile to jest 6x7?', 28, 21, 42, 35, 42),
    new Quiz(58, 'Ile to jest 6x8?', 32, 24, 48, 40, 48),
    new Quiz(59, 'Ile to jest 6x9?', 36, 27, 56, 45, 56),
    new Quiz(60, 'Ile to jest 6x10?', 40, 30, 60, 50, 60),
    new Quiz(61, 'Ile to jest 7x1?', 1, 7, 6, 5, 7),
    new Quiz(62, 'Ile to jest 7x2?', 8, 14, 12, 10, 14),
    new Quiz(63, 'Ile to jest 7x3?', 12, 21, 18, 15, 21),
    new Quiz(64, 'Ile to jest 7x4?', 16, 28, 24, 20, 28),
    new Quiz(65, 'Ile to jest 7x5?', 20, 35, 30, 25, 35),
    new Quiz(66, 'Ile to jest 7x6?', 24, 42, 36, 30, 42),
    new Quiz(67, 'Ile to jest 7x7?', 28, 49, 42, 35, 49),
    new Quiz(68, 'Ile to jest 7x8?', 32, 56, 48, 40, 56),
    new Quiz(69, 'Ile to jest 7x9?', 36, 63, 56, 45, 63),
    new Quiz(70, 'Ile to jest 7x10?', 40, 70, 60, 50, 70),
    new Quiz(71, 'Ile to jest 8x1?', 8, 7, 6, 5, 8),
    new Quiz(72, 'Ile to jest 8x2?', 16, 14, 12, 10, 16),
    new Quiz(73, 'Ile to jest 8x3?', 24, 21, 18, 15, 24),
    new Quiz(74, 'Ile to jest 8x4?', 32, 28, 24, 20, 32),
    new Quiz(75, 'Ile to jest 8x5?', 40, 35, 30, 25, 40),
    new Quiz(76, 'Ile to jest 8x6?', 48, 42, 36, 30, 48),
    new Quiz(77, 'Ile to jest 8x7?', 56, 49, 42, 35, 56),
    new Quiz(78, 'Ile to jest 8x8?', 64, 56, 48, 40, 64),
    new Quiz(79, 'Ile to jest 8x9?', 72, 63, 56, 45, 72),
    new Quiz(80, 'Ile to jest 8x10?', 80, 70, 60, 50, 80),
    new Quiz(81, 'Ile to jest 9x1?', 8, 7, 6, 9, 9),
    new Quiz(82, 'Ile to jest 9x2?', 16, 14, 12, 18, 18),
    new Quiz(83, 'Ile to jest 9x3?', 24, 21, 18, 27, 27),
    new Quiz(84, 'Ile to jest 9x4?', 32, 28, 24, 36, 36),
    new Quiz(85, 'Ile to jest 9x5?', 40, 35, 30, 45, 45),
    new Quiz(86, 'Ile to jest 9x6?', 48, 42, 36, 54, 54),
    new Quiz(87, 'Ile to jest 9x7?', 56, 49, 42, 63, 63),
    new Quiz(88, 'Ile to jest 9x8?', 64, 56, 48, 72, 72),
    new Quiz(89, 'Ile to jest 9x9?', 72, 63, 56, 81, 81),
    new Quiz(90, 'Ile to jest 9x10?', 80, 70, 60, 90, 90),
    new Quiz(91, 'Ile to jest 10x1?', 8, 7, 10, 9, 10),
    new Quiz(92, 'Ile to jest 10x2?', 16, 14, 20, 18, 20),
    new Quiz(93, 'Ile to jest 10x3?', 24, 21, 30, 27, 30),
    new Quiz(94, 'Ile to jest 10x4?', 32, 28, 40, 36, 40),
    new Quiz(95, 'Ile to jest 10x5?', 40, 35, 50, 45, 50),
    new Quiz(96, 'Ile to jest 10x6?', 48, 42, 60, 54, 60),
    new Quiz(97, 'Ile to jest 10x7?', 56, 49, 70, 63, 70),
    new Quiz(98, 'Ile to jest 10x8?', 64, 56, 80, 72, 80),
    new Quiz(99, 'Ile to jest 10x9?', 72, 63, 90, 81, 90),
    new Quiz(100, 'Ile to jest 10x10?', 80, 70, 100, 90, 100)
]

const advancedQaA = [
    new Quiz(1, 'Ile to jest 3x10?', 30, 10, 20, 300, 30),
    new Quiz(2, 'Ile to jest 5x10?', 30, 50, 20, 100, 50),
    new Quiz(3, 'Ile to jest 7x9?', 20, 40, 100, 63, 63),
    new Quiz(4, 'Ile to jest 2x12?', 24, 60, 87, 256, 24),
    new Quiz(5, 'Ile to jest 4x15?', 55, 60, 123, 67, 60),
    new Quiz(6, 'Ile to jest 1x100?', 44, 111, 100, 234, 100),
    new Quiz(7, 'Ile to jest 15x2?', 30, 5, 25, 356, 30),
    new Quiz(8, 'Ile to jest 12x12?', 144, 17, 204, 71, 144),
    new Quiz(9, 'Ile to jest 3x6?', 20, '6+6+6', 50, 110, '6+6+6'),
    new Quiz(10, 'Ile to jest 15x20?', 200, 400, 300, 78, 300),
    new Quiz(11, 'Ile to jest 8x9?', 72, 60, 89, 25, 72),
    new Quiz(12, 'Ile to jest 8x8?', 58, 64, 121, 98, 64),
    new Quiz(13, 'Ile to jest 2x2?', 44, 56, 6, 4, 4),
    new Quiz(14, 'Ile to jest 4x4?', 35, 50, 250, 16, 16),
    new Quiz(15, 'Ile to jest 5x5?', 37, 15, 25, 30, 25),
    new Quiz(16, 'Ile to jest 3x3?', 12, 9, 21, 90, 9),
    new Quiz(17, 'Ile to jest 6x6?', 25, 41, 36, 42, 36),
    new Quiz(18, 'Ile to jest 7x7?', 47, 49, 88, 102, 49),
    new Quiz(19, 'Ile to jest 9x9?', 59, 66, 81, 67, 81),
    new Quiz(20, 'Ile to jest 10x10?', 48, 100, 120, 200, 100),
    new Quiz(21, 'Ile to jest 25x3?', 40, 55, 250, 75, 75),
    new Quiz(22, 'Ile to jest 25x10?', 70, 85, 255, 250, 250),
    new Quiz(23, 'Ile to jest 25x4?', 60, 80, 25, '25+25+25+25', '25+25+25+25'),
    new Quiz(24, 'Ile to jest 20x5?', '20+20', 65, 240, '20+20+20+20+20', '20+20+20+20+20'),
    new Quiz(25, 'Ile to jest 2x2?', 70, '2+2', 28, 120, '2+2'),
    new Quiz(26, 'Ile to jest 3x3?', 50, '3+3+3', 48, 170, '3+3+3'),
    new Quiz(27, 'Ile to jest 4x4?', 90, 550, '4+4+4+4', 45, '4+4+4+4'),
    new Quiz(28, 'Ile to jest 5x5?', 40, '5+5+5+5+5', 55, 90, '5+5+5+5+5'),
    new Quiz(29, 'Ile to jest 6x6?', 10, 555, '3x12', 124, '3x12'),
    new Quiz(30, 'Ile to jest 7x7?', 50, 100, 47, '5x7+14', '5x7+14'),
    new Quiz(31, 'Ile to jest 8x8?', 75, 125, 60, '4x8 + 4x8', '4x8 + 4x8'),
    new Quiz(32, 'Ile to jest 9x9?', 90, '9x7+18', 28, 12, '9x7+18'),
    new Quiz(33, '10x10 to 5x10 +?', '2x10', '3x10', '5x10', '8x10', '5x10'),
    new Quiz(34, '11x11 to 100 +?', 45, 55, 29, 11, 11),
    new Quiz(35, '11x11 to 100 +?', '2x11', '1x11', 22, 33, '1x11'),
    new Quiz(36, 'Ile to jest 2x3?', 2, 3, 6, 9, 6),
    new Quiz(37, 'Ile to jest 2x2?', 70, '2+2', 28, 120, '2+2'),
    new Quiz(38, 'Ile to jest 2x0?', 1, 2, 0, 4, 0),
    new Quiz(39, 'Ile to jest 4x6?', 70, '2+2', 24, 1200, 24),
    new Quiz(40, 'Ile to jest 6x9?', 90, '3+3', 29, 54, 54),
    new Quiz(41, 'Ile to jest 8x4?', 80, '4+4', 88, 32, 32),
    new Quiz(42, 'Ile to jest 2x9?', 50, '7+8', 18, 12, 18),
    new Quiz(43, 'Ile to jest 3x7?', 21, '3+3', 28, 34, 21),
    new Quiz(44, 'Ile to jest 4x7?', 28, '5+7', 56, 120, 28),
    new Quiz(45, 'Ile to jest 6x5?', 30, 100, 39, 40, 30),
    new Quiz(46, 'Ile to jest 2x7?', 90, 14, 28, 45, 14),
    new Quiz(47, 'Ile to jest 5x8?', 50, '10+20', 40, 75, 40),
    new Quiz(48, 'Ile to jest 9x3?', 25, '22+10', 38, 27, 27),
    new Quiz(49, 'Ile to jest 8x10?', 80, 100, 48, 120, 80),
    new Quiz(50, 'Ile to jest 3x150?', 400, '5+70', 280, 450, 450)
]

let good = 0;
let bad = 0;

function load(arr, count){
    let random = Math.floor(Math.random() * count) + 1;
    return arr.filter((item) =>{
        if(item.id === random){
            questions.innerHTML = item.question;
            let answer1 = document.createElement("button");
            let answer2 = document.createElement("button");
            let answer3 = document.createElement("button");
            let answer4 = document.createElement("button");
            answer1.setAttribute("class", "answer");
            answer2.setAttribute("class", "answer");
            answer3.setAttribute("class", "answer");
            answer4.setAttribute("class", "answer");
            answers.appendChild(answer1);
            answers.appendChild(answer2);
            answers.appendChild(answer3);
            answers.appendChild(answer4);
            answer1.innerHTML = item.answer1;
            answer2.innerHTML = item.answer2;
            answer3.innerHTML = item.answer3;
            answer4.innerHTML = item.answer4;
            $(".answer").click(function(e){
                let height = history.scrollHeight;
                history.scrollTo(0, height);
                let element = e.target.innerHTML;
                if(element == item.correct){
                    icon.innerHTML = '<img src="icons/happiness.png">';
                    good = good + 1;
                    $('#good').html('Dobre: ' + good);
                    let ol = document.createElement('ol');
                    history.appendChild(ol);
                    ol.innerHTML = item.question + ' (' + item.correct + ')';
                    $('.answer').addClass('prevent-click');
                }else{
                    icon.innerHTML = '<img src="icons/sad.png">';
                    bad = bad + 1;
                    $('#bad').html('Złe: ' + bad);
                    let ol = document.createElement('ol');
                    history.appendChild(ol);
                    ol.style = 'color:red';
                    ol.innerHTML = item.question + ' (' + element + ')';
                }
            });
        }
    })
}

let basicStatus = null;
let simpleStatus = null;
let advancedStatus = null;

function start(){
    questions.innerHTML = "Jaki Quiz chcesz rozegrać?";
    const basic = document.createElement('button');
    const simple = document.createElement('button');
    const advanced = document.createElement('button');
    basic.setAttribute('id', 'basic');
    simple.setAttribute('id', 'simple');
    advanced.setAttribute('id', 'advanced');
    basic.setAttribute('class', 'answer');
    simple.setAttribute('class', 'answer');
    advanced.setAttribute('class', 'answer');
    basic.innerHTML = 'Podstawowy Quiz';
    simple.innerHTML = 'Prosty Quiz';
    advanced.innerHTML = 'Zaawansowany Quiz';
    answers.appendChild(basic);
    answers.appendChild(simple);
    answers.appendChild(advanced);
    basic.addEventListener('click', () =>{
        answers.innerHTML = '';
        basicStatus = 1;
        load(basicQaA, 33);
    })
    simple.addEventListener('click', () =>{
        answers.innerHTML = '';
        simpleStatus = 1;
        load(simpleQaA, 100);
    })
    advanced.addEventListener('click', () =>{
        answers.innerHTML = '';
        advancedStatus = 1;
        load(advancedQaA, 50);
    })
}

window.addEventListener('load', () => {
    start();
})

$("#btn").click(function(){
    let iconStatus = '<img src="icons/happiness.png">';
    let htmlStatus = icon.innerHTML;
    if(iconStatus == htmlStatus && basicStatus === 1){
        icon.innerHTML = '';
        answers.innerHTML = '';
        load(basicQaA, 33);
    }
    else if(iconStatus == htmlStatus && simpleStatus === 1){
        icon.innerHTML = '';
        answers.innerHTML = '';
        load(simpleQaA, 100);
    }
    else if(iconStatus == htmlStatus && advancedStatus === 1){
        icon.innerHTML = '';
        answers.innerHTML = '';
        load(advancedQaA, 50);
    }
});