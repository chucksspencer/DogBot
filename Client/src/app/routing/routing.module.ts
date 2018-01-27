import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DispenserComponent } from '../components/dispenser/dispenser.component';
import { TweakComponent } from '../components/tweak/tweak.component';

const routes: Routes = [
    { path: '',  component: DispenserComponent },
    { path: 'tweak',  component: TweakComponent },
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
