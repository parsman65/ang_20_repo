import {Component, Input} from '@angular/core';
import {Card} from 'primeng/card';
import {CurrencyPipe, NgIf} from '@angular/common';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [
    Card,
    CurrencyPipe,
    NgIf
  ],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.scss'
})
export class CourseCardComponent {
  @Input() image!: string;
  @Input() title!: string;
  @Input() instructor!: string;
  @Input() duration!: string;
  @Input() students!: number;
  @Input() level!: string;
  @Input() price!: number;
  @Input() discountedPrice?: number;
}
