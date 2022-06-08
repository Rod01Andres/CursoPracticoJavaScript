const lista = [
    100,
    200,
    500,
    10000000
];

const mitadLista = parseInt(lista.length /2);

function esPar(numero){
    if(numero % 2 === 0){
        return true;
    } else{
        return false;
    }
}

function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    )

    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}

let mediana;

if(esPar(lista.length)){
    const elemento1 = lista[mitadLista - 1];
    const elemento2 = lista[mitadLista];

    const promedio = calcularMediaAritmetica([elemento1,elemento2]);

    mediana = promedio;
    

} else{
    mediana = lista[mitadLista];
}