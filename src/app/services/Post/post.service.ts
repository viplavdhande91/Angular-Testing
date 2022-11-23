import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from 'src/app/models/Post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}

  public getPosts() {
    return this.http.get<Post[]>(`https://jsonplaceholder.typicode.com/posts`);
  }

  public deletePost(post: Post) {
    return this.http.delete(
      `https://jsonplaceholder.typicode.com/post/${post.id}`
    );
  }
}
