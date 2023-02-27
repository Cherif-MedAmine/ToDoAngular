import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { article } from 'src/Models/Article';
import { ArticlesComponent } from './articles/articles.component';
import { OffresemploiComponent } from './offresemploi/offresemploi.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';

const routes: Routes = [
  {path:"", component:OffresemploiComponent},
  {path:"form", component:TemplateDrivenFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
