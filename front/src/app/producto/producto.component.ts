import { Component } from '@angular/core';
import { Producto } from './producto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.sass']
})
export class ProductoComponent {


  selectedProducto: Producto = {
    id: 1,
    nombre: 'Teclado',
    descripcion: 'rgb led',
    image: 'url',
  };

}
