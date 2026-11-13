const tablas=()=>{
let n=parseInt(document.querySelector("#numero").value);
document.querySelector("#num").innerHTML =`<b>${n}</b>`;
let tabla = "";
document.querySelector("#res").innerHTML = '<img src="./IMG/five-colors-spinner.gif">';
setTimeout(() => {
for(let i = 1; i <= 10; i++){
tabla += `${n} x ${i} = ${n*i}<br>`;
}
document.querySelector("#tablita").innerHTML =`<b>${tabla}</b>`;
document.querySelector("#res").innerHTML = "";
}, 800);
}
const reset=()=>{
    document.querySelector("#numero").value = 1;
    document.querySelector("#num").innerHTML = "1";
    document.querySelector("#tablita").innerHTML = "0";
    document.querySelector("#res").innerHTML = "";
}