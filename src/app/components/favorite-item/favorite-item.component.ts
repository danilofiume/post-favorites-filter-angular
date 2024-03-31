import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IPost } from '../../models/post.model';

@Component({
  selector: 'app-favorite-item',
  templateUrl: './favorite-item.component.html',
  styleUrl: './favorite-item.component.css'
})
export class FavoriteItemComponent {
  @Input() favPost: IPost;

  @Output() onRemovePost: EventEmitter<number> = new EventEmitter();

  onRemovePostFromList(): void {
    this.onRemovePost.emit(this.favPost.id);
  }
}
