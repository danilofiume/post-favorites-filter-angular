import { Component } from '@angular/core';
import { IPost, IPostCategory } from '../../models/post.model';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrl: './list-posts.component.css'
})
export class ListPostsComponent {

  posts: IPost[];

  categories: IPostCategory[];

  selectedFilter: string = 'all';

  constructor(private postsService: PostsService) {
    this.posts = this.postsService.getPosts();
    this.categories = this.postsService.getPostCategories();
  }

  selectFilter(filterId: string) {
    this.selectedFilter = filterId;
    this.posts = this.postsService.getPostsByCategory(this.selectedFilter);
  }


  addToFav(post: IPost): void {
    this.postsService.addPostToFavorite(post);
  }

}
