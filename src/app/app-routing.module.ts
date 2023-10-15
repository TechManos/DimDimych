import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContentAreaComponent} from "./content-area/content-area.component";
import {DimychHeaderComponent} from "./dimych-header/dimych-header.component";

const routes: Routes = [
  { path: 'topics/:topicId', component: ContentAreaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    bindToComponentInputs: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
