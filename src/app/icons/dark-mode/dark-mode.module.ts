import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DarkModeComponent} from './dark-mode.component';

@NgModule({
    declarations: [DarkModeComponent],
    imports: [CommonModule],
    exports: [DarkModeComponent],
})
export class DarkModeModule {}
