let div = document.createElement('div')
document.body.appendChild(div);
let btnS = document.createElement('a');
let btnE = document.createElement('a');
btnS.innerText = 'Start';
btnE.innerText = 'End';
let p = createElement('p');
p.setAttribute('id', 'demo');
div.appendChild(p);
div.appendChild(btnS);
div.appendChild(btnE);
btnS.setAttribute('href', '#');
btnE.setAttribute('href', '#');
btnS.setAttribute('class', 'btn btn-primary');
btnE.setAttribute('class', 'btn btn-danger');
div.style.display ='flex';
div.style.justifyContent ="center";
div.style.alignItems ="center";
div.style.height ="100vh";
btnS.addEventListener('click', displayTime);
function displayTime(){
    var myVar = setInterval(myTimer, 1000);

}
btnE.addEventListener('click', endTime);
function endTime(){
    var d = new Date();
    document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}