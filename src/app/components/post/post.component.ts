import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IPost } from '../../models/post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  @Input() post: IPost;

  @Output() onAddToFavorite: EventEmitter<IPost> = new EventEmitter();


  onAddToFav(): void {
    console.log('test')
    this.onAddToFavorite.emit(this.post);
  }
}


// Dumb/UI User Interface Components (presentazione di dati)

// Smart Components (logica di business)
