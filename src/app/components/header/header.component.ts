import {Component} from '@angular/core';
import {Theme} from 'src/app/models/theme';
import {ThemeService} from '../../services/theme.service';
import {NavigationEnd, Router} from '@angular/router';

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
