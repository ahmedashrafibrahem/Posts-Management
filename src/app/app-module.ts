import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
// import { PostList } from './post-list/post-list';
// import { PostDetail } from './post-detail/post-detail';
// import { PostEdit } from './post-edit/post-edit';

@NgModule({
  declarations: [
    App,
    // PostList,
    // PostDetail,
    // PostEdit
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
