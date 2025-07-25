import {Component, input} from '@angular/core';
import {ArrowRight, LucideAngularModule} from 'lucide-angular';

@Component({
    selector: 'app-btn',
    templateUrl: './btn.html',
    styleUrl: './btn.scss',
    imports: [
        LucideAngularModule
    ]
})
export class BtnComponent {
    readonly label = input.required<string>()
    readonly type = input<'primary' | 'secondary' | 'tertiary'>('primary');
    readonly disabled = input(false);
    readonly href = input<string | undefined>();
    protected readonly ArrowRight = ArrowRight;
}
