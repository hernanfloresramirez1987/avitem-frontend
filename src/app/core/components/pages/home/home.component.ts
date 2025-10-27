import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { ChartModule } from 'primeng/chart';
import { ChartOptions } from 'chart.js';
import { ButtonModule } from 'primeng/button';

export interface HomeCard {
  titulo: string;
  descripcion: string;
  icon: string;
  color: string;
  link: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TableModule, ButtonModule, CardModule, AvatarModule, AvatarGroupModule, CommonModule, ChartModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export default class HomeComponent {
  stats = [
    { 
      label: 'Productos en Stock Crítico', 
      porcent: "5%", 
      value: 5, 
      icon: 'pi-exclamation-triangle', // icono de alerta
      color: 'text-red-500', 
      image: '/demo/images/dashboard/danger.svg' 
    },
    { 
      label: 'Ventas sin Factura', 
      porcent: "79.4%", 
      value: 4, 
      icon: 'pi-ban', // icono de prohibido / pendiente
      color: 'text-yellow-500', 
      image: '/demo/images/dashboard/warning.svg' 
    },
    { 
      label: 'Ventas con Factura', 
      porcent: "20.6%", 
      value: 6, 
      icon: 'pi-file', // icono de documento
      color: 'text-green-500', 
      image: '/demo/images/dashboard/success.svg' 
    },
    { 
      label: 'Total Productos Vendidos', 
      porcent: "100%", 
      value: 440, 
      icon: 'pi-shopping-cart', // icono de carrito de ventas
      color: 'text-blue-500', 
      image: '/demo/images/dashboard/users.svg' 
    },
    { 
      label: 'Visitantes Activos', 
      porcent: "5%", 
      value: 12, 
      icon: 'pi-users', // icono de usuarios
      color: 'text-purple-500', 
      image: '/demo/images/dashboard/interactions.svg' 
    },
    /*{ 
      label: 'Productos Nuevos en Inventario', 
      porcent: "11%", 
      value: 44, 
      icon: 'pi-box', // icono de caja
      color: 'text-blue-500', 
      image: '/demo/images/dashboard/blue.svg' 
    }*/
  ];
  
  recentOrders: any[] = [
    { client: 'Constructora ABC', product: 'Cemento Portland', quantity: 50, total: 750, status: 'Pendiente' },
    { client: 'Inmobiliaria XYZ', product: 'Ladrillos', quantity: 100, total: 1200, status: 'Enviado' },
    { client: 'Cliente Particular', product: 'Arena', quantity: 20, total: 200, status: 'Pendiente' },
    { client: 'Constructora ABC', product: 'Varilla Acero', quantity: 30, total: 450, status: 'Entregado' },
    { client: 'Cliente Particular', product: 'Grava', quantity: 15, total: 180, status: 'Pendiente' },
  ];
  salesChartData: any = {
    labels: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
    datasets: [
      {
        label: 'Ventas USD',
        data: [120, 150, 180, 200, 250, 300, 320],
        fill: false,
        borderColor: '#3b82f6',
        tension: 0.4
      }
    ]
  };

  categoryChartData  = {
    labels: ['Cemento', 'Ladrillos', 'Arena', 'Varilla', 'Grava'],
    datasets: [
      {
        data: [300, 250, 100, 150, 120],
        backgroundColor: ['#3b82f6', '#22c55e', '#facc15', '#ef4444', '#8b5cf6'],
        hoverOffset: 10
      }
    ]
  };

  salesToday: number = 1250.50;
  lowStockCount: number = 8;
  pendingOrders: number = 12;
  topProduct: string = 'Cemento Portland';
  adminName: string = 'Juan Pérez';

  acquisitionData: any;
  chartOptions: ChartOptions = {
    responsive: true
  };

  latestCustomers = [
    { initials: 'BS', name: 'Brooklyn Simmons', role: 'Manager at Mitsubishi', colorClass: 'bg-green-100 text-green-700' },
    { initials: 'LA', name: 'Leslie Alexander', role: 'Customer Success at General Electric', colorClass: 'bg-yellow-100 text-yellow-700' },
    { initials: 'JB', name: 'Jerome Bell', role: 'Mario Carrier at Nintendo', colorClass: 'bg-blue-100 text-blue-700' }
  ];

  ngOnInit() {
    this.acquisitionData = {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [
        {
          label: 'Signups',
          backgroundColor: '#42A5F5',
          data: [12, 19, 3, 5, 2, 3, 9]
        },
        {
          label: 'Active Users',
          backgroundColor: '#66BB6A',
          data: [2, 3, 20, 5, 1, 4, 7]
        }
      ]
    };
  }
}
