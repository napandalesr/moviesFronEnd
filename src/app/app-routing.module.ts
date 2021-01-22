import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './componentes/main/main.component'
import { HeaderComponent } from './componentes/header/header.component'
import { DetallesComponent } from './componentes/detalles/detalles.component'
import { Page404Component } from './componentes/page404/page404.component'

const routes: Routes = [
  { path:'detalles/:id', component:DetallesComponent },
  { path:'', component:HeaderComponent, pathMatch:'full' },
  { path:'nofound', component:Page404Component },
  { path:'**', redirectTo:'nofound' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
