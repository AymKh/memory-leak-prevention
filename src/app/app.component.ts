import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentComponent } from './component/component.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  componentToggle: boolean = false;

}
