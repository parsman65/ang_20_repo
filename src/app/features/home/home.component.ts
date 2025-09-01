import {Component} from '@angular/core';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';
import {ButtonModule} from 'primeng/button';
import {CourseCardComponent} from '../courses/course-card/course-card.component';
import {NgForOf} from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  imports: [
    TranslatePipe, ButtonModule, CourseCardComponent, NgForOf
  ],
  styleUrl: './home.component.css'
})
export class HomeComponent {
  courses: any[] = [];

  constructor(private translate: TranslateService) {
    this.courses = [
      {
        image: "assets/images/course-titles/course-javascript.png", title: "Javascript", instructor: "علی اسلامی",
        duration: "20 ساعت", students: 1201, level: "مقدماتی تا پیشرفته", price: 870000, discountedPrice: 450000
      },
      {
        image: "assets/images/course-titles/course-javascript.png", title: "Javascript", instructor: "علی اسلامی",
        duration: "20 ساعت", students: 1201, level: "مقدماتی تا پیشرفته", price: 870000, discountedPrice: 450000
      },
      {
        image: "assets/images/course-titles/course-javascript.png", title: "Javascript", instructor: "علی اسلامی",
        duration: "20 ساعت", students: 1201, level: "مقدماتی تا پیشرفته", price: 870000, discountedPrice: 450000
      },
      {
        image: "assets/images/course-titles/course-javascript.png", title: "Javascript", instructor: "علی اسلامی",
        duration: "20 ساعت", students: 1201, level: "مقدماتی تا پیشرفته", price: 870000, discountedPrice: 450000
      },
      {
        image: "assets/images/course-titles/course-javascript.png", title: "Javascript", instructor: "علی اسلامی",
        duration: "20 ساعت", students: 1201, level: "مقدماتی تا پیشرفته", price: 870000, discountedPrice: 450000
      },
      {
        image: "assets/images/course-titles/course-javascript.png", title: "Javascript", instructor: "علی اسلامی",
        duration: "20 ساعت", students: 1201, level: "مقدماتی تا پیشرفته", price: 870000, discountedPrice: 450000
      },
      {
        image: "assets/images/course-titles/course-javascript.png", title: "Javascript", instructor: "علی اسلامی",
        duration: "20 ساعت", students: 1201, level: "مقدماتی تا پیشرفته", price: 870000, discountedPrice: 450000
      }
    ]
  }

}
