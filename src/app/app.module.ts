import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { MatTableModule } from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon'
import { NgxPaginationModule } from 'ngx-pagination';
import { MaterialsModule } from './materials/materials.module';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatSelectModule} from '@angular/material/select';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { DropdownModule } from 'primeng/dropdown';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MatMomentDateModule } from '@angular/material-moment-adapter';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { CookieService } from 'ngx-cookie-service';
import { AbsPipe } from './pipes/abs.pipe';
import {MatChipsModule} from '@angular/material/chips';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NgChartsModule } from 'ng2-charts';
import { MatDividerModule } from '@angular/material/divider';
import { NgApexchartsModule } from 'ng-apexcharts';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTooltipModule } from '@angular/material/tooltip';
import { LandingPage } from './components/landing-page/landing-page';
import { Register } from './components/register/register';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    AppComponent,
    LandingPage,
    Register,
    AbsPipe,
    AdminDashboardComponent  
  ],
  imports: [
    MatTooltipModule,
    MatAutocompleteModule,
    NgApexchartsModule,
    DropdownModule,
    NgChartsModule,
    MatDividerModule,
    BrowserModule,
    NzAlertModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    MatTableModule,
    MatPaginatorModule,
    FontAwesomeModule,
    MatCardModule,
    NgxPaginationModule,
    FormsModule,
    MatSelectModule,
    MatChipsModule,
    CommonModule,
    MatIconModule,
    MatFormFieldModule,
    NgxMatSelectSearchModule,
    MatExpansionModule,
   ToastrModule.forRoot({
      progressBar:true,
      progressAnimation:'decreasing',
      timeOut: 4000
    }),
    MatMomentDateModule,
    TranslateModule.forRoot({
      loader: {
      provide: TranslateLoader,
      useFactory: HttpLoaderFactory,
      deps: [HttpClient]
      }
      }) 

  
  ],
  providers: [
    // { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } },
    // { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },CookieService,
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: Interceptor,
    //   multi: true
    // }
  ],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
// export function HttpLoaderFactory(http: HttpClient) {
//   return new TranslateHttpLoader(http);
// }