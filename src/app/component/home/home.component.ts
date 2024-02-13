import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  numbers: number[] = [1, 2, 3, 4]

  texts: string[] = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  ];

  mainArray: { number: number, text: string, textColor: string, textSize: string }[] = [];

  ngOnInit() {
    for (let i = 0; i < this.numbers.length; i++) {
      this.mainArray.push({ number: this.numbers[i], text: this.texts[i], textColor: '', textSize: '' });
    }
  }

  getRandomColor(): string {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }

  getRandomFontSize(): string {
    const sizes = ['large', 'larger', 'x-large', 'xx-large', 'xxx-large'];
    const randomIndex = Math.floor(Math.random() * sizes.length);
    return sizes[randomIndex];
  }

  currentDate: number = 10;

  getDifferent() {
    this.mainArray.forEach(data => {
      data.textColor = this.getRandomColor();
      data.textSize = this.getRandomFontSize();
    });
  }

}
