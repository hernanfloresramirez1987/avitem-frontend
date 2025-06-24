import { Injectable } from '@angular/core';
import jsPDF from 'jspdf';
// import autoTable from 'jspdf-autotable';
import { formatDate, calculateTotal } from './pdf-helpers';


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


    generateSalesReport_(data: any[], reportTitle: string = 'Reporte de Ventas'): void {
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
}