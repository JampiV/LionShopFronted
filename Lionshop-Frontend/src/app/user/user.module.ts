import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { ProductoListComponent } from '../UI/product-list/product-list.component';
import { MaterialModule } from '../Infrastructure/material/material.module';
import { VerCarritoComponent } from './carrito/ver-carrito/ver-carrito.component';
import { CompraListComponent } from './compras/ver-compras/ver-compras.component';
import { ProcesoCompraComponent } from './carrito/proceso-compra/proceso-compra.component';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {NgxMaterialTimepickerModule} from "ngx-material-timepicker";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatTabsModule} from "@angular/material/tabs";
import {MatNativeDateModule} from "@angular/material/core";
import { MatIconModule } from '@angular/material/icon';
import { ModalitoComponent } from './carrito/shared/modalito/modalito.component';
import { DonarApartadoComponent } from './donar-apartado/donar-apartado.component';
import { FormDonacionComponent } from './shared/form-donacion/form-donacion.component';
import { PagarDonacionComponent } from './donar-apartado/pagar-donacion/pagar-donacion.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ModalReciboComponent } from './compras/shared/modal-recibo/modal-recibo.component';
import { DonacionesListComponent } from './donar-apartado/donaciones-list/donaciones-list.component';
import { FormSolicitudComponent } from './shared/form-solicitud/form-solicitud.component';
import { NewSolicitudesComponent } from '../UI/new-solicitudes/new-solicitudes.component';


@NgModule({
  declarations: [
    LayoutComponent,
    ProductoListComponent,
    LayoutComponent,
    VerCarritoComponent,
    CompraListComponent,
    ProcesoCompraComponent,
    ModalitoComponent,
    DonarApartadoComponent,
    FormDonacionComponent,
    PagarDonacionComponent,
    ModalReciboComponent,
    DonacionesListComponent,
    FormSolicitudComponent,
    NewSolicitudesComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule,
    MatProgressBarModule,
    ReactiveFormsModule,
    MatSelectModule,
    NgxMaterialTimepickerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTabsModule,
    FormsModule,
    MatIconModule,
    MatSnackBarModule
  ]
})
export class UserModule { }
