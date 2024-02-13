import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  backColor: string = 'white'
  fontColor: string = 'black'

  changeBack() {
    this.backColor = this.backColor === 'black' ? 'white' : 'black';
    this.fontColor = this.fontColor === 'white' ? 'black' : 'white';
  }
}
