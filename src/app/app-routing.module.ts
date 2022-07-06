import { DefaultComponent } from './default/default.component';
import { IndexesComponent } from './indexes/indexes.component';
import { SimpleComponent } from './simple/simple.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '',
  component: IndexesComponent
 },
 { path: 'simpleComponent',
 component: SimpleComponent
},
{ path: 'defualtComponent',
component: DefaultComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
