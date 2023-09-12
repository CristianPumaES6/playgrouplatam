import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductoService } from './producto.service';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';

@Controller('producto')
export class ProductoController {
  constructor(private readonly productoService: ProductoService) {}

  @Post()
  create(@Body() createProductoDto: CreateProductoDto) {
    return this.productoService.create(createProductoDto);
  }

  // Retornamos todos los productos
  @Get()
  findAll() {
    return this.productoService.findAll();
  }

  // Retornamos por id
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productoService.findOne(+id);
  }

  // Actualizamos un producto
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductoDto: UpdateProductoDto) {
    return this.productoService.update(+id, updateProductoDto);
  }

  // Eliminamos un porducto
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productoService.remove(+id);
  }
}
