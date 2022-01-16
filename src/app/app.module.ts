import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

// components
import { AppComponent } from './app.component';
import { CrearCitasComponent } from './components/crear-citas/crear-citas.component';
import { ListCitasComponent } from './components/list-citas/list-citas.component';

@NgModule({
  declarations: [
    AppComponent,
    ListCitasComponent,
    CrearCitasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
