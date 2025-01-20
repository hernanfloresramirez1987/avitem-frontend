import { Component, signal } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SalesDetailWithNameProduct, SalesRegister } from '../../../../../_models/dto/inventory/ventas/ventasRegister.interface';
import { ProveedorItem } from '../../../../../_models/users/proveedores/proveedores.model';
import { ProductItem } from '../../../../../_models/inventory/products/product.model';
import { DatePipe } from '@angular/common';
import { ToastService } from '../../../../../_services/common/toast.service';
import { ConfirmationService } from 'primeng/api';
import { VentasService } from '../../../../../_services/ventas.service';

@Component({
  selector: 'app-sale-create',
  standalone: true,
  imports: [],
  templateUrl: './sale-create.component.html',
  styleUrl: './sale-create.component.scss'
})
export default class SaleCreateComponent {
  purchaseForm!: FormGroup;

  comprasRegister!: SalesRegister;
  proveedores!: ProveedorItem[];
  productos!: ProductItem[];

  detailView: SalesDetailWithNameProduct[] = [];
  
  stateInputs = signal<boolean>(true);
  currentDate = this.datePipe.transform(new Date(), 'dd/MM/yyyy');
  total = 0;

  constructor(private confirmationServ: ConfirmationService, private ventasServ: VentasService, private datePipe: DatePipe, private toastServ: ToastService) {

  }


}
