import { Component } from '@angular/core';
import { Author } from '../../models/author.model';
import { AuthorServiceService } from '../../service/author-service.service';
import { BookServiceService } from '../../service/book-service.service';
import { BookComponent } from '../book/book.component';
import { AuthorComponent } from '../author/author.component';
import Books from '../../models/book.model';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [BookComponent, AuthorComponent],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css',
})
export class ViewComponent {
  auteursList: Author[] = [];

  livres: Books[] = [];

  constructor(
    private authorService: AuthorServiceService, // Assuming AuthorService is a service that fetches authors from an API
    private bookService: BookServiceService // Assuming AuthorService is a service that fetches authors from an API
  ) {}

  ngOnInit(): void {
    this.authorService.getAllAuthors().subscribe((reponseAuthor) => {
      this.auteursList = reponseAuthor;

      console.log(this.auteursList);
    });

    this.bookService.getAllBooks().subscribe((reponseBook) => {
      this.livres = reponseBook;
      console.log(this.livres);
    });
  }
}
