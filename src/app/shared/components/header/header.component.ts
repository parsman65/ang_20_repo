import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: true
})
export class HeaderComponent {

  @Output() toggleSidebar = new EventEmitter<void>();

  onHamburgerClick() {
    this.toggleSidebar.emit();
  }

}
