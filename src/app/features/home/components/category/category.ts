import {Component, signal} from '@angular/core';
import {navigation, NavigationData} from '@core/layouts/navigation/navigation';
import {NavigationItem} from '@core/layouts/navigation/components/item';

@Component({
    selector: 'app-category',
    templateUrl: './category.html',
    styleUrl: './category.scss',
    imports: [
        NavigationItem
    ]
})

export class Category {
    protected readonly data = signal<NavigationData[]>(navigation)
}
