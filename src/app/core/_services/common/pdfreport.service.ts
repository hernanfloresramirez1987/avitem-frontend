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


    generatePdf = () => {
        const doc = new jsPDF();

        // Agregar logo (debes usar una imagen base64 o una URL absoluta válida si es en línea)
        const img = new Image();
        img.src = 'layout/images/logo-dark.png'; // ruta relativa desde /src/assets
        img.onload = () => {
        doc.addImage(img, 'PNG', 10, 10, 30, 30); // cuando cargue, la añade
        doc.save('factura.pdf');
        };
        // const logoBase64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUg...'; // reemplaza con tu logo real
        // doc.addImage(logoBase64, 'PNG', 10, 10, 30, 30); // (x, y, width, height)

        // Título
        doc.setFontSize(18);
        doc.text('FACTURA', 105, 20, { align: 'center' });

        // Datos de la Factura
        doc.setFontSize(11);
        doc.text(`Número Factura: 000123`, 150, 20);
        doc.text(`Fecha: ${new Date().toLocaleDateString()}`, 150, 26);

        // Datos del Cliente
        doc.text('Cliente:', 10, 50);
        doc.text('Nombre: Juan Pérez', 10, 56);
        doc.text('CI: 12345678', 10, 62);
        doc.text('Email: juan.perez@email.com', 10, 68);

        // Sucursal
        doc.text('Sucursal:', 150, 50);
        doc.text('Av. Siempre Viva #742', 150, 56);

        // Detalle de productos (tabla manual sin autotable)
        const startY = 80;
        doc.text('Detalle:', 10, startY);

        // Encabezado
        doc.setFillColor(200, 200, 200); // Gris claro
        doc.rect(10, startY + 5, 190, 8, 'F'); // Rectángulo fondo
        doc.setTextColor(0, 0, 0);
        doc.text('Producto', 12, startY + 10);
        doc.text('Cant.', 80, startY + 10);
        doc.text('Precio', 120, startY + 10);
        doc.text('Total', 170, startY + 10);

        // Datos de ejemplo
        const items = [
            { product: 'Producto A', quantity: 2, price: 10 },
            { product: 'Producto B', quantity: 1, price: 15 },
            { product: 'Producto C', quantity: 3, price: 7 },
        ];

        let currentY = startY + 15;
        let totalGeneral = 0;

        items.forEach(item => {
            const total = item.quantity * item.price;
            totalGeneral += total;

            doc.text(item.product, 12, currentY);
            doc.text(String(item.quantity), 85, currentY);
            doc.text(`$${item.price.toFixed(2)}`, 120, currentY);
            doc.text(`$${total.toFixed(2)}`, 170, currentY);
            currentY += 8;
        });

        // Línea de Total
        doc.setDrawColor(0);
        doc.line(120, currentY + 2, 200, currentY + 2); // línea horizontal
        doc.text('TOTAL GENERAL:', 120, currentY + 10);
        doc.text(`$${totalGeneral.toFixed(2)}`, 170, currentY + 10);

        // Descargar o visualizar
        doc.save('factura.pdf');
    }
}