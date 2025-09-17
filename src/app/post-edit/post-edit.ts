import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../post.service';
import { Post } from '../post';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.html',
  styleUrls: ['./post-edit.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class PostEditComponent implements OnInit {
  post: Post | undefined;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getPost();
  }

  getPost(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.post = this.postService.getPostById(id);
  }

  savePost(): void {
    if (this.post) {
      this.postService.updatePost(this.post);
      this.router.navigate(['/posts', this.post.id]);
    }
  }

  cancelEdit(): void {
    if (this.post) {
      this.router.navigate(['/posts', this.post.id]);
    } else {
      this.router.navigate(['/posts']);
    }
  }
}
