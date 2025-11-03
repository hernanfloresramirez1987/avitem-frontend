import { Injectable } from '@angular/core';
import jsPDF from 'jspdf';
// import autoTable from 'jspdf-autotable';
import { formatDate, calculateTotal } from './pdf-helpers';
import { VentasItem } from '@/core/_models/inventory/ventas/ventas.model';


export interface SaleItem {
    product: string;
    quantity: number;
    price: number;
    total: number;
}

@Injectable({
    providedIn: 'root'
})
export class PdfReportService {


    generateSalesReport_(detaildata: any[], reportTitle: string = 'Reporte de Ventas'): void {
        const doc = new jsPDF();

        // 1. Título
        doc.setFontSize(16);
        doc.text(reportTitle, 105, 20, { align: 'center' });

        // 2. Fecha actual
        doc.setFontSize(10);
        doc.text(`Fecha: ${formatDate(new Date())}`, 14, 30);

    }

    generateSalesReport(title: string, sales: SaleItem[], reportDate: Date): void {
        const doc = new jsPDF();

        let cursorY = 10; // cursor vertical inicial

        // Título
        doc.setFontSize(18);
        doc.text(title, 105, cursorY, { align: 'center' });

        cursorY += 10;

        // Fecha
        doc.setFontSize(12);
        const dateStr = reportDate.toLocaleDateString();
        doc.text(`Fecha: ${dateStr}`, 14, cursorY);

        cursorY += 10;

        // Encabezados de la tabla
        doc.setFontSize(12);
        const headers = ['Producto', 'Cantidad', 'Precio', 'Total'];
        const colWidths = [60, 30, 30, 30];
        let cursorX = 14;

        headers.forEach((header, index) => {
            doc.text(header, cursorX, cursorY);
            cursorX += colWidths[index];
        });

        cursorY += 8; // espacio debajo de headers

        // Cuerpo de la tabla
        sales.forEach(item => {
            cursorX = 14; // reset horizontal
            const row = [item.product, item.quantity.toString(), `$${item.price}`, `$${item.total}`];
            row.forEach((cell, index) => {
                doc.text(cell, cursorX, cursorY);
                cursorX += colWidths[index];
            });
            cursorY += 8; // siguiente fila
        });

        // Pie de página
        cursorY += 10;
        doc.setFontSize(10);
        const totalAmount = sales.reduce((sum, item) => sum + item.total, 0);
        doc.text(`Total general: $${totalAmount.toFixed(2)}`, 14, cursorY);

        // Footer
        doc.text('Reporte generado por AgroLink360', 105, 290, { align: 'center' });

        // Descargar
        doc.save('reporte_ventas.pdf');
    }


