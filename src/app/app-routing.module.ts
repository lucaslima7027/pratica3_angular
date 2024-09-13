import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataSelectorComponent } from "./components/data-selector/data-selector.component";
import { DataDisplayComponent } from './components/data-display/data-display.component';

const routes: Routes = [{
  path: "seletor_de_datas", component: DataSelectorComponent,
  children:[{
    path:"display_de_datas", component: DataDisplayComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
