
let temporizadorSpinner;

const calcular = () => {
    let peso = parseFloat(document.querySelector("#peso").value);
    let altura = parseFloat(document.querySelector("#altura").value);
    document.querySelector("#numPeso").innerHTML = peso + " KG";
    document.querySelector("#numAltura").innerHTML = altura + " CM";

    let metros = altura / 100;
    let imc = peso / (metros * metros);
    let resultado = imc.toFixed(2);
    let posicion;

    if (imc < 18.5) {
        posicion = 1;
    } else if (imc < 25) {
        posicion = 2;
    } else if (imc < 30) {
        posicion = 3;
    } else if (imc < 35) {
        posicion = 4;
    } else if (imc < 40) {
        posicion = 5;
    } else {
        posicion = 6;
    }

    document.querySelector("#IMC").innerHTML ='<img src="IMG/five-colors-spinner.gif" width="40" height="40" alt="Cargando...">';
    clearTimeout(temporizadorSpinner);
    temporizadorSpinner = setTimeout(() => {
        document.querySelector("#IMC").innerHTML = "IMC: " + resultado;
        let rectangulos = document.querySelectorAll(".color");
        rectangulos.forEach(rectangulo => { rectangulo.classList.remove("activo");  });
        let seleccionado = rectangulos[posicion - 1];
        if (seleccionado) {
            seleccionado.classList.add("activo");
        }
    }, 500);
};

const reset = () => {
    clearTimeout(temporizadorSpinner);
    document.querySelector("#peso").value = 1;
    document.querySelector("#altura").value = 100;
    document.querySelector("#numPeso").innerHTML = "1 KG";
    document.querySelector("#numAltura").innerHTML = "1 CM";
    document.querySelector("#IMC").innerHTML = "";
    document.querySelectorAll(".color").forEach(rectangulo => {  rectangulo.classList.remove("activo"); });
};