    generatePdf = (venta: any, detalle: any[]) => {
        const doc = new jsPDF({
          orientation: 'portrait',
          unit: 'mm',
          format: 'a4'
        });
      
        const margenIzq = 15;
        const anchoPagina = 190;
      
        // Helper: parsear y formatear fecha robustamente
        const parseDate = (value: any): Date | null => {
          if (!value && value !== 0) return null;
      
          // Si es Date ya
          if (value instanceof Date) return value;
      
          // Si es número: puede ser segundos (10 dígitos) o ms (13 dígitos)
          if (typeof value === 'number') {
            const s = String(value).length;
            return s === 10 ? new Date(value * 1000) : new Date(value);
          }
      
          // Si es string numérica
          if (/^\d+$/.test(String(value))) {
            const num = parseInt(value, 10);
            const s = String(value).length;
            return s === 10 ? new Date(num * 1000) : new Date(num);
          }
      
          // Intentar parseo estándar (ISO, etc.)
          const parsed = Date.parse(value);
          if (!isNaN(parsed)) return new Date(parsed);
      
          return null;
        };
      
        const formatDate = (value: any, locale = 'es-BO') => {
          const d = parseDate(value) || new Date();
          // Formato dd/mm/yyyy con Intl
          return new Intl.DateTimeFormat(locale, {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
          }).format(d);
        };
      
        // --- 🔹 LOGO Y ENCABEZADO ---
        const logo = new Image();
        logo.src = 'layout/images/logo-dark.png'; // Asegúrate de tener el logo en assets
        logo.onload = () => {
          doc.addImage(logo, 'PNG', margenIzq, 10, 16, 16);
      
          doc.setFont('helvetica', 'bold');
          doc.setFontSize(20);
          doc.text('FACTURA', 105, 20, { align: 'center' });
      
          doc.setFont('helvetica', 'normal');
          doc.setFontSize(11);
          doc.text(`N° Factura: ${venta.no || 'N/A'}`, 150, 20);
      
          // -> Usamos formatDate para mostrar la fecha correctamente
          doc.text(`Fecha: ${formatDate(venta.fechaventa)}`, 150, 26);
      
          // Línea divisoria
          doc.setDrawColor(150);
          doc.line(margenIzq, 38, margenIzq + anchoPagina, 38);
      
          // --- 🔹 DATOS DEL CLIENTE ---
          const cliente = venta.cliente?.persona || {};
          doc.setFont('helvetica', 'bold');
          doc.setFontSize(13);
          doc.text('Datos del Cliente', margenIzq, 48);
      
          doc.setFont('helvetica', 'normal');
          doc.setFontSize(11);
          const nombreCompleto = `${cliente.nombre || ''} ${cliente.app || ''} ${cliente.apm || ''}`.trim() || 'N/A';
          doc.text(`Nombre: ${nombreCompleto}`, margenIzq, 54);
          doc.text(`CI/NIT: ${cliente.ci || 'N/A'}`, margenIzq, 60);
          doc.text(`Email: ${cliente.email || 'N/A'}`, margenIzq, 66);
      
          // --- 🔹 DATOS DE LA SUCURSAL ---
          doc.setFont('helvetica', 'bold');
          doc.text('Sucursal / Empresa', 135, 48);
      
          doc.setFont('helvetica', 'normal');
          doc.setFontSize(11);
          doc.text('Av. Siempre Viva #742', 135, 54);
          doc.text('Teléfono: 686-12345', 135, 60);
          doc.text('Santa Cruz - Bolivia', 135, 66);
      
          // Línea divisoria
          doc.setDrawColor(150);
          doc.line(margenIzq, 72, margenIzq + anchoPagina, 72);
      
          // --- 🔹 DETALLE DE PRODUCTOS ---
          const startY = 82;
          doc.setFont('helvetica', 'bold');
          doc.setFontSize(13);
          doc.text('Detalle de la Venta', margenIzq, startY);
      
          // Encabezado de tabla
          const headerY = startY + 6;
          doc.setFillColor(230, 230, 230);
          doc.rect(margenIzq, headerY, anchoPagina, 8, 'F');
          doc.setTextColor(0, 0, 0);
          doc.setFontSize(11);
          doc.text('Producto', margenIzq + 2, headerY + 6);
          doc.text('Cantidad', 90, headerY + 6);
          doc.text('P. Unitario (Bs)', 125, headerY + 6);
          doc.text('Subtotal (Bs)', 170, headerY + 6);
      
          // --- 🔹 LLENAR TABLA ---
          let y = headerY + 12;
          let totalGeneral = 0;
      
          detalle.forEach((item, index) => {
            const nombreProd = item.producto || `Producto ${index + 1}`;
            const cantidad = Number(item.cantidad) || 0;
            const precioUnitario = parseFloat(item.precioUnitario || 0);
            const subtotal = cantidad * precioUnitario;
            totalGeneral += subtotal;
      
            doc.setFont('helvetica', 'normal');
            doc.text(nombreProd, margenIzq + 2, y);
            doc.text(String(cantidad), 92, y);
            // Ajuste para alinear derecha números: pasamos el x y align
            doc.text(precioUnitario.toFixed(2), 160, y, { align: 'right' });
            doc.text(subtotal.toFixed(2), 188, y, { align: 'right' });
            y += 8;
      
            // Si llegamos al final de la página, crear nueva página y repetir encabezado simple
            if (y > 250) {
              doc.addPage();
              y = 20;
            }
          });
      
          // --- 🔹 TOTAL GENERAL ---
          doc.setDrawColor(0);
          doc.line(120, y + 2, 200, y + 2);
          doc.setFont('helvetica', 'bold');
          doc.setFontSize(12);
          doc.text('TOTAL GENERAL:', 120, y + 10);
          doc.text(`Bs ${totalGeneral.toFixed(2)}`, 180, y + 10, { align: 'right' });
      
          // --- 🔹 PIE DE PÁGINA ---
          doc.setDrawColor(200);
          doc.line(margenIzq, 270, margenIzq + anchoPagina, 270);
          doc.setFont('helvetica', 'italic');
          doc.setFontSize(10);
          doc.text('Gracias por su compra.', 105, 278, { align: 'center' });
          doc.text('Documento generado por Avitem Importaciones', 105, 284, { align: 'center' });
      
          // --- 🔹 DESCARGAR ---
          doc.save(`Factura_${venta.no || 'sin_id'}-${venta.fechaVenta}.pdf`);
        };
    };            
}