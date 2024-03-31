import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title-list',
  templateUrl: './title-list.component.html',
  styleUrl: './title-list.component.css'
})
export class TitleListComponent {
  @Input() text: string;
}
