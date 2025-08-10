import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TableModule, CardModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export default class HomeComponent {
  empleados = [
    { id: 1, nombre: 'Juan Perez' },
    { id: 2, nombre: 'Maria Lopez' },
  ];
  proveedores = [
    { id: 1, nombre: 'Proveedor A' },
    { id: 2, nombre: 'Proveedor B' },
  ];
  clientes = [
    { id: 1, nombre: 'Cliente X' },
    { id: 2, nombre: 'Cliente Y' },
  ];

  almacenes = [
    { id: 1, nombre: 'Almacén Central' },
    { id: 2, nombre: 'Almacén Sur' },
  ];

  productos = [
    { id: 1, nombre: 'Producto 1' },
    { id: 2, nombre: 'Producto 2' },
  ];

  compras = [
    { id: 1, fecha: '2025-08-10', proveedor: 'Proveedor A' },
  ];

  ventas = [
    { id: 1, fecha: '2025-08-09', cliente: 'Cliente X' },
  ];

  inventarios = [
    { almacen: 'Almacén Central', producto: 'Producto 1', cantidad: 100 },
    { almacen: 'Almacén Sur', producto: 'Producto 2', cantidad: 50 },
  ];

  verEmpleados() {
    // Aquí puedes redirigir a la página de empleados
  }
  verProveedores() {}
  verClientes() {}
  verAlmacenes() {}
  verProductos() {}
  verCompras() {}
  verVentas() {}
}
