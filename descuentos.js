function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - (descuento*1);
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

function OnClickButtonDiscount(){
    const PriceIn = document.getElementById("InputPrice");
    const Price = PriceIn.value;

    const DiscountIn = document.getElementById("InputDiscount");
    const Discount = DiscountIn.value;

    const precioConDescuento = calcularPrecioConDescuento(Price, Discount);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}