import {Component} from '@angular/core';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';
import {ButtonModule} from 'primeng/button';
import {CourseCardComponent} from '../courses/course-card/course-card.component';
import {NgForOf, NgStyle} from '@angular/common';
import {Carousel} from 'primeng/carousel';
import {Tag} from 'primeng/tag';
import {FooterComponent} from "../../shared/components/footer/footer.component";


@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
    imports: [
        TranslatePipe, ButtonModule, CourseCardComponent, NgForOf, Carousel, Tag, NgStyle, FooterComponent
    ],
  styleUrl: './home.component.css'
})
export class HomeComponent {
  courses: any[] = [];

  constructor(private translate: TranslateService) {
    this.courses = [
      {
        id: 1,
        slug: "javascript-0-to-100",
        image: "assets/images/course-titles/javascript.png",
        titleFa: "دوره آموزشی جامع جاوااسکریپت صفر تا صد",
        titleEn: "JavaScript 0 to 100",
        instructor: "علی اسلامی",
        duration: "20 ساعت",
        students: 1201,
        levelEn: "beginner to advanced",
        levelFa: "مقدماتی تا پیشرفته",
        price: 870000,
        discountedPrice: 450000,
        tag: "test"
      },

      {
        id: 2,
        slug: "java-beginner",
        image: "assets/images/course-titles/java-beginner.png",
        titleFa: "دوره آموزشی جامع جاوا مقدماتی",
        titleEn: "JavaScript 0 to 100",
        instructor: "علی اسلامی",
        duration: "20 ساعت",
        students: 1201,
        levelEn: "beginner",
        levelFa: "مقدماتی",
        price: 870000,
        discountedPrice: 450000,
        tag: "test"
      },

      {
        id: 3,
        slug: "java-intermediate",
        image: "assets/images/course-titles/java-intermediate.png",
        titleFa: "دوره آموزش جاوا متوسط",
        titleEn: "java intermediate",
        instructor: "علی اسلامی",
        duration: "20 ساعت",
        students: 1201,
        levelEn: "intermediate",
        levelFa: "متوسط",
        price: 870000,
        discountedPrice: 450000,
        tag: "test"
      },

      {
        id: 4,
        slug: "java-advanced",
        image: "assets/images/course-titles/java-advance.png",
        titleFa: "دوره آموزشی جاوا پیشرفته",
        titleEn: "java advanced",
        instructor: "علی اسلامی",
        duration: "20 ساعت",
        students: 1201,
        levelEn: "advanced",
        levelFa: "پیشرفته",
        price: 870000,
        discountedPrice: 450000,
        tag: "test"
      },


    ]
  }

}
