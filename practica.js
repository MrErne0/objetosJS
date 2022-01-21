/*
Definan 2 objetos para modelar el proceso de compra de una plataforma de comercio electrónico:

Artículo: representa el producto que se está comprando y tiene los siguientes atributos:
nombre
descripción
precio
cantidad
fotografía URL
Venta: representa una instancia de venta y tiene los siguientes atributos
artículos (lista de artículos)
total
ID del cliente
correo electrónico del cliente

Implementen los objetos Artículo y Venta usando JavaScript.*/

let articulo ={
    nombre:"Dona",
    descripcion:"chocolate con chispas gluten free",
    precio: 50,
    cantidad:5,
    fotografia:"https://www.nestleprofessional.com.mx/sites/default/files/styles/recipe/public/media/mini_donas_crunch.jpg?itok=xmWJdmGc"
}

let venta ={
    productos:{pan:"dona",},
    total: articulo.cantidad * articulo.precio,
    idCliente:1515,
    emailCliente:"idCliente1515@gmail.com"
}

// console.log("Adquirio "+ articulo.nombre +" Vendido  a "+ venta.idCliente + " numero de pizas "+ articulo.cantidad + "El total de su compra es "+ venta.total);

console.log("Adquirió "+ articulo.cantidad + " "+articulo.nombre + " vendida a cliente no. "+ venta.idCliente + " total a pagar "+ venta.total);
