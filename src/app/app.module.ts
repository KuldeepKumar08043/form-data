import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableFormDataComponent } from './component/table-form-data/table-form-data.component';
import { FormDataComponent } from './component/form-data/form-data.component';
import { FormService } from './services/form-service.service';

@NgModule({
  declarations: [
    AppComponent,
    TableFormDataComponent,
    FormDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [FormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
