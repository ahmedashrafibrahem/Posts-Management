import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.html',
  styleUrls: ['./post-list.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class PostListComponent implements OnInit {
  posts: Post[] = [];
  newPost: Omit<Post, 'id'> = { title: '', body: '' };

  constructor(private postService: PostService, private router: Router) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(): void {
    this.posts = this.postService.getPosts();
  }

  addPost(): void {
    if (this.newPost.title && this.newPost.body) {
      this.postService.addPost(this.newPost);
      this.newPost = { title: '', body: '' };
      this.getPosts();
    }
  }

  deletePost(id: number): void {
    this.postService.deletePost(id);
    this.getPosts();
  }

  viewPost(id: number): void {
    this.router.navigate(['/posts', id]);
  }

  editPost(id: number): void {
    this.router.navigate(['/posts', id, 'edit']);
  }
}
