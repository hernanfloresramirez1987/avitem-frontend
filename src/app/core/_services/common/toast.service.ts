import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private messageService: MessageService) {}

  // Método genérico para mostrar mensajes
  show(severity: 'success' | 'info' | 'warn' | 'error', summary: string, detail: string, life: number = 3000): void {
    this.messageService.add({ severity, summary, detail, life });
  }

  // Métodos específicos para diferentes tipos de mensajes
  showSuccess(summary: string, detail: string): void {
    this.show('success', summary, detail);
  }

  showInfo(summary: string, detail: string): void {
    this.show('info', summary, detail);
  }

  showWarning(summary: string, detail: string): void {
    this.show('warn', summary, detail);
  }

  showError(summary: string, detail: string): void {
    this.show('error', summary, detail);
  }
}
