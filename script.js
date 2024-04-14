let plus=document.getElementById("plus");
let minus=document.querySelector("#minus");
let containerNote = document.querySelector(".container-note");
let index=3;
var noteImput = document.getElementsByClassName("note-imput");

let rezRotunjit = document.getElementById("rezRotunjit");
var rezNerotunjit = document.getElementById("rezNerotunjit");

let noteImputArray = Array.from(noteImput);

let notaTeza = document.getElementById("notaTeza");
let formTeza = document.getElementById("formTeza");
let teza = document.getElementById("teza");
let valDeAdevarTeza = true;

plus.addEventListener("click", ()=>{
    let div = document.createElement("div");
    div.className += "note";
    containerNote.appendChild(div);
    let nrNote = document.createElement("h4");
    index++;
    nrNote.textContent = `Nota ${index}`;
    div.appendChild(nrNote);
    let input = document.createElement("input");
    input.type = "number";
    input.className += "note-imput";
    input.value = 10;
    input.addEventListener('input', updateSum);
    div.appendChild(input);
    
    noteImputArray.push(input);
    console.log(noteImputArray);
})

minus.addEventListener("click", ()=>{
    if(index!=0){
        index--;
        containerNote.lastElementChild.remove();
        // updateSum(); 
        noteImputArray.pop(); 
    }
   
})



noteImputArray.forEach(function(noteImputArray) {
    noteImputArray.addEventListener('input', updateSum);
});
teza.addEventListener('input', updateSum);

function updateSum() {
    var sum = 0;
    var valTeza = parseInt(teza.value);
    noteImputArray.forEach(function(noteImputArray) {
        var num = parseFloat(noteImputArray.value) || 0;
        sum += num;
    });
    console.log(index);
    if(valDeAdevarTeza === true){
        rezNerotunjit.textContent = ((sum/index)*3+valTeza)/4;
        rezRotunjit.textContent = Math.round(((sum/index)*3+valTeza)/4);
    }else{ 
        rezNerotunjit.textContent = sum/index;
        rezRotunjit.textContent = Math.round(sum/index);
    }
}

function cuTeza(){
    formTeza.style.marginBottom = "50px";
    notaTeza.style.display = "flex";
    valDeAdevarTeza = true;
    teza.addEventListener('input', updateSum);
}

function faraTeza(){
    notaTeza.style.display = "none";
    formTeza.style.marginBottom = "150px";
    valDeAdevarTeza = false;
}
