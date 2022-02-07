import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {IconsModule} from '../icons/icons.module';

import {HeaderComponent} from './header/header.component';

@NgModule({
    declarations: [HeaderComponent],
    imports: [CommonModule, RouterModule, IconsModule],
    exports: [HeaderComponent],
})
export class ComponentsModule {}
