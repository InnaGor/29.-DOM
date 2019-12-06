
// Создать HTML-страницу со светофором и кнопкой, 
// которая переключает светофор на следующий цвет.
let topCircle = document.getElementById('top'),
    middleCircle = document.getElementById('middle'),
    bottomCircle = document.getElementById('bottom'),
    buttonCC = document.getElementById('button');

buttonCC.onclick = () => {
    if (topCircle.classList.contains('red')) {
        topCircle.classList.remove('red');
        middleCircle.classList.add('yellow');
    } else if (middleCircle.classList.contains('yellow')) {
        middleCircle.classList.remove('yellow');
        bottomCircle.classList.add('green');
    } else {
        bottomCircle.classList.remove('green');
        topCircle.classList.add('red');
    }
}