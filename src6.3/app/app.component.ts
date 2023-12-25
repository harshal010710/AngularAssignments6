import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
@Component({
  selector: 'app-root',
  template: '<div><label for="input">Marvellous Infosystem</label><input style="color: red;" type="text"></div>',
  standalone: true,
  imports: [CommonModule, RouterOutlet, DemoComponent],
  // templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent 
{
  title = 'AngularAssignment6_3';

}
