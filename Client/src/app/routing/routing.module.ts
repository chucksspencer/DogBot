import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DispenserComponent } from '../components/dispenser/dispenser.component';


const routes: Routes = [
    {
        path: '',
        component: DispenserComponent,
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }
