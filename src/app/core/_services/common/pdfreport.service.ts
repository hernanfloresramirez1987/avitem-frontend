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


    generatePdf = (venta: VentasItem, detalle: any[]) => {
        const doc = new jsPDF();
      
        // Agregar logo
        const logo = new Image();
        logo.src = 'layout/images/logo-dark.png';  // asegúrate que esté en /src/assets/images/
        logo.onload = () => {
            doc.addImage(logo, 'PNG', 10, 10, 30, 30);
        
            // --- 🔹 ENCABEZADO FACTURA ---
            doc.setFontSize(18);
            doc.text('FACTURA', 105, 20, { align: 'center' });
        
            // --- 🔹 DATOS GENERALES ---
            doc.setFontSize(11);
            doc.text(`N° Factura: ${venta.no}`, 150, 20);
            doc.text(`Fecha: ${new Date(venta.fechaventa).toLocaleDateString()}`, 150, 26);
        
            // --- 🔹 DATOS DEL CLIENTE ---
            const cliente = venta.cliente;
            doc.text('Cliente:', 10, 50);
            //doc.text(`Nombre: ${cliente?.nombre || 'N/A'}`, 10, 56);
            doc.text(`CI/NIT: ${cliente?.ci || 'N/A'}`, 10, 62);
            //doc.text(`Email: ${cliente?.email || 'N/A'}`, 10, 68);
        
            // --- 🔹 SUCURSAL / EMPRESA ---
            doc.text('Sucursal:', 150, 50);
            doc.text('Av. Siempre Viva #742', 150, 56);
            doc.text('Teléfono: 686-12345', 150, 62);
        
            // --- 🔹 DETALLE DE PRODUCTOS ---
            const startY = 80;
            doc.text('Detalle de la Venta:', 10, startY);
        
            // Encabezado de tabla
            doc.setFillColor(230, 230, 230);
            doc.rect(10, startY + 5, 190, 8, 'F');
            doc.setTextColor(0, 0, 0);
            doc.text('Producto', 12, startY + 10);
            doc.text('Cantidad', 80, startY + 10);
            doc.text('P. Unitario', 120, startY + 10);
            doc.text('Subtotal', 170, startY + 10);
        
            // --- 🔹 Llenar productos ---
            let y = startY + 15;
            let totalGeneral = 0;
        
            detalle.forEach((item, index) => {
              const nombreProd = item.producto || `Producto ${index + 1}`;
              const cantidad = Number(item.cantidad) || 0;
              const precioUnitario = parseFloat(item.precioUnitario || 0);
              const subtotal = cantidad * precioUnitario;
              totalGeneral += subtotal;
        
              doc.text(nombreProd, 12, y);
              doc.text(String(cantidad), 85, y);
              doc.text(`Bs ${precioUnitario.toFixed(2)}`, 120, y);
              doc.text(`Bs ${subtotal.toFixed(2)}`, 170, y);
              y += 8;
            });
        
            // --- 🔹 TOTAL GENERAL ---
            doc.setDrawColor(0);
            doc.line(120, y + 2, 200, y + 2);
            doc.setFontSize(12);
            doc.text('TOTAL GENERAL:', 120, y + 10);
            doc.text(`Bs ${totalGeneral.toFixed(2)}`, 170, y + 10);
        
            // --- 🔹 PIE DE PÁGINA ---
            doc.setFontSize(10);
            doc.text('Gracias por su compra.', 105, 280, { align: 'center' });
            doc.text('Documento generado por Avitem Importaciones', 105, 285, { align: 'center' });
        
            // --- 🔹 DESCARGAR ---
            doc.save(`Factura_${venta.id}.pdf`);
          };
    };
}