import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LightModeComponent} from './light-mode.component';

@NgModule({
    declarations: [LightModeComponent],
    imports: [CommonModule],
    exports: [LightModeComponent],
})
export class LightModeModule {}
