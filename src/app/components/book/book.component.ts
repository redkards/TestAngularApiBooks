import { Component } from '@angular/core';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css',
})
export class BookComponent {
  book: Book = new Book();
}
