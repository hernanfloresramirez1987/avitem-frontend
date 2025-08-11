import { PurcharseRegister } from '@/core/_models/dto/inventory/compras/comprasRegister.interface';
import { ComprasResponse } from '@/core/_models/dto/inventory/compras/comprasResponse.interface';
import { ComprasService } from '@/core/_services/compras.service';
import { DetalleComprasService } from '@/core/_services/detalle-compras.service';
import { CapitalizePipe } from '@/core/pipes/capital-letter.pipe';
import { TranslateLanService } from '@/layout/service/translate-lan.service';
import { CommonModule, UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, inject, Input, input, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { map } from 'rxjs';
import { TranslateLanModule } from 'src/app/core/_modules/translate-lan.module';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { ButtonGroupModule } from 'primeng/buttongroup';

@Component({
  selector: 'app-return-details',
  standalone: true,
  imports: [CardModule, TableModule, ButtonModule, TranslateLanModule, TagModule, TranslateModule, CommonModule, InputGroupModule, InputGroupAddonModule, ButtonGroupModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class DetailsReturnComponent {
  id: string | null = null;
  title = "labels.detail_purchase";
  itemRegister = signal<ComprasResponse>({} as ComprasResponse);
  detailView = signal<any>(null);

  constructor(private readonly comprasServ: ComprasService, private readonly detalleComprasServ: DetalleComprasService, private readonly router: Router, private readonly route: ActivatedRoute, private readonly translateLanService: TranslateLanService, private readonly translate : TranslateService) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.translateLanService.changeLanguage$.subscribe((lan: string) => this.translate.use(lan));
    effect(() => {
      this.comprasServ.getOneCompra(Number(this.id))
        .subscribe(t => this.itemRegister.set(t))
      
        this.detalleComprasServ.getDetCompras(Number(this.id))
        .subscribe(t => this.detailView.set(t))

    })
  }

  redirectNew = () => this.router.navigate(['/transactions/compras/'])
}
