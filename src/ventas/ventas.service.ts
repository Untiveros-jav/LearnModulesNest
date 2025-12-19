import { Injectable } from '@nestjs/common';

@Injectable()
export class VentasService {
    private ventas = [
        { id: 1, item: 'Producto A', cantidad: 10, precio: 100 },
        { id: 2, item: 'Producto B', cantidad: 5, precio: 200 },
        { id: 3, item: 'Producto C', cantidad: 2, precio: 500 },
    ];

    getVentas() {
        return this.ventas;
    }
}
