import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Book from '../models/book.model';

@Injectable({
  providedIn: 'root',
})
export class BookServiceService {
  private apiUrl = 'http://localhost:8000';

  constructor(private httpClient: HttpClient) {}

  getAllBooks(): Observable<Book[]> {
    {
      return this.httpClient.get<Book[]>(`${this.apiUrl}/api/books`);
    }
  }

  getBookById(id: number): Observable<Book> {
    return this.httpClient.get<Book>(`${this.apiUrl}/api/books/${id}`);
  }

  addBook(book: Book): Observable<Book> {
    return this.httpClient.post<Book>(`${this.apiUrl}/api/books`, book);
  }

  updateBook(book: Book): Observable<Book> {
    return this.httpClient.put<Book>(`${this.apiUrl}/api/books`, book);
  }

  deleteBook(id: number): Observable<Book> {
    return this.httpClient.delete<Book>(`${this.apiUrl}/api/books/${id}`);
  }
}
