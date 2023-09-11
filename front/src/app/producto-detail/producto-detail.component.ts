import { Component, Input } from '@angular/core';
import { Producto } from '../producto/producto';



@Component({
  selector: 'app-producto-detail',
  templateUrl: './producto-detail.component.html',
  styleUrls: ['./producto-detail.component.sass']
})
export class ProductoDetailComponent {

  @Input() selectedProducto?: Producto;
}
