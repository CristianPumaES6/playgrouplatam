import { Component } from '@angular/core';
import { Producto } from '../producto/producto';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.sass']
})
export class ProductosComponent {

  productos = PRODUCTOS;
  selectedProducto?: Producto;
  
onSelect(producto: Producto): void {
  this.selectedProducto = producto;
}

}
export const PRODUCTOS: Producto[] = [
  {
    id: 1,
    nombre: 'Teclado',
    descripcion: 'rgb led',
    image: 'url',
  }, {
    id: 2,
    nombre: 'Mous',
    descripcion: 'rgb led',
    image: 'url',
  }, {
    id: 3,
    nombre: 'Monitor',
    descripcion: 'rgb led',
    image: 'url',
  }

];