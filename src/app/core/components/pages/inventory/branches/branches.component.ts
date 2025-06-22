import { Column } from '@/core/_models/common/columns.interface';
import { MatchModel } from '@/core/_models/common/matchmodel.interface';
import { tableconfig } from '@/core/config/table.config';
import { UpperCasePipe } from '@angular/common';
import { Component, computed, Signal, signal, viewChild } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { Table, TableModule } from 'primeng/table';

@Component({
  selector: 'app-branches',
  imports: [CardModule, TableModule, ButtonModule, TranslatePipe, UpperCasePipe],
  templateUrl: './branches.component.html',
  styleUrl: './branches.component.scss'
})
export default class BranchesComponent {
  table = viewChild<Table>('dt1');
  filter = viewChild<Table>('filter');

  stateValues = signal<any>({ data: [], metadata: { page: 0, rows: 0, total_records: 0 }, loading: true, error: null});
  searchTxt = signal<Array<MatchModel>>([]);
  branchesdto = signal<any>({ config: { populate_data: true, page: 1, rows: 15, sort_field : []}, filter: { ...{} as any }});  

  tablecon: number[] = tableconfig.cantidadRegistros;
  stateIni = false;
  private readonly keylocalColumn = "branchs_cols";

  private readonly allowedColumns: string[] = ['id', 'nombre', 'direccion', 'matriz', 'pacacidad'];
  columns: string[] = this.allowedColumns;
  columnsSelectSignal: Signal<Column[]> = computed(() => this.columns
    .map(columnName => ({
      field: columnName,
      header: columnName.charAt(0).toUpperCase() + columnName.slice(1)
    })));
  colsOptionsSelect: Column[] = this.allowedColumns
    .map(columnName => ({
      field: columnName,
      header: columnName.charAt(0).toUpperCase() + columnName.slice(1)
  }));
}
