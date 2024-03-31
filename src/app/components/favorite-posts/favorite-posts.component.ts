import { Component } from '@angular/core';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-favorite-posts',
  templateUrl: './favorite-posts.component.html',
  styleUrl: './favorite-posts.component.css'
})
export class FavoritePostsComponent {

  constructor(public postsService: PostsService) {}


  onRemoveFromFavorites(postId: number): void {
    this.postsService.removeFromFavorite(postId);
  }

  onClearList(): void {
    this.postsService.clearFavoritePost();
  }

}
