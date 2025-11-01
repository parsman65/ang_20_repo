import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-course-details',
  standalone: true,
  imports: [],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.scss'
})
export class CourseDetailsComponent {

  @Input() image!: string;
  @Input() titleFa!: string;
  @Input() titleEn!: string;
  @Input() instructor!: string;
  @Input() duration!: string;
  @Input() students!: number;
  @Input() level!: string;
  @Input() price!: number;
  @Input() discountedPrice?: number;

}
