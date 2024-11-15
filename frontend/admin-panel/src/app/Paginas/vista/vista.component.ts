import { Component } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts'; // Importa el módulo

// Define explícitamente las interfaces de ApexCharts
import { ApexOptions } from 'ng-apexcharts';

@Component({
  selector: 'app-vista',
  standalone: true,
  imports: [NgApexchartsModule], // Asegúrate de que el módulo esté importado aquí
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css']
})
export default class VistaComponent {

  // 1. Gráfico de líneas: Ventas diarias por mes
  getLineChartOptions(): ApexOptions {
    return {
      series: [{
        name: "Ventas Diarias",
        data: [30, 40, 35, 50, 49, 60, 70, 91, 85, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250, 260, 270, 280, 290]
      }],
      chart: {
        type: "line",
        height: 350
      },
      xaxis: {
        categories: Array.from({ length: 30 }, (_, i) => `${i + 1}`) // Días 1 al 30
      },
      title: {
        text: 'Ventas Diarias por Mes',
        align: 'center'
      }
    };
  }

  // 2. Gráfico de barras: Suscripción diaria por semana
  getBarChartOptions(): ApexOptions {
    return {
      series: [{
        name: "Suscripciones Diarias",
        data: [12, 15, 25, 30, 28, 40, 45]
      }],
      chart: {
        type: "bar",
        height: 350
      },
      xaxis: {
        categories: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"]
      },
      title: {
        text: 'Suscripciones Diarias por Semana',
        align: 'center'
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%'
        }
      },
      dataLabels: {
        enabled: true
      }
    };
  }

  // 3. Gráfico de barras: Suscripción semanal por mes
  getWeeklyBarChartOptions(): ApexOptions {
    return {
      series: [{
        name: "Suscripciones Semanales",
        data: [50, 60, 70, 80] // Datos por semana
      }],
      chart: {
        type: "bar",
        height: 350
      },
      xaxis: {
        categories: ["Semana 1", "Semana 2", "Semana 3", "Semana 4"]
      },
      title: {
        text: 'Suscripciones Semanales por Mes',
        align: 'center'
      }
    };
  }

  // 4. Gráfico de pastel: Porcentaje de cuentas
  getPieChartOptions(): ApexOptions {
    return {
      series: [40, 30, 30], // Porcentajes
      chart: {
        type: 'pie',
        height: 350
      },
      labels: ["Cuentas Anuales", "Cursos Individuales", "Cuentas en Desuso"],
      title: {
        text: 'Porcentaje de Cuentas',
        align: 'center'
      }
    };
  }

  // 5. Gráfico de barras: Suscripción mensual por año
  getMonthlyBarChartOptions(): ApexOptions {
    return {
      series: [{
        name: "Suscripciones Mensuales",
        data: [100, 200, 150, 300, 400, 500, 600, 700, 800, 900, 1000, 1100] // Datos por mes
      }],
      chart: {
        type: "bar",
        height: 350
      },
      xaxis: {
        categories: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
      },
      title: {
        text: 'Suscripciones Mensuales por Año',
        align: 'center'
      }
    };
  }

  // 6. Gráfico de barras: Suscripción anual por década
  getAnnualBarChartOptions(): ApexOptions {
    return {
      series: [{
        name: "Suscripciones Anuales",
        data: [1000, 1200, 1400, 1600, 1800, 2000, 2200, 2400, 2600, 2800] // Datos por año en una década
      }],
      chart: {
        type: "bar",
        height: 350
      },
      xaxis: {
        categories: ["2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023"]
      },
      title: {
        text: 'Suscripciones Anuales por Década',
        align: 'center'
      }
    };
  }
}
