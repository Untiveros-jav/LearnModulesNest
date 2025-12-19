import { Controller, Get } from '@nestjs/common';
import { VentasService } from './ventas.service';

@Controller()
export class VentasController {

    constructor(private ventasService: VentasService) { }

    @Get('/venta')
    getInforme() {
        return this.ventasService.getVentas();
    }
}
