import { UpperCasePipe } from '@angular/common';
import { Component, ElementRef, signal, ViewChild } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { Table, TableModule } from 'primeng/table';
import { LibModule } from '../../../lib/lib.module';
import { StateProveedorResponseModel } from '../../../../_models/users/proveedores/proveedoresResponse.interface';
import { MatchModel } from '../../../../_models/common/matchmodel.interface';
import { ProveedorDTO } from '../../../../_models/dto/users/proveedors/proveedor.interface.dto';
import { ProveedorBaseFilter } from '../../../../_models/dto/users/proveedors/proveedoresSearch.interface.dto';

@Component({
  selector: 'app-suppliers',
  standalone: true,
  imports: [TranslateModule, UpperCasePipe, TableModule, ButtonModule, LibModule],
  templateUrl: './suppliers.component.html',
  styleUrl: './suppliers.component.scss'
})
export default class SuppliersComponent {
  @ViewChild('dt1') table!: Table;
  @ViewChild('filter') filter!: ElementRef;

  stateValues = signal<StateProveedorResponseModel>({ data: [], page: 0, rows: 0, total_records: 0, loaded: false, loading: true, error: null});
  searchTxt = signal<Array<MatchModel>>([]);
  employeedto = signal<ProveedorDTO>({ config: { populate_data: true, page: 1, rows: 15, sort_field : []}, filter: { ...{} as ProveedorBaseFilter }});

}
