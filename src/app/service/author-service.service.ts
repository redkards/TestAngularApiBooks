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
      return this.httpClient.get<Author[]>(`${this.apiUrl}/author`);
    }
  }

  getAuthorById(id: number): Observable<Author> {
    return this.httpClient.get<Author>(`${this.apiUrl}/author/${id}`);
  }

  addAuthor(author: Author): Observable<Author> {
    return this.httpClient.post<Author>(`${this.apiUrl}/author`, author);
  }

  updateAuthor(id: number, author: Author): Observable<Author> {
    return this.httpClient.put<Author>(`${this.apiUrl}/author/${id}`, author);
  }

  deleteAuthor(id: number): Observable<Author> {
    return this.httpClient.delete<Author>(`${this.apiUrl}/author/${id}`);
  }
}
