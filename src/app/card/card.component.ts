import {Component, Input} from '@angular/core';
import {CommonModule} from "@angular/common";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: true,
    imports: [
        CommonModule,
        MatCardModule,
        MatIconModule,
    ]
})
export class CardComponent {

    @Input({required: true}) title: string;
    @Input() subtitle?: string;
    @Input() icon?: string;

}
