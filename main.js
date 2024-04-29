let = listaSpesa [
    "pomodori", "limone",
    "arachidi", "noci",
    "merendine"
];


for (let i = 0; i < listaSpesa.length; i++) {
    console.log(listaSpesa [i])
}

let i = 0

while (i < listaSpesa.length) {
    console.log(listaSpesa [i])
}


const ul = document.getElementById("listaSpesa");
let b = 0

while (b < listaSpesa.length) {
    const li = document.createElement("li;");
    li.textContent = listaSpesa[b];
    ul.appendChild(li);
    b++
    
}

