



function go() {
    let uval = parseInt(document.getElementById("your-entry").value); // Parse the input value as an integer
    let rand = Math.floor(Math.random() * 7);
    document.getElementById("computer").textContent = rand;
    let temp;
    if (uval != rand) {
        temp = parseInt(document.getElementById("runs").textContent); // Parse the runs as an integer
        temp += uval;
        document.getElementById("runs").textContent = temp;
    } else {
        temp = parseInt( document.getElementById("wicket").textContent); // Parse the wickets as an integer
        temp += 1;
        document.getElementById("wicket").textContent = temp;
    }
}

function reset(){
    document.getElementById("computer").textContent = "--";
    document.getElementById("runs").textContent = 0;
    document.getElementById("wicket").textContent = 0;
}


