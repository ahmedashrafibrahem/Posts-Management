import { Injectable } from '@angular/core';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private postsKey = 'posts';

  constructor() { }

  getPosts(): Post[] {
    const postsJson = localStorage.getItem(this.postsKey);
    return postsJson ? JSON.parse(postsJson) : [];
  }

  getPostById(id: number): Post | undefined {
    const posts = this.getPosts();
    return posts.find(post => post.id === id);
  }

  addPost(post: Omit<Post, 'id'>): void {
    const posts = this.getPosts();
    const newId = posts.length > 0 ? Math.max(...posts.map(p => p.id)) + 1 : 1;
    const newPost: Post = { ...post, id: newId };
    posts.push(newPost);
    this.savePosts(posts);
  }

  updatePost(updatedPost: Post): void {
    let posts = this.getPosts();
    posts = posts.map(post => post.id === updatedPost.id ? updatedPost : post);
    this.savePosts(posts);
  }

  deletePost(id: number): void {
    let posts = this.getPosts();
    posts = posts.filter(post => post.id !== id);
    this.savePosts(posts);
  }

  private savePosts(posts: Post[]): void {
    localStorage.setItem(this.postsKey, JSON.stringify(posts));
  }
}
