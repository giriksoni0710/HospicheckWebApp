import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AdvancedSearchComponent } from './advanced-search/advanced-search.component';
import { SingleHospitalViewComponent } from './single-hospital-view/single-hospital-view.component';
<<<<<<< HEAD

=======
import { CompareComponent } from './compare/compare.component';
>>>>>>> 832ddb1adcb9b7959b1420e83f92926300ed604c

const routes: Routes = [
{path: '', component: HomeComponent},
{path: 'about', component: AboutComponent},
{path: 'contact', component: ContactComponent},
{path: 'advanced-search', component: AdvancedSearchComponent},
<<<<<<< HEAD
{path: 'single-hospital-view', component: SingleHospitalViewComponent}
=======
{path: 'single-hospital-view', component: SingleHospitalViewComponent},
{path: 'compare', component: CompareComponent},

>>>>>>> 832ddb1adcb9b7959b1420e83f92926300ed604c

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
