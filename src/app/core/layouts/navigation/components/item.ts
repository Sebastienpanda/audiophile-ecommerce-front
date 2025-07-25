import {Component, input} from '@angular/core';
import {BtnComponent} from '@shared/components/ui/btn/btn';

@Component({
    selector: 'app-navigation-item',
    templateUrl: './item.html',
    styleUrl: './item.scss',
    imports: [
        BtnComponent
    ]
})

export class NavigationItem {
    readonly title = input.required<string>()
    readonly urlBtn = input.required<string>()
    readonly icon = input<string>()
}
