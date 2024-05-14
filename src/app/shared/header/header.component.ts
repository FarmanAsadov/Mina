import { NgClass } from '@angular/common';
import { compileClassDebugInfo } from '@angular/compiler';
import { Component, HostListener, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isMenuOpen: boolean = false;
  isPopupOpen: boolean = false;
  handleClick() {
    this.isMenuOpen = !this.isMenuOpen;
    this.isPopupOpen = false;
  }
  handlePopup() {
    this.isPopupOpen = !this.isPopupOpen;
  }

  constructor(router: Router) {
    router.events.subscribe(() => {
      this.isMenuOpen = false;
      this.isPopupOpen = false;
    });
  }
}
