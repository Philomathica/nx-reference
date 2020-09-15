import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'demo-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {}
