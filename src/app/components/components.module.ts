import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {RouterModule} from '@angular/router';
import {IconsModule} from '../icons/icons.module';

@NgModule({
    declarations: [HeaderComponent],
    imports: [CommonModule, RouterModule, IconsModule],
    exports: [HeaderComponent],
})
export class ComponentsModule {}
