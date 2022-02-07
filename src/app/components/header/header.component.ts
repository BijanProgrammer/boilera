import {Component} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

import {Theme} from '../../models/theme';
import {ThemeService} from '../../services/theme.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
    public Theme = Theme;

    public isInHome: boolean = false;

    public constructor(private router: Router, public themeService: ThemeService) {
        router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) this.isInHome = event.urlAfterRedirects === '/';
        });
    }
}
