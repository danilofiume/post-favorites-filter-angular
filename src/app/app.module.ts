import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FavoritePostsComponent } from './components/favorite-posts/favorite-posts.component';
import { FavoriteItemComponent } from './components/favorite-item/favorite-item.component';
import { ListPostsComponent } from './components/list-posts/list-posts.component';
import { PostComponent } from './components/post/post.component';
import { TitleListComponent } from './components/title-list/title-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FavoritePostsComponent,
    FavoriteItemComponent,
    ListPostsComponent,
    PostComponent,
    TitleListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
