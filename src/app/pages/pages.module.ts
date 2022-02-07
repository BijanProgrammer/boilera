import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {ComponentsModule} from '../components/components.module';
import {PipesModule} from '../pipes/pipes.module';

import {HomeComponent} from './home/home.component';

@NgModule({
    declarations: [HomeComponent],
    imports: [CommonModule, RouterModule, ComponentsModule, PipesModule],
})
export class PagesModule {}
