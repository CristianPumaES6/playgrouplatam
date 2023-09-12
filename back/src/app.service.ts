import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Proyecto "Productos", Por Cristian A. Puma Villalva para playgroundlatam';
  }
}
