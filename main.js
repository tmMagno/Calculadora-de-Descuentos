//entrada de datos

let consumo = Number(prompt('Ingrese el Total'));
let descuento, datoDescuento;

//Aplicacion de descuento

if(consumo <= 1000){
    //10% de descuento en compras menores a $1000
    datoDescuento = '10%';
    descuento = consumo * 0.10;
}else if (consumo > 1000 && consumo <= 2500){
    //20% de descuento en compras mayores a $1000
    datoDescuento = '20%';
    descuento = consumo * 0.20;
}else if(consumo > 2500){
    //30% de descuento en compras mayores a $2500
    datoDescuento = '30%';
    descuento = consumo * 0.30;
}

let montoDescuento = consumo - descuento;
let iva = montoDescuento * 0.21;
let totalPagar = montoDescuento + iva;

//Salida por pantalla 
document.write(`<pre> 
    Consumo             : $ ${consumo}
    Descuento de        :   ${datoDescuento}
    Descuento           : $ ${descuento}
    Total con Descuento : $ ${montoDescuento}
    IVA%                : $ ${iva}        | 21%
    Total a Pagar       : $ ${totalPagar}
</pre>`)