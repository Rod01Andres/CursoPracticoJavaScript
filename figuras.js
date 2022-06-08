// Código del cuadrado
console.group("Cuadrados");

function perimetroCuadrado(lado){
    return lado * 4;
}

function areaCuadrado(lado){
    return lado * lado;
}

console.groupEnd();

// Código del triángulo
console.group("Triángulos");

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura){
    return (base * altura)/2;
}

console.groupEnd();

// Código del circulo
console.group("Círculos");

const PI = Math.PI;

function diametroCirculo(radio){
    return radio * 2;
}

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo(radio){
    return (radio * radio) * PI;
}

console.groupEnd();

// HTML
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);

    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);

    alert(area);
}

function calcularPerimetroTriangulo(){
    const in1 = document.getElementById("Lado1");
    const v1 = in1.value *1;

    const in2 = document.getElementById("Lado2");
    const v2 = in2.value *1;

    const in3 = document.getElementById("Base");
    const v3 = in3.value *1;

    const perimetro = perimetroTriangulo(v1, v2, v3);

    alert(perimetro);
}

function calcularAreaTriangulo(){
    const in1 = document.getElementById("Altura");
    const altura = in1.value;

    const in3 = document.getElementById("Base");
    const base = in3.value;

    const area = areaTriangulo(base, altura);

    alert(area);
}

function calcularDiametroCirculo(){
    const input = document.getElementById("Radio");
    const value = input.value;

    const diametro = diametroCirculo(value);

    alert(diametro);
}

function calcularPerimetroCirculo(){
    const input = document.getElementById("Radio");
    const value = input.value;

    const perimetro = perimetroCirculo(value);

    alert(perimetro);
}

function calcularAreaCirculo(){
    const input = document.getElementById("Radio");
    const value = input.value;

    const area = areaCirculo(value);

    alert(area);
}