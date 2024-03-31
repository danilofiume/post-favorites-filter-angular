import { Injectable } from '@angular/core';
import { IPost, IPostCategory, IPostInfo } from '../models/post.model';
import { postsInfo } from '../data/posts-info';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private postsInfo: IPostInfo = postsInfo;
  favoriteList: IPost[] = [];

  constructor() {

  }

  clearFavoritePost(){
    this.favoriteList = [];
  }

  getPosts(): IPost[] {
    return this.postsInfo.posts;
  }

  getPostCategories(): IPostCategory[] {
    return this.postsInfo.postCategories;
  }

  getPostsByCategory(categoryId: string): IPost[] {
    if (categoryId === 'all') return this.getPosts();

    const filteredList = this.getPosts().filter((post) => post.category === categoryId);
    return filteredList;
  }


  addPostToFavorite(post: IPost): void {
    const p = this.favoriteList.find(ps => ps.id === post.id);

    // console.log(this.favoriteList.includes(post))

    if(!p) {
      this.favoriteList.push(post);
    }
  }

  removeFromFavorite(postId: number): void {
    this.favoriteList = this.favoriteList.filter((p) => p.id !== postId);
  }



}
