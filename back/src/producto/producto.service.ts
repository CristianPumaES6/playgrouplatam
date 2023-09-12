import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';

@Injectable()
export class ProductoService {

  PRODUCTOS: UpdateProductoDto[] = [
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

  create(createProductoDto: CreateProductoDto) {

    
    return 'This action adds a new producto';
  }

  findAll() {
    return {
        status: HttpStatus.OK,
        message: 'OK',
        data: this.PRODUCTOS
    };
  }

  findOne(id: number) {
    return `This action returns a #${id} producto`;
  }

  update(id: number, updateProductoDto: UpdateProductoDto) {
    return `This action updates a #${id} producto`;
  }

  remove(id: number) {
    return `This action removes a #${id} producto`;
  }
}
