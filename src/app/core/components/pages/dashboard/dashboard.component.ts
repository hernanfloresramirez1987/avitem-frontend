import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ChartModule } from 'primeng/chart';
import { HomeCard } from '../home/home.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ChartModule, RouterLink, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export default class DashboardComponent {
  homeCards: HomeCard[] = [
    {
      titulo: 'Panel de Control',
      descripcion: 'Vista general con KPIs, estadísticas y resumen de operaciones de Avitem Importaciones.',
      icon: 'pi pi-chart-bar',
      color: '#22c55e',
      link: '/dashboard'
    },
    {
      titulo: 'Productos',
      descripcion: 'Gestión de inventario: insumos, materiales y productos importados y almacenados.',
      icon: 'pi pi-truck',
      color: '#3b82f6',
      link: '/inventory/products'
    },
    {
      titulo: 'Compras',
      descripcion: 'Control de órdenes de compra, proveedores y gestión de pagos.',
      icon: 'pi pi-shopping-cart',
      color: '#ef4444',
      link: '/transactions/compras'
    },
    {
      titulo: 'Ventas',
      descripcion: 'Análisis de transacciones, clientes y métricas comerciales.',
      icon: 'pi pi-credit-card',
      color: '#facc15',
      link: '/transactions/ventas'
    },
    {
      titulo: 'Inventarios',
      descripcion: 'Gestión detallada de almacenes, niveles de stock y ubicaciones.',
      icon: 'pi pi-server',
      color: '#10b981',
      link: '/inventory/inventory'
    },
    {
      titulo: 'Clientes',
      descripcion: 'Gestión de clientes, contactos, historial y ventas.',
      icon: 'pi pi-id-card',
      color: '#14b8a6',
      link: '/users/clientes'
    },
    {
      titulo: 'Proveedores',
      descripcion: 'Gestión de proveedores, contactos y evaluaciones de desempeño.',
      icon: 'pi pi-users',
      color: '#8b5cf6',
      link: '/users/proveedores'
    },
    {
      titulo: 'Empleados',
      descripcion: 'Administración del personal, roles y accesos.',
      icon: 'pi pi-users',
      color: '#f97316',
      link: '/users/empleados'
    },
    {
      titulo: 'Reportes',
      descripcion: 'Análisis detallados y reportes para facilitar la toma de decisiones.',
      icon: 'pi pi-file',
      color: '#fdba74',
      link: '/reports'
    },
    {
      titulo: 'Configuración',
      descripcion: 'Ajusta parámetros del sistema, usuarios y preferencias de Avitem Importaciones.',
      icon: 'pi pi-cog',
      color: '#a78bfa',
      link: '/configuracion'
    }
  ];
}
