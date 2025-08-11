import { Component } from '@angular/core';
import { ChartModule } from 'primeng/chart';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export default class DashboardComponent {
  pieData: any;
  barData = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
    datasets: [
      {
        label: 'Ventas',
        backgroundColor: '#42A5F5',
        data: [65, 59, 80, 81, 56]
      }
    ]
  };
  doughnutData = {
    labels: ['Rojo', 'Azul', 'Amarillo'],
    datasets: [
      {
        data: [200, 150, 100],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
      }
    ]
  };
  horizontalBarData = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril'],
    datasets: [
      {
        label: 'Usuarios',
        backgroundColor: '#4BC0C0',
        data: [45, 60, 70, 40]
      }
    ]
  };
  horizontalBarOptions = {
    indexAxis: 'y'
  };
  lineData = {
    labels: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'],
    datasets: [
      {
        label: 'Visitas',
        fill: false,
        borderColor: '#42A5F5',
        tension: 0.4,
        data: [12, 19, 3, 5, 2]
      }
    ]
  };

  radarData = {
    labels: ['Comida', 'Ejercicio', 'Estudio', 'Descanso', 'Trabajo'],
    datasets: [
      {
        label: 'Semana 1',
        backgroundColor: 'rgba(179,181,198,0.2)',
        borderColor: 'rgba(179,181,198,1)',
        pointBackgroundColor: 'rgba(179,181,198,1)',
        data: [65, 59, 50, 81, 56]
      },
      {
        label: 'Semana 2',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        pointBackgroundColor: 'rgba(255,99,132,1)',
        data: [8, 48, 40, 19, 6, 10]
      }
    ]
  };
  polarAreaData = {
    labels: ['Rojo', 'Verde', 'Amarillo', 'Azul'],
    datasets: [
      {
        data: [11, 16, 7, 3],
        backgroundColor: ['#FF6384', '#4BC0C0', '#FFCE56', '#36A2EB'],
        label: 'Mi dataset'
      }
    ]
  };
  bubbleData = {
    datasets: [
      {
        label: 'Primera',
        data: [{ x: 20, y: 30, r: 15 }, { x: 40, y: 10, r: 10 }],
        backgroundColor: '#FF6384'
      },
      {
        label: 'Segunda',
        data: [{ x: 10, y: 20, r: 10 }, { x: 30, y: 40, r: 20 }],
        backgroundColor: '#36A2EB'
      }
    ]
  };
  scatterData = {
    datasets: [
      {
        label: 'Mis puntos',
        data: [{ x: 5, y: 10 }, { x: 15, y: 5 }, { x: 10, y: 15 }],
        backgroundColor: '#FFCE56'
      }
    ]
  };

  constructor() {
    this.pieData = {
      labels: ['Clientes', 'Empleados', 'Productos'],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: [
            "#42A5F5",
            "#66CB6A",
            "#FFA726"
          ],
          hoverBackgroundColor: [
            "#64B5F6",
            "#81C784",
            "#FFB74D"
          ]
        }
      ]
    };
  }

  
}
