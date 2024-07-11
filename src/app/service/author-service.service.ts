import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Author } from '../models/author.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthorServiceService {
  private apiUrl = 'http://localhost:8000';

  constructor(private httpClient: HttpClient) {}

  getAllAuthors(): Observable<Author[]> {
    {
      return this.httpClient.get<Author[]>(`${this.apiUrl}/api/authors`);
    }
  }

  getAuthorById(id: number): Observable<Author> {
    return this.httpClient.get<Author>(`${this.apiUrl}/api/authors/${id}`);
  }

  addAuthor(author: Author): Observable<Author> {
    return this.httpClient.post<Author>(`${this.apiUrl}/api/authors`, author);
  }

  updateAuthor(id: number, author: Author): Observable<Author> {
    return this.httpClient.put<Author>(
      `${this.apiUrl}/api/authors/${id}`,
      author
    );
  }

  deleteAuthor(id: number): Observable<Author> {
    return this.httpClient.delete<Author>(`${this.apiUrl}/api/authors/${id}`);
  }
}
