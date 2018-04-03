import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';

import { HraComponent }      from './hra/hra.component';

const routes: Routes = [
  { path: '', component: HraComponent },
  { path: 'HraDemo', component: HraComponent }
];

//Alternative
//export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes);

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
