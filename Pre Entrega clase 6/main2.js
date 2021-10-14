let prodId = 0;
class Producto{
    constructor(tipo, marca, precio, talle, año, color){
        this.tipo =  tipo;
        this.marca =  marca;
        this.precio =  parseFloat(precio);
        this.talle = talle;
        this.año =  año;
        this.color = color;
        this.id = prodId;
        this.vendido = false;
        }  
        showDetail(){
            return "Tipo de producto: " + this.tipo + ", Marca: " + this.marca +  ", Precio: " + this.precio + ", Talle: " + this.talle + ", Año: " + this.año + ", Color: " + this.color
        }
}
let productos = [];
for(let i = 0; i <= 4; i++){
    let prod = prompt("Ingrese el tipo de producto")
    let prodmarca = prompt("Ingrese la marca del producto")
    let prodprecio = prompt("Ingrese el precio del producto")
    let prodtalle = prompt("Ingrese el talle del producto")
    let prodaño = prompt("Ingrese el año del producto")
    let prodcolor = prompt("Ingrese el color del producto")

    alert("A continuación, ingrese los datos de un nuevo producto:")
    productos.push(new Producto(prod, prodmarca, prodprecio, prodtalle, prodaño, prodcolor))
    prodId = prodId +1
}

/* 
AGREGADO nº 1 PARA PRE-ENTREGA CLASE 6 */

sumaIva(){
    this.precio = this.precio * 1.21;
}

vender(){
    this.vendido = true;
}

/* AQUI FINALIZA */

for(let i = 0; i < productos.length; i++){
    console.log(productos[i].showDetail())
}


/* 
AGREGADO nº 2 PARA PRE-ENTREGA CLASE 6 */

const producto1 = new Producto ("campera", "Levis", "12000", "M", "2015", "Jean");
const producto2 = new Producto ("sweater", "Versace", "8000", "M", "2018", "Azul");
const producto3 = new Producto ("sweater", "Versace", "10000", "L", "2020", "negro");
const producto2 = new Producto ("botas", "D&G", "20000", "36", "2017", "Negro");

producto1.sumaIva();
producto2.sumaIva();
producto1.vender();
producto2.vender();


/* AQUI FINALIZA */