import { Component, Input } from '@angular/core';
import { BookServiceService } from '../../service/book-service.service';
import { AuthorServiceService } from '../../service/author-service.service';
import Books from '../../models/book.model';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css',
})
export class BookComponent {
  @Input()
  book: any;

  constructor(
    private authorService: AuthorServiceService, // Assuming AuthorService is a service that fetches authors from an API
    private bookService: BookServiceService // Assuming AuthorService is a service that fetches authors from an API
  ) {}

  ngOnInit(): void {
    this.bookService
      .getAllBooks()
      .subscribe((responseBook) => (this.book = responseBook));
    console.log(this.book);
  }
}
