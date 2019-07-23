import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { AdvancedSearchComponent } from './advanced-search/advanced-search.component';
import { SingleHospitalViewComponent } from './single-hospital-view/single-hospital-view.component';

import { MatFormFieldModule,MatInputModule,MatSelectModule,MatAutocompleteModule } from '@angular/material';

import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    FooterComponent,
    AdvancedSearchComponent,
    SingleHospitalViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatAutocompleteModule,
  ],
  providers: [ DataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
