import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProductEditComponent } from './pages/admin/product-edit/product-edit.component';
import { ProductAddComponent } from './pages/admin/product-add/product-add.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './Layout/home/home.component';
import { DashboardComponent } from './Layout/dashboard/dashboard.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductPageComponent,
    ProductAddComponent,
    ProductEditComponent,
    HomeComponent,
    DashboardComponent,
    ProductListComponent,
    ProductDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
