import {Component} from '@angular/core';
import {BtnComponent} from '@shared/components/ui/btn/btn';

@Component({
    selector: 'app-hero-banner',
    templateUrl: './hero-banner.html',
    styleUrl: './hero-banner.scss',
    imports: [
        BtnComponent
    ]
})

export class HeroBanner {
}
