let plus=document.getElementById("plus");
let minus=document.querySelector("#minus");
//let nrNota=document.querySelector(".numar");
//let nota=document.querySelector(".nota");
let rezultat=document.querySelector("#rezultat");
let index=3;

let table=document.querySelector("#table");

function add(){ 
    index++;
    let tr=document.createElement("span");
    table.appendChild(tr);
    tr.classList.add("span");
    let nrNote=document.createElement("span");
    tr.appendChild(nrNote);
    nrNote.innerHTML="Nota"+index;
    let note=document.createElement("span");
    note.innerHTML="ha";
    tr.appendChild(note);
    
    

}
