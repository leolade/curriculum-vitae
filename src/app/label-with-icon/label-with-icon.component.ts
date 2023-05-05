import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-label-with-icon',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './label-with-icon.component.html',
  styleUrls: ['./label-with-icon.component.scss']
})
export class LabelWithIconComponent {
  @Input() icon?: string;
  @Input() iconPosition: 'before' | 'after' = 'before';

}
